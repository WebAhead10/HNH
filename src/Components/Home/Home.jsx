import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search/Search";
import Worker from "../Worker/Worker";
import axios from "axios";
function Home({setCurWorker}) {
  const [workersList, setWorkerList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/workers")
      .then((res) => setWorkerList(res.data.users));
  }, []);

  return (
    <div className="home">
      <Search />
      {workersList.map((worker) => (
        <Worker setCurWorker={setCurWorker} key={worker.id} worker={worker} />
      ))}

      {/* <Worker />
      <Worker /> */}
    </div>
  );
}

export default Home;
