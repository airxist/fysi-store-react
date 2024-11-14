import React, { FC } from "react";

interface TitleDescriptionProps {
  containerStyle?: string;
  title: string;
  description?: string;
  titleStyle: string;
  descriptionStyle?: string;
}

const TitleDescription : FC<TitleDescriptionProps> = ({
  containerStyle,
  title,
  description,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <div className={containerStyle}>
      <h3 className={titleStyle}>{title}</h3>
      <p className={descriptionStyle}>{description}</p>
    </div>
  );
};

export default TitleDescription;
