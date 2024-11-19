import AuthLayout from "../../_layout/AuthLayout";
import OnboardingForm from "../OnboardingForm";
import VendorStep1 from "../vendor/Step1";
import VendorStep2 from "../vendor/Step2";
import { onboardingPhotos } from "../../../constants";
import VendorStep3 from "../vendor/Step3";
import VendorStep4 from "../vendor/Step4";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      onboardPhotos={onboardingPhotos.vendor}
      overlayTitle="Go Green With Us"
      overlayDescription="List your eco-friendly products in our store"
      overlay
    >
      <OnboardingForm onFinish={() => navigate('/vendor/management')}>
        <VendorStep1 />
        <VendorStep2 />
        <VendorStep3 />
        <VendorStep4 />
      </OnboardingForm>
    </AuthLayout>
  );
};

export default Vendor;
