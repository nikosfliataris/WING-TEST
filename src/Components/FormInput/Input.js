import React from "react";
import "./Input.scss";
function Input({ handleChange, label, ...otherprops }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherprops} />
      {label ? (
        <label
          className={`${otherprops.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Input;
