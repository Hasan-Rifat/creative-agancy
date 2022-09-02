import React from "react";

import img1 from "../../images/customer/customer-1.png";
import img2 from "../../images/customer/customer-2.png";
import img3 from "../../images/customer/customer-3.png";

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

const ClientReview: React.FC<ClientReviewProps> = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto pb-[100px] px-[20px]">
        <div>
          <h2 className="text-primary font-semibold text-center xss:py-[40px] md:pt-[107px] md:pb-[81.27px] xss:text-[24px] xss:leading-[28px] md:text-[34px] md:leading-[43px]">
            Clients <span className="text-secondary">Feedback</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[30px]">
          {clientReview
            .map((review) => (
              <div
                className="border-[#BFBFBF] border-[1px] rounded-[4px] p-[23px]"
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
    </section>
  );
};
export default ClientReview;
