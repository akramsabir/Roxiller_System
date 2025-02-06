import React from "react";

import TransactionTable from "./TranscationTable";
import StatusChart from "./StatusChart";
import ProductsStatistics from "./ProductsStatistics";
import DonutCharts from "./DonutCharts";

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h-100">
                <div className="row">
                  <div className="col-xl-12">
                    <TransactionTable />
                  </div>
                  <div className="col-xl-12">
                    <div className="card">
                      <StatusChart />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <ProductsStatistics />
                  </div>
                  <div className="col-xl-6">
                    <div className="card card-height-100">
                      <DonutCharts />
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
