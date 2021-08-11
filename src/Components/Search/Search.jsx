import React from "react";
import "./search.css";
function Search({ style }) {
  return (
    <div className="search__container" style={style}>
      <input type="text" placeholder="Search here" />
      <button className="btn">Search</button>
    </div>
  );
}

export default Search;
