import React from "react";
import { Link } from "react-router-dom";

const getBtnVariant = (variant: string) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-50 text-black";
    case "outline":
      return "bg-transparent border";
    case "transparent":
      return "bg-transparent text-black";
    default:
      return "bg-forest_green-500 text-white";
  }
};

const Btn: React.FC<BtnProps> = ({
  text,
  IconLeft,
  IconRight,
  containerStyle,
  btnVariant,
  href,
  ...props
}) => {
  const NormalBtn = () => {
    return (
      <button
        className={`${getBtnVariant(
          btnVariant ?? "default"
        )} ${containerStyle}`}
        {...props}
      >
        {IconLeft && IconLeft}
        {text && text}
        {IconRight && IconRight}
      </button>
    );
  };

  const LinkBtn = () => {
    return (
      <Link
        to={href!}
        className={`${getBtnVariant(
          btnVariant ?? "default"
        )} ${containerStyle}`}
        {...props}
      >
        {IconLeft && IconLeft}
        {text && text}
      </Link>
    );
  };

  return href ? LinkBtn() : NormalBtn();
};

export default Btn;
