import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleOn = () => setToggle(true);
  const toggleOff = () => setToggle(false);
  const toggleMain = () => setToggle((prev) => !prev);

  return { toggle, toggleOff, toggleOn, toggleMain };
};
