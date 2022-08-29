import React from "react";
import img1 from "../../images/logos/slack.png";
import img2 from "../../images/logos/google.png";
import img3 from "../../images/logos/uber.png";
import img4 from "../../images/logos/netflix.png";
import img5 from "../../images/logos/airbnb.png";

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

  return (
    <section>
      <div className="w-[1200px]  mx-auto py-[28px] pt-[141px] pb-[106px]">
        <div className="grid  grid-cols-5">
          {allImg.map(({ id, img }) => (
            <div key={id}>
              <img className="w-[140px] h-[52px]" src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Client;
