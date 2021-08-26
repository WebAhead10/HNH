import React from "react";
import "./style.css";
import Rating from "../Rating/Rating";
import "../WorkerData/Workerdata";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function CategoryList() {
  const history = useHistory();
  const params = useParams();
  const [workers, setWorkers] = React.useState([]);

  const fetchCategory = (category) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/job-title/" + category)
      .then((res) => {
        setWorkers(res.data.workers);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    if (params.category) {
      fetchCategory(params.category);
    }
  }, []);

  return workers.map((worker) => (
    <div key={worker.id} className="worker">
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
              history.push("/workerdata");
            }}
          >
            Info
          </button>
        </div>
      </div>
    </div>
  ));
}

export default CategoryList;
