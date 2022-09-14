import React from "react";
import DashboardActiveLink from "../shared/ActiveLink/DashboardActiveLink";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

import serviceList from "../../images/dashboard-icon/Service list.svg";
import order from "../../images/dashboard-icon/shopping-cart-outline 1order.svg";
import review from "../../images/dashboard-icon/Add A Review.svg";
import { AiFillDashboard } from "react-icons/ai";

type SideBarProps = {};

const SideBar: React.FC<SideBarProps> = () => {
  const SideBarMenu = (
    <>
      <li className="w-full block  ">
        <DashboardActiveLink to={"/dashboard"}>
          <AiFillDashboard className="text-[30px]" />
          <span>Dashboard</span>
        </DashboardActiveLink>
      </li>
      <li className="w-full block  ">
        <DashboardActiveLink to={"/dashboard/services-list"}>
          <img className="w-[30px]" src={serviceList} alt="" />
          <span>Service List</span>
        </DashboardActiveLink>
      </li>
      <li className="w-full block  ">
        <DashboardActiveLink to={"/dashboard/order"}>
          <img className="w-[30px]" src={order} alt="order-icon" />
          <span>Order</span>
        </DashboardActiveLink>
      </li>
      <li className="w-full block  ">
        <DashboardActiveLink to={"/dashboard/review"}>
          <img className="w-[30px]" src={review} alt="" />
          <span>Review</span>
        </DashboardActiveLink>
      </li>
    </>
  );
  return (
    <div className="py-[54px]">
      <div className="bg-white w-[140px]  ml-[40px] mb-[20px] p-[10px]">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="text-white ">{SideBarMenu}</ul>
    </div>
  );
};
export default SideBar;
