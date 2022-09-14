import React from "react";
import img from "../../../images/customer/about-11.jpg";

type FooterLeftProps = {};

const FooterLeft: React.FC<FooterLeftProps> = () => {
  return (
    <div className="">
      <div>
        <img
          className="rounded-[20px] shadow-[0_10px_15px_0_rgba(253,71,102,0.1)]"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};
export default FooterLeft;
