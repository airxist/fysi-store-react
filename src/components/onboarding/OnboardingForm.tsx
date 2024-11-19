import React, { Children, cloneElement, isValidElement, useState } from "react";

const OnboardingForm = ({
  children,
  onFinish,
}: {
  children: React.ReactNode[];
  onFinish: () => void;
}) => {
  const [activeChild, setActiveChild] = useState(0);
  const lengthOfChildren = children?.length - 1;

  const nextStep = () => {
    if (activeChild < lengthOfChildren) {
      setActiveChild((prev) => ++prev);
      return;
    } 
    onFinish();
  };

  const prevStep = () => {
    console.log(prevStep);
  };

  const currentChild = Children.toArray(children)[activeChild];

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { nextStep, prevStep });
  }

  return currentChild;
};

export default OnboardingForm;
