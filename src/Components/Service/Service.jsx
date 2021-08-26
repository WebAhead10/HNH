import React from "react";
import "./Service.css";
import { useHistory } from "react-router-dom";
function Service({ name, image, url}) {
  const history = useHistory();
  return (
    <div className="service_container">
      <img
      className='hara'
        src={image}
        alt=""
        onClick={() => {
          history.push(url);
        }}
      />
      <div className="service_name">{name}</div>
    </div>
  );
}

export default Service;
