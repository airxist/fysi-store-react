import { icons } from "../../constants";

const Logo = ({ containerStyle }: { containerStyle?: string }) => {
  return (
    <div className={`flex-center gap-x-2 ${containerStyle}`}>
      <img src={icons.bag} alt="bag" />
      <p className="text-[28px] font-ma_bold">Fysi</p>
    </div>
  );
};

export default Logo;
