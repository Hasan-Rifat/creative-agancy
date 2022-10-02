import React from "react";
import DashboardLayout from "../../shared/DashboardLayout";
import DashboardTitle from "../DashboardTitle";
import Order from "./Order";
import Sells from "./Sells";
import TotalServices from "./TotalServices";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>dashboard</DashboardTitle>
        <div className="grid grid-cols-3 gap-5">
          <Sells />
          <Order />
          <TotalServices />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Index;
