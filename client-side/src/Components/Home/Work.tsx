import React from "react";
import Slider from "./Slider";

type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <section className="bg-primary p-[50px]">
      <div>
        <div>
          <h2 className="text-white text-[34px] leading-[43px] font-semibold text-center pt-[107px] pb-[81.27px]">
            Here are some of <span className="text-secondary">our works</span>
          </h2>
          <Slider />
        </div>
      </div>
    </section>
  );
};
export default Work;
