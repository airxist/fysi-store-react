import { Link } from "react-router-dom";
import { icons } from "../../constants";
import IconWrapper from "../common/IconWrapper";

const ShowMe = () => {
  return (
    <div className="h-[224px] w-[363px] bg-white flex-center rounded-[8px]">
      <div className="text-center">
        <IconWrapper icon={icons.avatar} containerStyle="size-20" />
        <div className="mt-4">
          <p className="font-ma_med">DeeDee</p>
          <Link to="/customer/management" className="text-xs">
            view profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMe;
