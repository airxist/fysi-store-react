import { icons } from "../../constants";
import Btn from "../common/Btn";
import IconWrapper from "../common/IconWrapper";

const UploadImage = () => {
  return (
    <div className="mt-6">
      <IconWrapper
        icon={icons.avatar2}
        containerStyle="size-16 rounded-full overflow-hidden"
      />

      <div className="px-6 py-4 mt-5 flex-center">
        <div className="text-center">
          <Btn IconLeft={<IconWrapper
            icon={icons.upload}
            containerStyle="size-10 border border-gray-200 rounded-[8px] flex-center mx-auto"
            iconStyle="size-5"
          />} btnVariant="transparent" />
          
          <div className="mt-3">
            <p className="text-sm">
              <span className="text-sm font-semibold text-forest_green-500">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
