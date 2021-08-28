import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./style.css";

const PaymentForm = ({ form, setForm }) => {
  const handleInputFocus = (e) => {
    setForm({ ...form, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={form.cvc}
        expiry={form.expiry}
        focused={form.focus}
        name={form.name}
        number={form.number}
      />
      <form className="input-credit">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          maxLength="16"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="mm/yy"
          maxLength="4"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="cvc"
          maxLength="3"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
