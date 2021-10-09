import SIdebar from "components/Sidebar";
import React from "react";

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <SIdebar />
      <main className="flex w-full bg-blue-400 overflow-y-scroll">{children}</main>
    </div>
  );
};

export default PrivateLayout;
