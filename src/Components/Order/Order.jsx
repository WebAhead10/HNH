import React, { useState } from "react";
import Rating from "../Rating/Rating";
import Card from "../Card/Card";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function Order({ selectedJobDate, selectedJobTime }) {
  const [form, setForm] = React.useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const params = useParams();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [worker, setWorker] = useState({});
  const [appointmentData, setappointmentData] = useState({});
  const onSubmit = () => {
    console.log("reached paiments and appointments!!!!!");
    console.log(selectedJobDate);
    console.log(selectedJobTime);
    console.log(form);
    console.log(appointmentData);
    axios
      .post(process.env.REACT_APP_API_URL + "/order/" + worker.id, {
        workerId: worker.id,
        jobYear: selectedJobDate.getYear(),
        jobMonth: selectedJobDate.getMonth(),
        jobDay: selectedJobDate.getDate(),
        jobHours: parseInt(selectedJobTime.toString().split(":")[0]),
        jobMinutes: parseInt(selectedJobTime.toString().split(":")[1]),
        visaNumber: form.number,
        visaHolder: form.name,
        visaXdate: form.expiry,
        visaCvc: form.cvc,
      })
      .then((res) => {
        if (!res.data.success) {
          setError(res.data.message);
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  console.log(form);
  const fetchWorker = (id) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/order/" + id)
      .then((res) => {
        setWorker(res.data.worker);
      })
      .catch((error) => console.log(error));
  };
  React.useEffect(() => {
    if (params.id) {
      fetchWorker(params.id);
    }
  }, []);
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
              <Rating fullStars={worker.ratenumber || 0} />
            </div>
          </div>
          <span className="worker_jobPay">{worker.jobtitle}</span>
        </div>
      </div>
      {/* // TODO add a user/ customer info .... */}
      <div className="user_Info">
        <div className="userInfo_row">
          <span className="userName">{worker.fullname}</span>
          <span className="grey userPhone">{worker.phonenum}</span>
        </div>
        <div className="userInfo_row">
          <span className="grey userAddress">12 yaffa st. YAFFA</span>
          <span className="grey userZip">5373945</span>
        </div>
      </div>
      {/* // ? make sure to take the user its authenticated */}
      <div className="paymentDiv">
        {/* // ! dept CARD */}
        <Card form={form} setForm={setForm} />
      </div>
      <button className="payButton" onClick={onSubmit}>
        Pay
      </button>
    </div>
  );
}

export default Order;
