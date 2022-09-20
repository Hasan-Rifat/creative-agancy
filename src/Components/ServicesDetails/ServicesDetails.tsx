import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import Button from "../shared/Button";
import Layout from "../shared/Layout";
import Loading from "../shared/Loading";

type ServicesDetailsProps = {};

const ServicesDetails: React.FC<ServicesDetailsProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: singleItem } = useQuery(["service", id], () =>
    fetch(`https://creative-agancy-server.vercel.app/service/${id}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const navigateCheckout = (id: number) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <>
      <Layout className="px-[20px] py-[150px] h-[88vh] flex items-center bg-[#f9f9f9]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[40px]">
          <div className="xss:col-span-2 md:col-span-1 ">
            <img
              className=" rounded w-full"
              src={singleItem?.logo}
              alt="commerce"
            />
          </div>
          <div className="xss:col-span-2  md:col-span-2 p-10 md:mt-0 shadow-[0px_4px_80px_rgba(0,0,0,0.1)] rounded-[10px]">
            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
               {id}
             </h2> */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleItem?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <span className="text-gray-600 ml-3">
                  {singleItem.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{singleItem?.description}</p>
            <div className="flex  mt-6  pb-5  mb-5">
              <span className="title-font font-medium text-2xl text-secondary">
                $<span className="text-primary">{singleItem.price}</span>
              </span>
              <button onClick={() => navigateCheckout(singleItem._id)}>
                <Button className="flex ml-[40px] border-0 py-2 px-6 focus:outline-none rounded">
                  Place Order
                </Button>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default ServicesDetails;
