import IconWrapper from "../common/IconWrapper";

const AboutBlock: React.FC<AboutBlockProps> = ({
  containerStyle,
  title,
  description,
  imageUrl,
  order,
  reasons,
}) => {
  return (
    <div className={containerStyle}>
      <article className={`md:w-1/2  ${order ? "md:order-2 md:pl-12" : "md:pr-12"}`}>
        <h2 className="font-DMSansBold text-[28px]">{title}</h2>
        {description && (
          <p className="font-DMSansRegular md:text-xl">{description}</p>
        )}
        {reasons && (
          <ul className="pl-12 mt-4 space-y-4 list-disc">
            {reasons.map((reason) => {
              return (
                <li key={reason.title}>
                  <strong className="font-DMSansSemiBold">
                    {reason.title}
                  </strong>
                  :{" "}
                  <span className="font-DMSansRegular">
                    {reason.description}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </article>
      <IconWrapper
        icon={imageUrl}
        containerStyle={`w-full h-96 border-2 rounded-[8px] overflow-hidden mt-6 md:w-1/2 ${
          order && "md:order-1"
        }`}
      />
    </div>
  );
};

export default AboutBlock;
