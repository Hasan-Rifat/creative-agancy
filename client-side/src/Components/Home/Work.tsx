import React from "react";
import Sliders from "./Slider";

type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <section className="bg-primary sm:p-[25px] md:p-[50px]">
      <div>
        <div>
          <h2 className="text-white  font-semibold text-center xss:py-[40px] md:pt-[107px] md:pb-[81.27px] xss:text-[24px] xss:leading-[28px] md:text-[34px] md:leading-[43px]">
            Here are some of <span className="text-secondary">our works</span>
          </h2>
          <Sliders />
        </div>
      </div>
    </section>
  );
};
export default Work;
