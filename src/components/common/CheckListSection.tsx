import React from "react";

interface InputItem {
  label: string;
  checked: boolean;
}

interface ChecklistSectionProps {
  title: string;
  inputs: InputItem[];
  onChange: (index: number) => void;
  containerStyle?: string;
  inputContainerStyle?: string;
  labelStyle?: string;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  title,
  inputs,
  onChange,
  containerStyle = "pt-2 pb-3 px-4",
  inputContainerStyle,
  labelStyle = "flex items-center gap-x-3 h-9",
}) => {
  return (
    <div className={containerStyle}>
      <h2 className="mb-2 text-sm font-semibold">{title}</h2>

      <div className={inputContainerStyle}>
        {inputs.map((input, index) => (
          <label key={index} className={labelStyle}>
            <input
              type="checkbox"
              checked={input.checked}
              onChange={() => onChange(index)}
            />
            {input.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;
