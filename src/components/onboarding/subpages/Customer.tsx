import { useNavigate } from "react-router-dom";
import { onboardingPhotos } from "../../../constants";
import AuthLayout from "../../_layout/AuthLayout";
import OnboardingForm from "../OnboardingForm";
import Done from "../customer/Done";
import Step1 from "../customer/Step1";
import Step2 from "../customer/Step2";
import Step3 from "../customer/Step3";

const Customer = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout onboardPhotos={onboardingPhotos.customer}>
      <OnboardingForm onFinish={() => navigate('/onboarding/login')}>
        <Step1 />
        <Step2 />
        <Step3 />
        <Done />
      </OnboardingForm>
    </AuthLayout>
  );
};

export default Customer;
