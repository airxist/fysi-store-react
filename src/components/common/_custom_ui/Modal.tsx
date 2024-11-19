import React from "react";

export const ModalBackdrop = ({
  containerStyle,
  children,
}: {
  containerStyle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`fixed top-0 left-0 h-screen w-full ${containerStyle}`}>
      {children}
    </div>
  );
};

export const Modal = ({
  containerStyle,
  children,
}: {
  containerStyle: string;
  children: React.ReactNode;
}) => {
  return <div className={containerStyle}>{children}</div>;
};
