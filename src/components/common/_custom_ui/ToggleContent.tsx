import React, { useState } from "react";
import Btn from "../Btn";
import IconWrapper from "../IconWrapper";
import { icons } from "../../../constants";
import RegularList from "../RegularList";
import { Link } from "react-router-dom";

const ToggleContent = ({
  data = [],
  label,
  icon,
  dataContainerStyle,
  containerStyle,
  listHeader,
}: {
  data: any[];
  label?: string;
  icon: string;
  dataContainerStyle: string;
  containerStyle?: string;
  listHeader?: () => React.ReactNode;
}) => {
  const [show, setShow] = useState(false);

  const displayContent = () => {
    switch (label) {
      default:
        return (
          <>
            {data.map(({ title, icon, href }) => {
              return (
                <Link
                  to={href ?? "/"}
                  key={title}
                  className="flex items-center"
                >
                  {icon && <IconWrapper icon={icon} containerStyle="mr-2" />}
                  {title}
                </Link>
              );
            })}
          </>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={`relative ${containerStyle}`}
    >
      <Btn
        IconRight={icon && <img src={icon} alt="icon" />}
        text={label}
        containerStyle="flex-center"
        btnVariant="transparent"
      />

      <div
        className={`absolute z-50 ${
          show ? "" : "pointer-events-none border-0"
        } `}
      >
        {show && (
          <div
            className={`rounded-ml mt-3 rounded-[8px] border border-forest_green-100 bg-grey-500 relative ${dataContainerStyle}`}
          >
            <IconWrapper
              icon={icons.note}
              containerStyle="size-6 absolute bottom-0 left-0"
            />

            <RegularList
              listHeader={listHeader}
              data={data}
              dataContainerStyle={`${
                label === "Catalogue"
                  ? "grid grid-cols-2 gap-4"
                  : "flex flex-col gap-2"
              }`}
              renderComponent={() => displayContent()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleContent;
