import { useState } from "react";

export const useToggle = () => {
  const [show, setshow] = useState(false);

  const toggleOn = () => setshow(true);

  const toggleOff = () => setshow(false);

  return {
    toggleOn,
    toggleOff,
    show
  };
};
