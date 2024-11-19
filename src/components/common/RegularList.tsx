import { FC } from "react";
import IconWrapper from "./IconWrapper";
import { icons } from "../../constants";

const RegularList: FC<RegularListProps> = ({
  data,
  dataContainerStyle,
  renderComponent,
  listEmpty: ListEmpty = () => (
    <div className="flex-col text-center flex-center">
      <IconWrapper icon={icons.noResult} containerStyle="size-24" />
      <p className="text-xs font-ma_med">data not available</p>
    </div>
  ),
  listHeader: ListHeader,
  listFooter: ListFooter,
}) => {
  return (
    <>
      {ListHeader && <ListHeader />}
      {data.length === 0 ? (
        <ListEmpty />
      ) : (
        <div className={dataContainerStyle}>{renderComponent(data)}</div>
      )}
      {ListFooter && <ListFooter />}
    </>
  );
};

export default RegularList;
