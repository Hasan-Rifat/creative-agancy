import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../Checkout/CheckoutForm";
import Layout from "../shared/Layout";
import Loading from "../shared/Loading";

type PaymentProps = {};
const stripePromise = loadStripe(
  "pk_test_51L1UkHA6Pt4ayo7M42yaRLptxhs7fbEINLKXOjh2uEfeaWvGh9mYNduStpWAjgAdzO89PI1PtXszf1WQjKCydezH00ZChM8oL9"
);
const Payment: React.FC<PaymentProps> = () => {
  const { id } = useParams();

  const { isLoading, data: singleItem } = useQuery(["service", id], () =>
    fetch(
      `https://creative-agancy-server.vercel.app/api/v1/services/${id}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout className="py-[150px] px-[20px] bg-[#f5f8ff]">
      <div className="w-1/2 mx-auto shadow-xl p-[40px] bg-white">
        <div className=" col-span-1  bg-[#f5f8ff] items-center p-10 md:grid-cols-3 gap-[40px]  rounded-[10px]">
          <div className="mb-5">
            <img
              className="w-[50%] rounded mx-auto"
              src={singleItem?.image}
              alt="commerce"
            />
          </div>
          <div className=" md:mt-0 ">
            <h1 className="text-gray-900 text-[24px] title-font font-medium mb-1">
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
            <p className="leading-relaxed">
              {singleItem?.description.slice(0, 80)}
            </p>
            <div className="flex  mt-6  pb-5  mb-5">
              <span className="title-font font-medium text-2xl text-secondary">
                $<span className="text-primary">{singleItem.price}</span>
              </span>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm singleItem={singleItem} id={id} />
            </Elements>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Payment;
