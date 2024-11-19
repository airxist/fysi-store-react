import React from "react";
import { icons } from "../../constants";
import Btn from "./Btn";
import InputField from "./_form-inputs/InputField";

const SearchInputField: React.FC<SearchInputFieldProps> = ({
  containerStyle,
  icon = icons.search,
  placeHolder,
  inputStyle,
  btnText = "Search",
  inputContainerStyle,
  value,
  handleSearch,
  btnStyle,
}) => {
  return (
    <div className={containerStyle}>
      <InputField
        containerStyle="flex-1"
        icon={icon}
        placeholder={placeHolder}
        inputStyle={inputStyle}
        inputContainerStyle={inputContainerStyle}
        value={value}
        onChange={handleSearch}
      />

      <Btn text={btnText} containerStyle={btnStyle} />
    </div>
  );
};

export default SearchInputField;
