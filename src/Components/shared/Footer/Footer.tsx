import React from "react";
import Layout from "../Layout";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

type FooterProps = {};

const FooterTop: React.FC<FooterProps> = () => {
  return (
    <Layout className="bg-[#fff] py-[120px]">
      <div>
        <div className="grid xss:grid-cols-1 md:grid-cols-2 xss:gap-[30px] md:gap-[100px]">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
    </Layout>
  );
};
export default FooterTop;
