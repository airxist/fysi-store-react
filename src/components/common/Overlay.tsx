import React from "react";

const Overlay = ({ children, containerStyle }) => {
  return <div className={`absolute inset-0 ${containerStyle}`}>{children}</div>;
};

export default Overlay;
