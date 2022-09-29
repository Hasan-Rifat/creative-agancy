import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

type DashboardProps = {};

const Dashboards: React.FC<DashboardProps> = () => {
  return (
    <section>
      <div className="">
        <div>
          <div className="grid grid-cols-6 h-screen">
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
