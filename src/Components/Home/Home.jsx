import React from "react";
import "./style.css";
import Search from "../Search/Search";
import Worker from "../Worker/Worker";
function Home() {
  return (
    <div className="home">
      <Search />
      <Worker />
      <Worker />
      <Worker />
    </div>
  );
}

export default Home;
