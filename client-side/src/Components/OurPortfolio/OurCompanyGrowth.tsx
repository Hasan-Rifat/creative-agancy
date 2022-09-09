import React from "react";
import Layout from "../shared/Layout";

import {
  BsFillPersonLinesFill,
  BsClock,
  BsCheckCircle,
  BsAward,
} from "react-icons/bs";

type OurCompanyGrowthProps = {};

type rewords = {
  id: number;
  text: string;
  Customers: number;
  icon: JSX.Element;
}[];

const rewords: rewords = [
  {
    id: 1,
    text: "satisfied Customers",
    Customers: 200,
    icon: <BsFillPersonLinesFill />,
  },
  { id: 2, text: "Days Of Operation", Customers: 1000, icon: <BsClock /> },
  { id: 3, text: "Complete Project", Customers: 500, icon: <BsCheckCircle /> },
  { id: 4, text: "Win Awards", Customers: 10, icon: <BsAward /> },
];

type reword = {
  id: number;
  text: string;
  Customers: number;
  icon: JSX.Element;
};

const OurCompanyGrowth: React.FC<OurCompanyGrowthProps> = () => {
  return (
    <Layout className="bg-[#f9f9f9] xss:py-[50px] md:py-[100px] xss:px-[20px] md:px-[50px]">
      <div>
        <div>
          <h2 className="xss:text-[24px] sm:text-[40px] md:text-[50px] leading-[61.09px] text-black font-bold text-center mb-[20px]">
            Our Company Growth
          </h2>
          <p className="font-light text-primary text-[18px] leading-[30px] sm:px-[5%] md:px-[25%] text-center">
            We have grown strength over the past 20 years.
          </p>
        </div>
        <div className="grid xss:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[40px] gap-7">
          {rewords.map(({ id, text, Customers, icon }: reword) => (
            <div key={id} className=" bg-white rounded-[10px] p-[45px]">
              <div className="">
                <p className="text-[40px] flex justify-center text-[#FF0839] mb-[20px]">
                  {icon}
                </p>
                <h2 className="text-center sm:text-[40px] md:text-[54px] font-semibold sm:leading-[52px] md:leading-[62px] mb-[7px] text-[#000000]">
                  {Customers}+
                </h2>
                <p className="text-center text-[18px] leading-[28px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default OurCompanyGrowth;
