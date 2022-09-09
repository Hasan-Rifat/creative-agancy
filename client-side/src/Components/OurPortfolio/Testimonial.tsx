import React, { useState } from "react";
import Layout from "../shared/Layout";

import img1 from "../../images/ourPortfolio/testimonial-1.jpg";
import img2 from "../../images/ourPortfolio/testimonial-2.jpg";
import img3 from "../../images/ourPortfolio/testimonial-3.jpg";
import img4 from "../../images/ourPortfolio/testimonial-4.jpg";
import img5 from "../../images/ourPortfolio/testimonial-5.jpg";
import img6 from "../../images/ourPortfolio/testimonial-7.jpg";
import img7 from "../../images/ourPortfolio/testimonial-8.jpg";
import img8 from "../../images/ourPortfolio/testimonial-9.jpg";

type TestimonialProps = {};

const Testimonial: React.FC<TestimonialProps> = () => {
  const [singleR, SetSingleR] = useState<t[]>([
    {
      id: 0,
      img: img1,
      name: "FATIMA ASRAFY",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima Asrafy the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
  ]);
  type testimonials = {
    id: number;
    img: string;
    description: string;
    titles: string;
    name: string;
  }[];

  type t = {
    id: number;
    img: string;
    description: string;
    titles: string;
    name: string;
  };

  const testimonial: testimonials = [
    {
      id: 0,
      img: img1,
      name: "FATIMA ASRAFY",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima Asrafy the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 1,
      img: img2,
      name: "JOHN NIRA",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "John The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 2,
      img: img3,
      name: "JONE JANE",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Jone The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 3,
      img: img4,
      name: "JANEN ASRAFY ",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 4,
      img: img5,
      name: "FATIMA ASRAFY",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Afrin The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 5,
      img: img6,
      name: "IRIN ASRAFY",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Irin The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 6,
      img: img7,
      name: "SHIPA",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Shipa the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 7,
      img: img8,
      name: "RUNA AFRIN",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Awesome client the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
  ];

  const testimonialHandler = (id: number) => {
    const testimonialItem: testimonials = testimonial.filter(
      (elm) => elm.id === id
    );
    if (testimonialItem) {
      SetSingleR(testimonialItem);
    }
  };

  console.log(singleR);

  return (
    <Layout className="py-[120px] bg-[#f9f9f9]">
      <div>
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="grid grid-cols-1 gap-10">
            {singleR &&
              singleR.map((t: t) => (
                <div className="animate-pulse" key={t.id}>
                  <div className="">
                    <div>
                      <p className="text-[30px] leading-[48px] text-[#18181b] font-medium ">
                        {t.description}
                      </p>
                      <div className="text-[18px] leading-[50px] text-[#8c8c8c] font-light flex gap-2 mt-[16px]">
                        <p className="text-[#fd4766] font-medium">{t.name}</p>
                        <p> - {t.titles}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center flex-wrap gap-10 cursor-pointer">
            {testimonial.map((t: t) => (
              <div onClick={() => testimonialHandler(t.id)} key={t.id}>
                <img
                  className="rounded-[5px] drop-shadow-2xl"
                  src={t.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Testimonial;
