import React from "react";
import "./Category.css";
import Search from "../Search/Search";
import Service from "../Service/Service";
function Category() {
  return (
    <div className="category__container">
      <Search />
      <div className="category__rows">
        <div className="category__service" id="firstRow">
          <Service />
          <Service />
          <Service />
        </div>
        <div className="category__service" id="secndRow">
          <Service />
          <Service />
          <Service />
        </div>
        <div className="category__service" id="thirdRow">
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </div>
  );
}

export default Category;
