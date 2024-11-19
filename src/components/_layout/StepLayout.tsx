import Logo from "../common/Logo";
import TitleDescription from "../common/TitleDescription";

const StepLayout = ({
  logoContainerStyle,
  headContainerStyle,
  title,
  titleStyle,
  description,
  descriptionStyle,
}: {
  logoContainerStyle: string;
  headContainerStyle: string;
  title?: string;
  titleStyle?: string;
  description: string;
  descriptionStyle?: string;
}) => {
  return (
    <>
      <Logo containerStyle={logoContainerStyle} color="black" />

      <TitleDescription
        containerStyle={headContainerStyle}
        title={title!}
        titleStyle={`head-title ${titleStyle}`}
        description={description}
        descriptionStyle={`head-description ${descriptionStyle}`}
      />
    </>
  );
};

export default StepLayout;
