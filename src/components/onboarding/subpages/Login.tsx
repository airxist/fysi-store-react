import { useNavigate } from "react-router-dom";
import { icons, onboardingPhotos } from "../../../constants";
import AuthLayout from "../../_layout/AuthLayout";
import IconWrapper from "../../common/IconWrapper";
import Btn from "../../common/Btn";
import InputField from "../../common/_form-inputs/InputField";
import StepLayout from "../../_layout/StepLayout";
import OwnAnAccount from "../OwnAnAccount";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout onboardPhotos={onboardingPhotos.customer}>
      <form
        className="w-full md:w-[80%] mx-auto py-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <StepLayout
          title="Welcome Back"
          description="Welcome back! Please enter your details."
          logoContainerStyle=""
          headContainerStyle="mt-10"
        />

        <div className="mt-6 mb-8 space-y-5">
          <InputField
            labelStyle="text-sm font-DMSansMedium"
            name="email"
            label="Email"
            placeholder="airxist@gmail.com"
            inputContainerStyle="h-14 "
            inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
            value=""
          />
          <InputField
            labelStyle="text-sm font-DMSansMedium"
            type="password"
            name="password"
            label="Password"
            placeholder="your strong password"
            inputContainerStyle="h-14 "
            inputStyle="size-full font-DMSansRegular text-sm outline-none rounded-[6px] px-4 border border-[#D0D5DD]"
            value=""
          />
        </div>

        <div>
          <Btn
            text="Login"
            containerStyle="w-full h-12 rounded-[8px] font-DMSansBold"
            onClick={() => navigate("/customer/management")}
          />

          <Btn
            IconLeft={
              <IconWrapper icon={icons.google} containerStyle="size-6 mr-3" />
            }
            text="Login with Google"
            containerStyle="w-full h-12 rounded-[8px] font-DMSansBold flex-center mt-6"
            btnVariant="outline"
          />

          <OwnAnAccount
            question="Don't have an account"
            link="/onboarding"
            linkText="Sign Up"
          />
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
