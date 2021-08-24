import React, { useState, useEffect } from "react";
import "./Workerdata.css";
import Schedule from "../Schedule/Schedule";
import Rating from "../Rating/Rating";
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

const arr = ["07:00", "07:30"];

function Workerdata({ worker }) {
  const [jobDate, setJobDate] = useState(new Date());
  const [jobTime, setJobTime] = useState("HH:MM");
  const history = useHistory();
  const timeValue = new Date();
  if (timeValue.getMinutes() > 30) {
    timeValue.setMinutes("00");
    timeValue.setHours(timeValue.getHours() + 1);
  } else {
    timeValue.setMinutes("30");
  }

  // !/**************************** */

  const minTime = new Date();
  minTime.setMinutes(timeValue.getMinutes());
  minTime.setHours("07");

  const dateChanged = () => {
    if (
      timeValue.getDate() === jobDate.getDate() &&
      timeValue.getMonth() === jobDate.getMonth()
    ) {
      minTime.setHours(timeValue.getHours() + 1);
    }
  };

  const maxTime = new Date();
  maxTime.setHours("21");
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
      <p className="infoText">please pick a date for your job</p>
      <div className="calender">
        <Schedule
          jobDate={jobDate}
          setJobDate={setJobDate}
          dateChanged={dateChanged()}
          setJobTime={setJobTime}
        />
      </div>

      <div className="timeOrder">
        <div className="timePicker">
          <label className="infoText">Job time</label>
          {/* <input type="time" step="600" value="08:30"  /> */}
          {/* <input type="number" min="0" max="21" />
          <input type="number"  /> */}
          <select>
            {arr.map((_, i) => (
              <option>{_}</option>
            ))}
          </select>
          {/* <TimePickerComponent
            // disabled= {jobDate?false:true}
            onChange={console.log}
            value={jobTime}
            // min={minTime}
            // max={maxTime}
            format="HH:mm"
            step={30}
          ></TimePickerComponent> */}
        </div>
        <button
          className="OrderButton"
          onClick={() => {
            // TODO here will be the set state for :
            // ? worker , date , time ,...
            if (worker) {
              history.push("/order");
            }
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default Workerdata;
