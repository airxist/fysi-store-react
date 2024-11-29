import { Link } from "react-router-dom";

const OwnAnAccount = ({
  question,
  link = "/onboarding/login",
  linkText = "Log in"
}: {
  link?: string;
  question: string;
  linkText?: string
}) => {
  return (
    <p className="mt-5 text-sm text-center font-DMSansRegular">
      {question}?{" "}
      <Link to={link} className="font-DMSansBold text-custom-orange-700">
        {linkText}
      </Link>
    </p>
  );
};

export default OwnAnAccount;
