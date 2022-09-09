import React from "react";
import img from "../../images/ourPortfolio/about-1.png";
import Layout from "../shared/Layout";

type AboutCompanyProps = {};

const AboutCompany: React.FC<AboutCompanyProps> = () => {
  return (
    <Layout className="py-[100px]">
      <div className="grid grid-cols-5 gap-[70px] items-center">
        <div className="col-span-2 ">
          <img src={img} alt="" />
        </div>
        <div className="col-span-3">
          <h2 className="sm:text-[40px] md:text-[50px] font-semibold leading-[62px] mb-[35px]">
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
