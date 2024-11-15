import { icons } from "../../constants";

const Logo = ({containerStyle}: {containerStyle?: string}) => {
  return (
    <div className={`font-bold flex-center ${containerStyle}`}>
      <img src={icons.bag} alt="bag" />
      <p className="text-[28px]">Fysi</p>
    </div>
  );
};

export default Logo;
