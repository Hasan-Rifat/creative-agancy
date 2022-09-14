import React from "react";
import Layout from "../shared/Layout";

import { FiMonitor } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

type OurMarketingProps = {};

const OurMarketing: React.FC<OurMarketingProps> = () => {
  type services = {
    id: number;
    title: string;
    description: string;
    logo: JSX.Element;
  }[];

  const services: services = [
    {
      id: 1,
      title: "Pay-Per-Click",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority.",
      logo: <FiMonitor />,
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      logo: <BsFillPersonLinesFill />,
    },
    {
      id: 3,
      title: "Email Marketing",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in all.",
      logo: <TbBrandTelegram />,
    },
  ];

  type service = {
    id: number;
    title: string;
    description: string;
    logo: JSX.Element;
  };

  return (
    <Layout className="xss:py-[50px] md:py-[120px] xss:px-[20px] md:px-[50px] bg-[#f9f9f9]">
      <div>
        <div>
          <div>
            <h2 className="text-[50px] font-semibold leading-[62px] pt-[20px] pb-[30px]">
              Marketing
            </h2>
          </div>
        </div>
        <div className="grid xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[40px]">
          {services.map((service: service) => (
            <div
              className="hover:translate-y-[-5px] hover:shadow-[0_10px_15px_0_rgba(253,71,102,0.1)]  bg-white p-[50px] ease-in-out duration-300 rounded-[10px]"
              key={service.id}
            >
              <p className="mb-[23px] text-[47px] text-[#fd4766] rounded-[10px]">
                {service.logo}
              </p>
              <h3 className="mb-[19px] font-semibold text-[20px] text-[#1f1f25]">
                {service.title}
              </h3>
              <p className="text-[18px] leading-[30px] text-[#49494e]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default OurMarketing;
