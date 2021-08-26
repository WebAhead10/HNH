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
          <Service
            name="Plumer"
            image="https://image.freepik.com/free-photo/plumber-with-his-arms-crossed_1368-515.jpg"
            url="/plumer"
          />
          <Service
            name="Electrician"
            image="https://image.freepik.com/free-vector/colorful-electricity-elements-concept_1284-37811.jpg"
            url="/electrician"
          />
        </div>
        <div className="category__service" id="secndRow">
          <Service
            name="Carpinter"
            image="https://image.freepik.com/free-photo/portrait-smiling-male-carpenter-holding-handsaw-looking-camera_23-2147944898.jpg"
            url="/carpinter"
          />
          <Service
            name="Mechanical"
            image="https://image.freepik.com/free-vector/mechanic-background-design_1322-73.jpg"
            url="/mechanical"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
