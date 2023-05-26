import React from "react";
import "./form-input.style.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className=" form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
