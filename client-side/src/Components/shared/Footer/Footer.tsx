import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

type FooterProps = {};

const FooterTop: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#fbd062]">
      <div className="max-w-[1200px] mx-auto xss:py-[40px] md:py-[60px]  px-5">
        <div className="grid xss:grid-cols-1 md:grid-cols-2 xss:gap-[30px] md:gap-[134px]">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
    </footer>
  );
};
export default FooterTop;
