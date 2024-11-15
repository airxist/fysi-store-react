import React from "react";

const Overlay = ({ children, containerStyle }: {children: React.ReactNode, containerStyle: string}) => {
  return <div className={`absolute inset-0 ${containerStyle}`}>{children}</div>;
};

export default Overlay;
