import React from "react";
import SIdebar from "components/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <SIdebar />
      <main className="flex w-full overflow-y-scroll items-center justify-center">{children}</main>
    </div>
  );
};

export default PrivateLayout;
