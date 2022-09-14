import React from "react";

type LayoutProps = {
  children: JSX.Element;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <section className={`${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
};
export default Layout;
