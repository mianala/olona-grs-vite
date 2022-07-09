import React, { useRef, useEffect } from "react";
import { BsFillCreditCard2FrontFill as Creditcard } from "react-icons/bs";
// import CreditCardInput from "react-credit-card-input"

export default function Payment() {
  const cardNumberRef = useRef();

  let formats = (ele) => {
    if (ele.value.length < 19) {
      ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
      return true;
    } else {
      return false;
    }
  };

  let numberValidation = (e) => {
    e.target.value = e.target.value.replace(/[^\d ]/g, "");
    return false;
  };

  return (
    <div className="w-full flex flex-col gap-5 ">
      <h1 className="font-extrabold text-3xl">Methode de Payement</h1>
      <div className="form-control w-full">
        <label htmlFor="payment-method">
          Choisisser votre methode de payement
        </label>
        <select
          id="payment-method"
          placeholder="Type here"
          className="input input-bordered w-1/3"
        >
          <option value="visa">Visa</option>
          <option value="paypal">Paypal</option>
          <option value="mastercard">Mastercard</option>
          <option value="crypto">Crypto</option>
        </select>
      </div>
      {/* <CreditCardInput
        cardNumberInputProps={{
          value: cardNumber,
          onChange: this.handleCardNumberChange,
        }}
        cardExpiryInputProps={{
          value: expiry,
          onChange: this.handleCardExpiryChange,
        }}
        cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
        fieldClassName="input"
      /> */}
      <div className="form-control w-full">
        <label htmlFor="payment-method">
          Choisisser votre methode de payement
        </label>

        <div class="relative form-control w-full">
          <input
            ref={cardNumberRef}
            class="w-full pl-10 text-sm input-bordered input w-1/3"
            id="cardNumber"
            inputMode="numeric"
            type="tel"
            maxLength={16}
            placeholder="0000 0000 0000 0000"
            // onkeypress={formats}
            // onkeyup={numberValidation}
          />
          <Creditcard class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 left-4" />
        </div>
      </div>
    </div>
  );
}
