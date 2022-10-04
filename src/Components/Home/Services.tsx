import React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import Layout from "../shared/Layout";
import Loading from "../shared/Loading";

type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
  const [service] = useServices();

  type ser = {
    _id: number;
    title: string;
    description: string;
    image: string;
  };

  const navigate = useNavigate();

  if (service.length === 0) {
    return <Loading />;
  }

  const navigateServiceDetails = (id: number) => {
    navigate(`/service/${id}`);
  };

  return (
    <Layout className="py-[70px] pb-[114px] bg-[#f9f9f9]">
      <div>
        <h2 className=" xss:text-[24px] xss:leading-[28px] md:text-[34px] md:leading-[43px] font-semibold text-center pb-[77px]">
          Provide awesome <span className="text-secondary">services</span>
        </h2>
        <div className="grid xss:grid-cols-1 md:gap-[10px]  xl:gap-[30px] md:grid-cols-3">
          {service.map(({ _id, title, description, image }: ser) => (
            <div
              onClick={() => navigateServiceDetails(_id)}
              key={_id}
              className={`cursor-pointer bg-white text-center pt-[34px] pb-[39px] px-[50px] rounded-[10px] hover:translate-y-[-5px] ease-in-out duration-300  hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)]
              ${
                title === "Graphic design"
                  ? " shadow-[0_10px_15px_0_rgba(253,71,102,0.1)] "
                  : ""
              }`}
            >
              <div className="pb-[25px]">
                <img className="w-[74px] h-[74px] mx-auto" src={image} alt="" />
              </div>
              <h2 className="sm:text-[16px] lg:text-[20px] leading-[16px] tracking-[0.4 px] font-semibold text-primary pb-[18px]">
                {title}
              </h2>
              <p className="sm:text-[13px] lg:text-[16px] leading-[28px] tracking-[0.4 px] font-light text-[#4c4c4c]">
                {description.slice(0, 95)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Services;
