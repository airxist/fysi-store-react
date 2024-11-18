import RegularList from "../common/RegularList";

const ReturnDisplayItem = ({
  title,
  description,
  procedure,
  containerStyle,
}: {
  title: string;
  description: string;
  procedure?: string[];
  containerStyle: string;
}) => {
  return (
    <div className={containerStyle}>
      <h2 className="text-xl font-DMSansSemiBold md:text-[28px] md:font-DMSansBold mb-3 md:mb-3">
        {title}
      </h2>
      <p className="text-xl text-grey-900 font-DMSansRegular">{description}</p>
      {procedure && (
        <RegularList
          data={procedure}
          dataContainerStyle="mt-8 space-y-5"
          renderComponent={(procedure) => {
            return (
              <ul className="pl-5 list-disc">
                {procedure.map((item) => (
                  <li key={item} className="text-xl text-grey-900 font-DMSansRegular">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }}
        />
      )}
    </div>
  );
};

export default ReturnDisplayItem;
