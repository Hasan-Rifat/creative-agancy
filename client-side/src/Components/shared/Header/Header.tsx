import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import Button from "../Button";

const Header: React.FC = () => {
  const [mobile, SetMobile] = useState<boolean>(false);

  const [color, setColor] = useState<boolean>(false);

  const changeBg = () => {
    if (window.scrollY <= 70) {
      return setColor(true);
    } else {
      return setColor(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  // menu
  const menu: JSX.Element = (
    <>
      <li className="mr-[10px] p-[10px] ">
        <ActiveLink to={"/"}>Home </ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] ">
        <ActiveLink to={"/our-portfolio"}>Our Portfolio</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] ">
        <ActiveLink to={"/our-team"}>Our Team</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px] ">
        <ActiveLink to={"/contact-us"}>Contact Us</ActiveLink>
      </li>
      <Button>Login</Button>
    </>
  );
  return (
    <header
      className={`xss:p-[20px] sm:p-[0px] fixed left-0 right-0 top-0 ${
        color
          ? "bg-transparent"
          : "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)]"
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
                className={` md:flex justify-end items-center ${
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
