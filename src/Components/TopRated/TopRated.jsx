import React, { useState, useEffect } from "react";
import "./style.css";
import Rating from "../Rating/Rating";
import "../WorkerData/Workerdata";
import Worker from "../Worker/Worker";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function TopRated() {
  const [workersList, setWorkerList] = useState([]);
  workersList.sort((a, b) => b.ratenumber - a.ratenumber);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/workers")
      .then((res) => setWorkerList(res.data.users));
  }, []);

  return (
    <div>
      <div className="home">
        {workersList.map((worker) => (
          <Worker key={worker.id} worker={worker}/>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
