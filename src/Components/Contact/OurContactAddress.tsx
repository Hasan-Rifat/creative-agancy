import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Layout from "../shared/Layout";

type OurContactAddressProps = {};

const OurContactAddress: React.FC<OurContactAddressProps> = () => {
  type s = {
    id: number;
    title: string;
    description: string;
    logo: JSX.Element;
  }[];

  const services: s = [
    {
      id: 1,
      title: "Contact Phone Number",
      description: "PS: +88 01768227738 ",
      logo: <FiPhoneCall />,
    },
    {
      id: 2,
      title: "Our Email Address",
      description: " contacthasanrifat@gmail.com ",
      logo: <FiMail />,
    },
    {
      id: 3,
      title: "Our Location",
      description: "Comilla Bangladesh",
      logo: <MdOutlineLocationOn />,
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
          <h2 className="xss:text-[24px] sm:text-[40px] md:text-[50px] leading-[61.09px] text-black font-bold text-center mb-[20px]">
            Quick Contact Address
          </h2>
          <p className="font-light text-primary text-[18px] leading-[30px] sm:px-[5%] md:px-[25%] text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="grid xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[40px]">
          {services.map((service: service) => (
            <div
              className="hover:translate-y-[-5px] hover:shadow-[0_10px_15px_0_rgba(253,71,102,0.1)]  bg-white p-[50px] ease-in-out duration-300 rounded-[10px] text-center"
              key={service.id}
            >
              <p className="mb-[23px] text-[47px] text-[#fd4766] rounded-[10px] flex justify-center">
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
export default OurContactAddress;
