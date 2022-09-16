import React from "react";
import image from "../../images/logos/Frame.png";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="bg-[#fbd062]">
      <div className="max-w-[1200px] mx-auto xss:py-[100px] md:pt-[141px] md:pb-[106px] px-5">
        <div className="grid grid-cols-5 md:gap-[20px] lg:gap-[120px] items-end ">
          <div className="xss:col-span-5 md:col-span-2 md:order-1 xss:order-2 xss:mt-[50px]">
            <h2 className="xss:text-[24px] xss:leading-[30px] md:text-[48px] md:leading-[60px] font-bold text-primary">
              Let’s Grow Your Brand To The Next Level
            </h2>
            <p className="w-full py-[23px] text-[16px] leading-[24px] font-normal text-primary tracking-[0.005em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button className="hover:translate-y-[-5px] hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)] ease-in-out duration-300  font-roboto px-[60px] py-[10px] text-white bg-primary text-[16px] leading-[24px] font-normal rounded-[5px] hover:bg-secondary">
              Hire us
            </button>
          </div>
          <div className="xss:col-span-5 md:col-span-3 md:order-2 xss:order-1">
            <img
              className=" xss:w-full xss:h-[200px] sm:w-[624.6px] sm:h-[422.8px]"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
