import React from "react";

const Input = ({ type, name, placeholder }) => {
  return (
    <div className="login__form">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
