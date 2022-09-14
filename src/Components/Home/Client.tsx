import React from "react";
import img1 from "../../images/logos/slack.png";
import img2 from "../../images/logos/google.png";
import img3 from "../../images/logos/uber.png";
import img4 from "../../images/logos/netflix.png";
import img5 from "../../images/logos/airbnb.png";
import Layout from "../shared/Layout";

type ClientProps = {};

const Client: React.FC<ClientProps> = () => {
  type ImgType = {
    id: number;
    img: string;
  };
  const allImg: ImgType[] = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];

  type images = {
    id: number;
    img: string;
  };

  return (
    <Layout className="py-[28px]  lg:pt-[141px] lg:pb-[106px] px-[20px]">
      <div className="grid xss:grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {allImg.map(({ id, img }: images) => (
          <div key={id} className="mx-auto">
            <img className="max-w-[140px] h-[52px]" src={img} alt="" />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Client;
