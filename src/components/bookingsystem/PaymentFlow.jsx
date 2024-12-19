import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div>
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <form>
        <label>Kortnummer</label>
        <input type="number" name="number" placeholder="Card Number" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label>Kortnummer</label>
        <input type="number" name="expiry" placeholder="expiry date" value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label>Kortnummer</label>
        <input type="number" name="cvc" placeholder="cvc" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label>Kortnummer</label>
        <input type="number" name="name" placeholder="name" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        ...
      </form>
    </div>
  );
};

export default PaymentForm;
