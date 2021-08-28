import React, { useState, useEffect } from "react";
import "./style.css";
import Worker from "../Worker/Worker";
import axios from "axios";
function Home() {
  const [workersList, setWorkerList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/workers")
      .then((res) => setWorkerList(res.data.users));
  }, []);

  return (
    <div className="home">
      {workersList.map((worker) => (
        <Worker key={worker.id} worker={worker} />
      ))}
    </div>
  );
}

export default Home;
