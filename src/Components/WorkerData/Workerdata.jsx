import React from "react";
import "./Workerdata.css";
import Schedule from "../Schedule/Schedule";
import Rating from "../Rating/Rating";

function Workerdata({ worker }) {
  return (
    <div className="workerdataa" >
      {/* add profile pic */}
      <img className="WorkerImage" src={worker.image} alt="" />
      {/* main data worker *********** */}
      <div className="workerdata">
        {/* worker name  */}
        <h2>{worker.name}</h2>
        {/* ocupation */}
        <h4>{worker.ocupation}</h4>
        {/* stars */}
        <Rating fullStars={worker.stars}/>
        {/* desc */}
        <p className="WorkerDecs">{worker.decsription}</p>
        {/* order button */}
        <button>Order</button>
      </div>
      <div className="calender">
      <Schedule />
      </div>
    </div>
  );
}

export default Workerdata;
