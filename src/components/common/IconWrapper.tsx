const IconWrapper = ({
  containerStyle,
  icon,
  iconStyle = "size-full object-center object-cover",
}: {
  containerStyle: string;
  icon: string;
  iconStyle?: string;
}) => {
  return (
    <div className={containerStyle}>
      <img src={icon} alt="icon" className={iconStyle} />
    </div>
  );
};

export default IconWrapper;
