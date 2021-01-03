import React from "react";
import classnames from "classnames";
import "./TextField.css";
const TextField = ({
  name,
  placeholder,
  value,
  error,
  type,
  onChange,
  checked,
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        checked={checked}
        className={classnames("input ", {
          "is-invalid": error,
        })}
      />
      {error && (
        <div className="invalid-feedback" style={{ marginLeft: "1vw" }}>
          {error}
        </div>
      )}
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
export default TextField;
