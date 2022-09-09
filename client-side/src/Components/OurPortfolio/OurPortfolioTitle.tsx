import React from "react";
import Layout from "../shared/Layout";

type OurPortfolioTitleProps = {};

const OurPortfolioTitles: React.FC<OurPortfolioTitleProps> = () => {
  return (
    <Layout className="py-[120px] bg-gradient-to-r from-blue-500 via-cyan-500 to-[#FFF] ">
      <div className="max-w-[1200px] mx-auto">
        <div className="py-[50px]">
          <h2 className="sm:text-[40px] md:text-[50px] leading-[61.09px] text-white font-bold text-center">
            Our Portfolio
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default OurPortfolioTitles;
