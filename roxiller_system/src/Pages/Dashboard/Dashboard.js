import React from "react";

import TransactionTable from "./TranscationTable";
import StatusChart from "./StatusChart";

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
