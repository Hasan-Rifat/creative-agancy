import React from "react";
import {
  Link,
  LinkProps,
  To,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

type DashboardActiveLinkProps = {
  children: React.ReactNode;
  to: To;
};

const DashboardActiveLink: React.FC<DashboardActiveLinkProps> = ({
  children,
  to,
  ...props
}: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`${
        match ? "bg-gradient-to-r from-[#FF0839]   border-[#D6002A] " : ""
      } w-full  px-[40px]  py-[17px] border-l-[8px]  border-transparent flex items-center gap-2`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
export default DashboardActiveLink;
