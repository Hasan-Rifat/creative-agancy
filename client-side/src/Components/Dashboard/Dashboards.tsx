import React from "react";
import { Outlet } from "react-router-dom";
import DashboardActiveLink from "../shared/ActiveLink/DashboardActiveLink";
import Button from "../shared/Button";
import InputComponents from "../shared/InputComponents";
import SocialMedia from "../shared/SocialMedia";
import SideBar from "./SideBar";
import logo from "../../images/logos/logo.png";

type DashboardProps = {};

const Dashboards: React.FC<DashboardProps> = () => {
  const SideBarMenu = (
    <>
      <li className="w-full block px-[40px] py-[17px]">
        <DashboardActiveLink to={"/dashboard"}>Dashboard</DashboardActiveLink>
      </li>
      <li className="w-full block px-[40px] py-[17px]">
        <DashboardActiveLink to={"/dashboard/order"}>Order</DashboardActiveLink>
      </li>
      <li className="w-full block px-[40px] py-[17px]">
        <DashboardActiveLink to={"/dashboard/review"}>
          Review
        </DashboardActiveLink>
      </li>
      <li className="w-full block px-[40px] py-[17px]">
        <DashboardActiveLink to={"/dashboard/services-list"}>
          ServiceList
        </DashboardActiveLink>
      </li>
    </>
  );
  return (
    <section>
      <div className="">
        <div>
          <div className="grid grid-cols-6">
            <div className="col-span-1 bg-[#263238] h-full ">
              <SideBar />
            </div>
            <div className="col-span-5 bg-[#f7f8fa] h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboards;
