import React from "react";
import "./Workerdata.css";

function Workerdata({ worker }) {
  return (
    <div className="workerdataa">
      {/* add profile pic */}
      <img className="WorkerImage" src={worker.image} alt="" />
      {/* main data worker *********** */}
      <div className="workerdata">
        {/* worker name  */}
        <h2>{worker.name}</h2>
        {/* ocupation */}
        <h4>{worker.ocupation}</h4>
        {/* stars */}
        {/* <Stars >  TODO */}
        {/* desc */}
        <p className="WorkerDecs">{worker.decsription}</p>
        {/* order button */}
        <button>Order</button>
      </div>
    </div>
  );
}

export default Workerdata;
