import { FC } from "react";

const RegularList : FC<RegularListProps> = ({
  data,
  dataContainerStyle,
  renderComponent,
  listEmpty: ListEmpty = () => <div>data is null</div>,
  listHeader: ListHeader,
  listFooter: ListFooter
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
