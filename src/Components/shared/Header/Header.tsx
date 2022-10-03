import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgChevronDownO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import logo from "../../../images/logos/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import Button from "../Button";
import Loading from "../Loading";

const Header: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const [mobile, SetMobile] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [dashboard, setDashboard] = useState<boolean>(false);

  const logout = () => {
    signOut(auth);
    toast.success("Logout successfully");
  };

  if (loading) {
    return <Loading />;
  }
  // menu
  const menu: JSX.Element = (
    <>
      <li className="mr-[10px] p-[10px] text-primary">
        <ActiveLink to={"/"}>Home </ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] text-primary">
        <ActiveLink to={"/our-portfolio"}>Our Portfolio</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] text-primary">
        <ActiveLink to={"/our-services"}>Our Services</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] text-primary">
        <ActiveLink to={"/contact-us"}>Contact Us</ActiveLink>
      </li>
      {user ? (
        <div className="relative flex justify-center items-center ">
          <div
            onClick={() => setDashboard(!dashboard)}
            className="cursor-pointer flex gap-2 items-center  online "
          >
            {user?.displayName && (
              <div className=" rounded-full  text-red-600 bg-primary">
                <h2 className="font-bold text-[18px] text-center px-[15px]">
                  {user?.displayName}
                </h2>
              </div>
            )}
            <CgChevronDownO className="cursor-pointer " />
          </div>
          <div
            className={`${
              dashboard ? "block" : "hidden"
            } cursor-pointer flex flex-col mr-[10px] p-[15px] shadow-2xl bg-white absolute top-[110%] right-0 `}
          >
            <li className="mt-[10px]">
              <ActiveLink to={"/dashboard"}>
                <span>Dashboard</span>
              </ActiveLink>
            </li>
            <li className="mt-[10px]" onClick={logout}>
              <span>Log Out</span>
            </li>
          </div>
        </div>
      ) : (
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );

  const changeBg = () => {
    if (window.scrollY >= 70) {
      return setColor(true);
    } else {
      return setColor(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <header
      className={`xss:p-[20px] sm:p-[0px] z-50   ${
        color
          ? "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] fixed left-0 right-0 top-0"
          : "bg-transparent  absolute left-0 right-0 top-0 "
      }`}
    >
      <div className="max-w-[1200px] mx-auto bg-transparent">
        <div>
          <div className="sm:p-[10px] lg:p-[20px] grid grid-cols-4">
            <div className="col-span-1 relative">
              <Link to={"/"}>
                <img src={logo} className="xss:w-[100%] sm:w-[150px]" alt="" />
              </Link>
            </div>
            {/* mobile responsive start */}
            <div
              className="xss:col-span-3 md:hidden flex justify-end transition"
              onClick={() => SetMobile(!mobile)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <div className="xss:hidden md:block md:col-span-3 ">
              <ul
                onClick={() => SetMobile(!mobile)}
                className={` md:flex justify-end  ${
                  mobile ? "block" : "hidden"
                }`}
              >
                {menu}
              </ul>
            </div>
          </div>
          {/* mobile responsive code  */}
          <div className="xss:w-full xss:absolute xss:left-0 xss:top-[67px]  md:hidden ">
            <ul
              onClick={() => SetMobile(!mobile)}
              className={`xss:p-[20px]  xss:bg-white  md:bg-transparent ${
                mobile ? "block" : "hidden"
              }`}
            >
              {menu}
            </ul>
          </div>
          {/* mobile responsive code  */}
        </div>
      </div>
    </header>
  );
};
export default Header;
