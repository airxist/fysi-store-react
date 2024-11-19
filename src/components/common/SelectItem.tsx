import { icons } from "../../constants";
import { useToggle } from "../../lib/hooks/useToggle";
import Btn from "./Btn";
import IconWrapper from "./IconWrapper";
import RegularList from "./RegularList";

const SelectItem = ({
  placeholder = "Select",
  containerStyle,
  contentStyle,
  options,
  handleSelect,
}: {
  placeholder?: string;
  containerStyle: string;
  contentStyle?: string;
  options?: string[];
  handleSelect?: (option: string) => void;
}) => {
  const { toggle, toggleMain } = useToggle();
  return (
    <div className={`relative ${containerStyle}`}>
      <Btn
        text={placeholder}
        IconRight={
          <img
            src={icons.arrow}
            alt="icon"
            className={`transition-all duration-500 ${toggle && "rotate-180"}`}
          />
        }
        containerStyle="flex-apart size-full"
        btnVariant="transparent"
        onClick={toggleMain}
      />

      {toggle && (
        <RegularList
          dataContainerStyle={contentStyle}
          listEmpty={() => (
            <div className="absolute z-50 flex-col text-center bg-white flex-center">
              <IconWrapper icon={icons.noResult} containerStyle="size-24" />
              <p className="text-xs font-ma_med">data not available</p>
            </div>
          )}
          data={options!}
          renderComponent={(options) => {
            return (
              <>
                {options.map((option) => (
                  <Btn
                    text={option}
                    key={option}
                    containerStyle=""
                    btnVariant="transparent"
                    onClick={() => {
                      handleSelect!(option);
                      toggleMain();
                    }}
                  />
                ))}
              </>
            );
          }}
        />
      )}
    </div>
  );
};

export default SelectItem;
