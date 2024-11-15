import React from "react";
import IconWrapper from "../IconWrapper";

const ServiceCard: React.FC<ServiceCardProp> = ({
  icon,
  title,
}: ServiceCardProp) => {
  return (
    <div className="flex-center flex-col bg-forest_green-50 w-[calc(50%-6px)] md:w-[calc(25%-12px)] text-center border rounded-[8px] h-[168px] md:h-[200px]">
      <IconWrapper containerStyle="size-11 md:size-[70px]" icon={icon} />
      <p className="text-xs md:text-[18px] md:font-bold mt-6">{title}</p>
    </div>
  );
};

export default ServiceCard;
