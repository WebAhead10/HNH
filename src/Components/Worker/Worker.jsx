import React from "react";
import "./Worker.css";
import "../WorkerData/Workerdata";
import { Link } from "react-router-dom";
function Worker() {
  return (
    <div className="worker">
      <div className="cir">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A"
          alt=""
        />
      </div>
      <div className="worker_info">
        <div className="worker_name">
          <span className="name">Mario Saliba</span>
          <span className="rate">🌟🌟🌟🌟🌟</span>
        </div>
        <span className="worker_job">FullStack web developer</span>
        <div className="worker_desc">
          Mario is a senior fullstack web developer that have alot of experience
          with frontend & backend development.
          <Link to="/workerdata">
            <button className="InfoButton">Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Worker;
