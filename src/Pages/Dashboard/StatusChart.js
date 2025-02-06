import React, { useContext, useEffect, useState, useRef } from "react";
import { ConfigContext } from "../../Context/ConfigContext";
import axios from "axios";
import ApexCharts from "apexcharts";
import Select from "react-select";

const StatusChart = () => {
    const [chartData, setChartData] = useState([]);
    const { apiURL, apiHeaderJson } = useContext(ConfigContext);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const chartRef = useRef(null); 

    const monthOptions = [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" },
    ];

    
    const getChart = async () => {
        try {
            const response = await axios.get(`${apiURL}Products/GetProductsBarChart`, {
                params: { month: selectedMonth },
                headers: apiHeaderJson,
            });
            if (response.data.success) {
                setChartData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    };

    
    useEffect(() => {
        getChart();
    }, [selectedMonth]);

    useEffect(() => {
        if (chartData.length > 0) {
            
            const categories = chartData.map((item) => item.price_range);
            const counts = chartData.map((item) => item.count);

            const options = {
                series: [
                    {
                        name: "Products Count",
                        data: counts,
                    }
                ],
                chart: {
                    type: "bar",
                    height: 350,
                    toolbar: { show: false },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                        columnWidth: "50%",
                    },
                },
                xaxis: {
                    categories: categories,
                    title: {
                        text: 'Price Range',
                    },
                },
                yaxis: {
                    title: {
                        text: 'Count',
                    },
                },
                colors: ["#17a2b8"],
                tooltip: {
                    y: {
                        formatter: (value) => `${value} Products`,
                    },
                },
            };

            
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            
            chartRef.current = new ApexCharts(document.querySelector("#bar_chart"), options);
            chartRef.current.render();
        }

        
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null; 
            }
        };
    }, [chartData]); 

    
    const handleMonthChange = (selectedOption) => {
        setSelectedMonth(selectedOption.value);
    };

    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h4 className="card-title mb-0">Bar Chart Stats - {monthOptions.find(m => m.value === selectedMonth)?.label}</h4>
                        <div className="col-md-2">
                            <Select
                                options={monthOptions}
                                value={monthOptions.find(option => option.value === selectedMonth) || null}
                                onChange={handleMonthChange}
                                placeholder="Please select a month"
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="bar_chart"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusChart;
