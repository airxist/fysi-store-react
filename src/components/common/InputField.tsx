import React from "react";

const InputField = ({
  containerStyle,
  type = "text",
  placeholder,
  name,
  icon,
  inputContainerStyle,
  inputStyle,
  label,
  labelStyle,
  value,
  ...props
}) => {
  return (
    <div className={containerStyle}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={`relative ${inputContainerStyle}`}>
        {icon && <img src={icon} alt={name} />}
        
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={inputStyle}
          value={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputField;
