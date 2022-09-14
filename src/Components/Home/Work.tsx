import React from "react";
import Layout from "../shared/Layout";
import Sliders from "./Slider";

type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <Layout className="bg-primary sm:p-[25px] md:py-[100px] md:px-[50px]">
      <div>
        <h2 className="text-white  font-semibold text-center xss:py-[40px] md:pt-[20px] md:pb-[40px] xss:text-[24px] xss:leading-[28px] md:text-[34px] md:leading-[43px]">
          Here are some of <span className="text-secondary">our works</span>
        </h2>
        <Sliders />
      </div>
    </Layout>
  );
};
export default Work;
