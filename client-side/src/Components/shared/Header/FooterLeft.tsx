import React from "react";

type FooterLeftProps = {};

const FooterLeft: React.FC<FooterLeftProps> = () => {
  return (
    <div>
      <h2 className="xss:text-[24px] xss:leading-[30px] md:text-[34px] md:leading-[43px] font-semibold text-primary tracking-[0.396px]">
        Let us handle your <br /> project, professionally.
      </h2>
      <p className="mt-[32px] text-[14px] tracking-[0.396px]">
        With well written codes, we build amazing apps for all platforms, mobile
        and web apps in general.
      </p>
    </div>
  );
};
export default FooterLeft;
