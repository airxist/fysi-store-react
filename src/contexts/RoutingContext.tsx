import { createContext, useContext, useState } from "react";

const RouteContext = createContext<{
  userHome: string;
  setUserHome: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [userHome, setUserHome] = useState("/");
  
  return (
    <RouteContext.Provider value={{ userHome, setUserHome }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useGlobalRoutingContext = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("no routing context");
  }
  return context;
};
