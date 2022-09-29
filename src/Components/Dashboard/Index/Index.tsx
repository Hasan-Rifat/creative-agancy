import React from "react";
import Order from "./Order";
import Sells from "./Sells";
import TotalServices from "./TotalServices";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <section className="#f4f5fa max-w-[1550px] mx-auto p-5">
      <div className="grid grid-cols-3 gap-5">
        <Sells />
        <Order />
        <TotalServices />
      </div>
    </section>
  );
};
export default Index;
