import React from "react";

type DashboardLayoutProps = {
  children: JSX.Element;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section className={` #f4f5f7`}>
      <div className=" max-w-[1550px] mx-auto p-5">{children}</div>
    </section>
  );
};
export default DashboardLayout;
