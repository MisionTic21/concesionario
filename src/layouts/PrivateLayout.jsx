import SIdebar from "components/Sidebar";
import React from "react";

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <SIdebar />
      {children}
    </div>
  );
};

export default PrivateLayout;
