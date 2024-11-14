import React, { FC } from "react";
import { Link } from "react-router-dom";

const getBtnVariant = (variant: string) => {
  switch (variant) {
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-forest_green-500";
  }
};

const getTextVariant = (variant: string) => {
  switch (variant) {
    default:
      return "text-white";
  }
};

const Btn: FC<BtnProps> = ({
  text,
  IconLeft,
  IconRight,
  containerStyle,
  btnVariant,
  textVariant,
  href,
  ...props
}) => {
  const NormalBtn = () => {
    return (
      <button
        className={`${getBtnVariant(btnVariant ?? "default")} ${getTextVariant(
          textVariant ?? "default"
        )} ${containerStyle}`}
        {...props}
      >
        {IconLeft && IconLeft}
        {text && text}
      </button>
    );
  };

  const LinkBtn = () => {
    return (
      <Link
        to={href!}
        className={`${getBtnVariant(btnVariant ?? "default")} ${getTextVariant(
          textVariant ?? "default"
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
