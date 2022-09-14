import React from "react";
import Layout from "../shared/Layout";

import img1 from "../../images/ourPortfolio/brand-01.png";
import img2 from "../../images/ourPortfolio/brand-02.png";
import img3 from "../../images/ourPortfolio/brand-03.png";
import img4 from "../../images/ourPortfolio/brand-04.png";
import img5 from "../../images/ourPortfolio/brand-05.png";
import img6 from "../../images/ourPortfolio/brand-06.png";
import img7 from "../../images/ourPortfolio/brand-07.png";
import img8 from "../../images/ourPortfolio/brand-08.png";
import img9 from "../../images/ourPortfolio/brand-09.png";

type WeworkedwithbrandsProps = {};

type imgs = {
  id: number;
  img: string;
}[];

const images: imgs = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
];

const Weworkedwithbrands: React.FC<WeworkedwithbrandsProps> = () => {
  return (
    <Layout className="xss:py-[50px] md:py-[100px] xss:px-[20px] md:px-[50px]">
      <div>
        <div className="xss:mb-[15px] sm:mb-30px">
          <h2 className="xss:text-[24px]  sm:text-[40px] md:text-[50px] leading-[61.09px] text-black font-bold text-center mb-[20px]">
            We worked with brands.
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {images.map((image) => (
            <div
              className="w-[205px] opacity-[0.8] grayscale hover:grayscale-0 flex justify-center items-center"
              key={image.id}
            >
              <img className="p-[30px]" src={image.img} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Weworkedwithbrands;
