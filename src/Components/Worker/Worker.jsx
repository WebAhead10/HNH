import React, { useEffect } from "react";
import "./Worker.css";
import Rating from "../Rating/Rating";
import "../WorkerData/Workerdata";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Worker({ worker }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const history = useHistory();
  return (
    <div data-aos="zoom-in" className="worker">
      <div className="cir">
        <img src={worker.img} alt="" />
      </div>
      <div className="worker_info">
        <div className="worker_name">
          <span className="name">{worker.fullname}</span>
          <Rating fullStars={worker.ratenumber} />
        </div>
        <span className="worker_job">{worker.jobtitle}</span>
        <div className="worker_desc">
          {worker.info}
          <button
            className="InfoButton"
            onClick={() => {
              history.push("/workerdata/" + worker.id);
            }}
          >
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Worker;
