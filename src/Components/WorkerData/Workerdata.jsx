import React from "react";
import "./Workerdata.css";
import Schedule from "../Schedule/Schedule";
import Rating from "../Rating/Rating";
import TextField from '@material-ui/core/TextField';



function Workerdata({ worker }) {

  const currentDate = new Date()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  
return (
<div className="workerdataa">
  {/* add profile pic */}
  <img className="WorkerImage" src={worker.image} alt="" />
  {/* main data worker *********** */}
  <div className="workerdata">
    {/* worker name */}
    <h2>{worker.name}</h2>
    {/* ocupation */}
    <h4>{worker.ocupation}</h4>
    {/* stars */}
    <Rating fullStars={worker.stars} />
    {/* desc */}
    <p className="WorkerDecs">{worker.decsription}</p>
    {/* order button */}
  </div>
  <div className="calender">
    <Schedule />
  </div>

  

  <div className="timeOrder">
    <TextField id="time" type="time" defaultValue={hours + ":" + minutes}
    
      InputLabelProps={{
        shrink: true,
        }} inputProps={{
      step: 3600, // 5 min
    }} />
    <button className="OrderButton" onClick={console.log(worker)}>Order</button>
  </div>
</div>
);
}

export default Workerdata;