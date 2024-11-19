import { Link } from "react-router-dom";
import { icons } from "../../constants";
import { useGlobalRoutingContext } from "../../contexts/RoutingContext";

const Logo = ({
  containerStyle,
  color = "white",
}: {
  containerStyle?: string;
  color?: string;
}) => {
  const { userHome } = useGlobalRoutingContext();
  return (
    <Link to={userHome} className={`flex-center gap-x-2 ${containerStyle}`}>
      <img src={icons[color === "white" ? "bagWhite" : "bag"]} alt="bag" />
      <p
        className={`text-[28px] font-ma_bold ${
          color === "white" && "text-white"
        }`}
      >
        Fysi
      </p>
    </Link>
  );
};

export default Logo;
