import React from "react";
import Layout from "../shared/Layout";

type OurServiceTitleProps = {};

const OurServiceTitle: React.FC<OurServiceTitleProps> = () => {
  return (
    <Layout className="xss:py-[50px] md:py-[120px] xss:px-[20px] md:px-[50px] bg-[#fbd062] ">
      <div className="max-w-[1200px] mx-auto">
        <div className="py-[50px]">
          <h2 className="xss:text-[28px] sm:text-[40px] md:text-[50px] leading-[61.09px] text-primary font-bold text-center">
            Our Service
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default OurServiceTitle;
