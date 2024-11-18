import { returnsData } from "../../../constants";
import Btn from "../../common/Btn";
import RegularList from "../../common/RegularList";
import ReturnDisplayItem from "../ReturnDisplayItem";

const ReturnPage = () => {
  return (
    <RegularList
      dataContainerStyle="padded pt-14"
      data={returnsData}
      renderComponent={(returnsData) => {
        return (
          <>
            {returnsData.map((data) => {
              return (
                <ReturnDisplayItem
                  key={data.title}
                  {...data}
                  containerStyle="mb-6 md:mb-4"
                />
              );
            })}
          </>
        );
      }}
      listFooter={() => {
        return (
          <div className="padded">
            <Btn
              text="Contact Support"
              containerStyle="font-DMSansSemiBold px-14 py-4 rounded-[8px] mt-6 mb-20"
            />
          </div>
        );
      }}
    />
  );
};

export default ReturnPage;
