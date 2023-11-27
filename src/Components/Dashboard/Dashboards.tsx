import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

type DashboardProps = {};

const Dashboards: React.FC<DashboardProps> = () => {
  return (
    <section>
      <div className="">
        <div>
          <div className="flex gap-5 ">
            <div className="w-1/5 bg-[#263238] h-full ">
              <SideBar />
            </div>
            <div className="w-4/5 bg-[#f7f8fa] h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboards;
