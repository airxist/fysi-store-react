import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteProvider } from "../contexts/RoutingContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Router>
      <RouteProvider>{children}</RouteProvider>
    </Router>
  );
};

export default Provider;
