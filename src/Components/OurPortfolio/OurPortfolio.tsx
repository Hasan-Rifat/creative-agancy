import React from "react";
import AboutCompany from "./AboutCompany";
import OurCompanyGrowth from "./OurCompanyGrowth";
import OurPortfolioTitles from "./OurPortfolioTitle";
import Testimonial from "./Testimonial";
import Weworkedwithbrands from "./Weworkedwithbrands";

type OurPortfolioProps = {};

const OurPortfolio: React.FC<OurPortfolioProps> = () => {
  return (
    <main>
      <OurPortfolioTitles />
      <AboutCompany />
      <OurCompanyGrowth />
      <Weworkedwithbrands />
      <Testimonial />
    </main>
  );
};
export default OurPortfolio;
