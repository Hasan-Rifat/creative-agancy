import React from "react";

type DashboardTitleProps = {
  children: string;
};

const DashboardTitle: React.FC<DashboardTitleProps> = ({ children }) => {
  return (
    <h2 className="text-[24px] font-semibold py-5 text-primary">{children}</h2>
  );
};
export default DashboardTitle;
