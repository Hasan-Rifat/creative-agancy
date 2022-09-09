import React from "react";
import img from "../../images/ourPortfolio/about-1.png";
import Layout from "../shared/Layout";

type AboutCompanyProps = {};

const AboutCompany: React.FC<AboutCompanyProps> = () => {
  return (
    <Layout className="xss:py-[50px] md:py-[100px] xss:px-[20px] md:px-[50px]">
      <div className="grid grid-cols-5 sm:gap-[70px] items-center">
        <div className="xss:col-span-5 md:col-span-2  ">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="xss:col-span-5 md:col-span-3 xss:mt-[35px] sm:mt-[0]">
          <h2 className="xss:text-[28px] md:text-[50px] font-semibold sm:leading-[27px] md:leading-[62px] xss:mb-[15px] sm:mb-[35px]">
            Company About.
          </h2>
          <p className="font-light text-primary text-[18px] leading-[30px]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default AboutCompany;
