import React from "react";
import { Modal, ModalBackdrop } from "./_custom_ui/Modal";
import Btn from "./Btn";
import { icons } from "../../constants";

const CustomModal = ({
  trigger: Trigger,
  modalBackdropStyle,
  modalStyle,
  children,
  toggle,
  toggleOff,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  modalBackdropStyle: string;
  modalStyle: string;
  toggle: boolean;
  toggleOff: () => void;
}) => {
  return (
    <>
      {Trigger && Trigger}

      {toggle && (
        <ModalBackdrop containerStyle={modalBackdropStyle}>
          <Modal containerStyle={`bg-white relative ${modalStyle}`}>
            <Btn
              IconLeft={<img src={icons.x} alt="icon" />}
              containerStyle=" absolute top-10 right-5 size-8"
              onClick={toggleOff}
              btnVariant="transparent"
            />

            {children}
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default CustomModal;
