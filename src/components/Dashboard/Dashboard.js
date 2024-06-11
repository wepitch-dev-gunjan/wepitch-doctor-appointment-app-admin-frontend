import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdi/css/materialdesignicons.min.css";

const CostPerUnitCard = () => {
  return (
    <div className="card-body">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Cost per Unit</h5>
        <span className="badge bg-primary">Daily</span>
      </div>
      <div className="row d-flex align-items-center mb-4">
        <div className="col-8">
          <h2 className="d-flex align-items-center mb-0">$17.21</h2>
        </div>
        <div className="col-4 text-end">
          <span className="text-muted">
            12.5% <i className="mdi mdi-arrow-up text-success"></i>
          </span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "57%" }}
        ></div>
      </div>
    </div>
  );
};

export default CostPerUnitCard;
