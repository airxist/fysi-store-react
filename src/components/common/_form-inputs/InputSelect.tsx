import React from "react";
import SelectItem from "../SelectItem";

const InputSelect: React.FC<InputFieldProps> = ({
  containerStyle,
  placeholder,
  name,
  inputContainerStyle,
  label,
  labelStyle,
  selectOptions = [],
  contentStyle,
  handleSelect
}) => {
  return (
    <div className={containerStyle}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}

      <SelectItem
        placeholder={placeholder}
        containerStyle={inputContainerStyle}
        contentStyle={`absolute top-full z-50 bg-grey-500 border border-forest_green-100 flex flex-col rounded-[8px] space-y-5 ${contentStyle}`}
        options={selectOptions}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default InputSelect;
