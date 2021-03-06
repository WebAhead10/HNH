import React, { useState } from "react";
import "./Workerdata.css";
import Schedule from "../Schedule/Schedule";
import Rating from "../Rating/Rating";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";
function Workerdata(props) {
  const [jobDate, setJobDate] = useState(new Date());
  const [worker, setWorker] = useState({});
  const [time, setTime] = useState([]);
  const history = useHistory();
  const params = useParams();
  const timeValue = new Date();
  const AvHours = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];
  const [jobTime, setJobTime] = useState(AvHours[0]);
  const fetchWorker = (id) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/worker/" + id)
      .then((res) => {
        setWorker(res.data.worker);
      })
      .catch((error) => console.log(error));
  };
  React.useEffect(() => {
    if (params.id) {
      fetchWorker(params.id);
    }
  }, []);

  if (timeValue.getMinutes() > 30) {
    timeValue.setMinutes("00");
    timeValue.setHours(timeValue.getHours() + 1);
  } else {
    timeValue.setMinutes("30");
  }

  const filteredHours = AvHours.filter(
    (index) => index > timeValue.getHours() + ":" + timeValue.getMinutes()
  );

  return (
    <div className="workerdataa">
      {/* add profile pic */}
      <img className="WorkerImage" src={worker.img} alt="" />
      {/* main data worker *********** */}
      <div className="workerdata">
        {/* worker name */}
        <h2>{worker.fullname}</h2>
        {/* ocupation */}
        <h4>{worker.jobtitle}</h4>
        {/* stars */}
        <Rating fullStars={worker.ratenumber || 0} />
        {/* desc */}
        <p className="WorkerDecs">{worker.info}</p>
        {/* order button */}
      </div>
      <p className="infoText">please pick a date for your job</p>
      <div className="calender">
        <Schedule
          jobDate={jobDate}
          setJobDate={setJobDate}
          setJobTime={setJobTime}
        />
      </div>

      <div className="timeOrder">
        <div className="timePicker">
          <label className="infoText">Job time</label>
          <select defaultValue="" onChange={(e) => setJobTime(e.target.value)}>
            <option value="">select</option>
            {(timeValue.getDate() === jobDate.getDate() &&
            timeValue.getMonth() === jobDate.getMonth()
              ? filteredHours
              : AvHours
            ).map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <button
          className="OrderButton"
          onClick={() => {
            // TODO here will be the set state for :
            console.log(jobDate);
            console.log(jobTime);
            //axios.post(jobtime,jobdata) -> fetch back in the payment
            if (jobTime && jobDate) {
              props.setSelectedJobTime(jobTime);
              props.setSelectedJobDate(jobDate);
              history.push("/order/" + worker.id);
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
