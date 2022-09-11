import React from "react";
import {
  Link,
  LinkProps,
  To,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

type ActiveLinkProps = {
  children: React.ReactNode;
  to: To;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  to,
  ...props
}: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`${
        match
          ? " border-b-[3px] border-secondary "
          : "border-b-[3px] border-transparent"
      } ease-in-out duration-300`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
