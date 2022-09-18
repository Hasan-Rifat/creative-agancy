import React from "react";
import Layout from "../shared/Layout";

type ContactUsTitleProps = {};

const ContactUsTitle: React.FC<ContactUsTitleProps> = () => {
  return (
    <Layout className="xss:py-[50px] md:py-[120px] xss:px-[20px] md:px-[50px] bg-gradient-to-r from-blue-500 via-cyan-500 to-[#FFF] ">
      <div className="max-w-[1200px] mx-auto">
        <div className="py-[50px]">
          <h2 className="xss:text-[28px] sm:text-[40px] md:text-[50px] leading-[61.09px] text-white font-bold text-center">
            Contact With Us
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default ContactUsTitle;
