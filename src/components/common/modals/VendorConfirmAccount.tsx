import { useToggle } from "../../../lib/hooks/useToggle";
import Btn from "../Btn";
import CustomModal from "../CustomModal";
import TitleDescription from "../TitleDescription";
import { useState } from "react";
import VendorCongrats from "./VendorCongrats";

const VendorConfirmAccount = ({ nextStep }: { nextStep?: () => void }) => {
  const { toggle, toggleOff, toggleOn } = useToggle();
  const [confirmModal, setConfirmModal] = useState(true);

  return (
    <CustomModal
      trigger={
        <Btn
          text="Submit"
          containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
          onClick={toggleOn}
        />
      }
      toggle={toggle}
      modalBackdropStyle="bg-grey-700/50 oveflow-hidden overflow-y-scroll lg:py-20"
      modalStyle="w-full h-full md:h-[600px] md:max-w-[700px] mx-auto h-20 px-4 lg:px-[155px] pt-[76px] pb-[70px] flex flex-col lg:rounded-[25px]"
      toggleOff={toggleOff}
    >
      <div className="flex-1">
        {confirmModal ? (
          <>
            <TitleDescription
              containerStyle="text-center"
              titleStyle="head-title"
              descriptionStyle="head-description"
              title="Confirm your Account Type"
              description="Kindly validate your account type as once confirmed, it cannot be changed later"
            />

            <div className="font-DMSansRegular mt-14">
              <p className="mb-[30px]">
                <b className="text-custom-orange-800">Individual:</b> If you are
                a seller without any registered or incorporated company.
              </p>

              <p>
                <b className="text-custom-orange-800">Business:</b> If you are a
                registered or incorporated company with the requires documents.
              </p>
            </div>
          </>
        ) : (
          <VendorCongrats />
        )}
      </div>

      <Btn
        text={confirmModal ? "Submit" : "Go To Dashboard"}
        containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
        onClick={confirmModal ? () => setConfirmModal(false) : nextStep}
      />
    </CustomModal>
  );
};

export default VendorConfirmAccount;
