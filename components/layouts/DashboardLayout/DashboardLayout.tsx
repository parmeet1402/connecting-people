import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <h2>DASHBOARD LAYOUT...</h2>
      {children}
    </div>
  );
};

export default DashboardLayout;
