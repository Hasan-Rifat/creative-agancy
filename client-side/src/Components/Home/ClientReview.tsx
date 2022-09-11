import React from "react";

import img1 from "../../images/customer/customer-1.png";
import img2 from "../../images/customer/customer-2.png";
import img3 from "../../images/customer/customer-3.png";
import Layout from "../shared/Layout";

type ClientReviewProps = {};

type clientReviews = {
  id: number;
  name: string;
  position: string;
  description: string;
  img: string;
}[];

const clientReview: clientReviews = [
  {
    id: 0,
    img: img3,
    name: "Bria Malone",
    position: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 1,
    img: img2,
    name: "Miriam Barron",
    position: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },

  {
    id: 2,
    img: img1,
    name: "Nash Patrik",
    position: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
];

type review = {
  id: number;
  name: string;
  position: string;
  description: string;
  img: string;
};

const ClientReview: React.FC<ClientReviewProps> = () => {
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
            .map((review: review) => (
              <div
                className={`bg-white hover:translate-y-[-5px] ease-in-out duration-300 ${
                  review.id === 1 &&
                  " shadow-[0px_4px_80px_rgba(0,0,0,0.1)] border-white"
                } hover:shadow-[0_10px_15px_0_rgba(253,71,102,0.1)]  hover:border-transparent border-[#BFBFBF] border-[1px] rounded-[10px] p-[23px]`}
                key={review.id}
              >
                <div className="flex gap-[18px] mb-[14px] ">
                  <img className="w-[64px] h-[64px]" src={review.img} alt="" />
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
