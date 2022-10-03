import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import useServices from "../../../Hooks/useServices";
import DashboardLayout from "../../shared/DashboardLayout";
import Loading from "../../shared/Loading";
import Modal from "../AllUser/Modal";
import DashboardTitle from "../DashboardTitle";

type ServicesListProps = {};

const ServicesList: React.FC<ServicesListProps> = () => {
  const [service] = useServices();
  const [open, setOpen] = useState(false);
  const [getData, setGetData] = useState<
    | never[]
    | {
        description: string;
        image: string;
        price: number;
        title: string;
        _id: string;
      }
  >([]);

  type s = {
    _id: number;
    title: string;
    description: string;
    image: string;
    price: number | string;
  };
  if (service.length === 0) {
    return <Loading />;
  }

  const deleteService = (id: number) => {
    const url = `https://creative-agancy-server.vercel.app/api/v1/services/${id}`;
    fetch(url, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        toast.error("deleteService successfully");
        window.location.reload();
      });
  };
  const fullData = (all: any) => {
    setGetData(all);
  };
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>All Services</DashboardTitle>
        <div className="grid xss:grid-cols-1 md:gap-[10px]  xl:gap-[30px] md:grid-cols-3">
          {service.map((item: s) => (
            <div
              key={item._id}
              className={` bg-white text-center pt-[34px] pb-[39px] px-[50px] rounded-[10px] hover:translate-y-[-5px] ease-in-out duration-300  shadow-[0_10px_15px_0_rgba(253,71,102,0.1)] `}
            >
              <div className="pb-[25px]  relative">
                <img
                  className="w-[74px] h-[74px] mx-auto"
                  src={item.image}
                  alt=""
                />
                <div className=" flex gap-[10px] absolute right-0 top-0">
                  <label htmlFor="edit-modal" onClick={() => setOpen(!open)}>
                    <FaEdit
                      onClick={() => fullData(item)}
                      className="text-[24px] cursor-pointer text-[#26ab70]"
                    />
                  </label>
                  <p>
                    <RiDeleteBin2Fill
                      onClick={() => deleteService(item._id)}
                      className="text-[24px] cursor-pointer text-secondary"
                    />
                  </p>
                </div>
              </div>
              <h2 className="sm:text-[16px] lg:text-[20px] leading-[16px] tracking-[0.4 px] font-semibold text-primary pb-[18px]">
                {item.title}
              </h2>
              <p className="sm:text-[13px] lg:text-[16px] leading-[28px] tracking-[0.4 px] font-light text-[#4c4c4c]">
                {item.description.slice(0, 100)}
              </p>
              <span className="title-font font-medium text-2xl text-secondary">
                $<span className="text-primary">{item.price}</span>
              </span>
            </div>
          ))}
        </div>

        {open && <Modal setOpen={setOpen} open={open} getData={getData} />}
      </div>
    </DashboardLayout>
  );
};
export default ServicesList;
