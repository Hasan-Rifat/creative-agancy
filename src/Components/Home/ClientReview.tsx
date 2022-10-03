import { useQuery } from "@tanstack/react-query";
import React from "react";

import Layout from "../shared/Layout";
import Loading from "../shared/Loading";

type ClientReviewProps = {};

type review = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
};

const ClientReview: React.FC<ClientReviewProps> = () => {
  const {
    isLoading,
    data: clientReview,
    refetch,
  } = useQuery(["review"], () =>
    fetch(`https://creative-agancy-server.vercel.app/api/v1/review`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Layout className="bg-[#f9f9f9] py-[100px]">
      <div>
        <div>
          <h2 className="text-primary font-semibold text-center xss:py-[40px] md:pt-[20px] md:pb-[40px] xss:text-[24px] xss:leading-[28px] md:text-[34px] md:leading-[43px]">
            Clients <span className="text-secondary">Feedback</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[30px]">
          {clientReview
            .slice(0, 3)
            .reverse()
            .map((review: review) => (
              <div
                className={`bg-white hover:translate-y-[-5px] ease-in-out duration-300 ${
                  review.id === 1 &&
                  " shadow-[0px_4px_80px_rgba(0,0,0,0.1)] border-white"
                } hover:shadow-[0_10px_15px_0_rgba(253,71,102,0.1)]  hover:border-transparent border-[#BFBFBF] border-[1px] rounded-[10px] p-[23px]`}
                key={review.id}
              >
                <div className="flex gap-[18px] mb-[14px] ">
                  <img
                    className="w-[64px] h-[64px]"
                    src={review?.image}
                    alt=""
                  />
                  <div>
                    <h2>{review.name}</h2>
                    <h5>{review.position}</h5>
                  </div>
                </div>
                <div>
                  <p>{review.description}</p>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </Layout>
  );
};
export default ClientReview;
