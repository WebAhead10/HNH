import React from "react";
import Rating from "../Rating/Rating";
import Card from "../Card/Card";

import "./style.css";
function Order({ worker }) {
  return (
    <div className="mainOrder">
      <p className="Ordertext">Your order details:</p>
      <div className="workerPay">
        <div className="imgPay">
          <img src={worker.img} alt="" />
        </div>
        <div className="worker_Pay">
          <div className="worker_namePay">
            <span className="namePay">{worker.fullname}</span>
            <div className="starss">
              <Rating fullStars={worker.ratenumber} />
            </div>
          </div>
          <span className="worker_jobPay">{worker.jobtitle}</span>
        </div>
      </div>
      {/* // TODO add a user/ customer info .... */}
      <div className="user_Info">
        <div className="userInfo_row">
          <span className="userName">Hassan hassuna</span>
          <span className="grey userPhone">0526428495</span>
        </div>
        <div className="userInfo_row">
          <span className="grey userAddress">12 yaffa st. YAFFA</span>
          <span className="grey userZip">5373945</span>
        </div>
      </div>
      {/* // ? make sure to take the user its authenticated */}
      <div className="paymentDiv">
        {/* // ! dept CARD */}
        <Card />
      </div>
      <button className="payButton">Pay</button>
    </div>
  );
}

export default Order;
