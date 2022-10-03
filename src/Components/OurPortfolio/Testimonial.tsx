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
      image: img1,
      name: "FATIMA ASRAFY",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima Asrafy the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
  ]);
  type testimonials = {
    id: number;
    image: string;
    description: string;
    titles: string;
    name: string;
  }[];

  type t = {
    id: number;
    image: string;
    description: string;
    titles: string;
    name: string;
  };

  const testimonial: testimonials = [
    {
      id: 0,
      image: img1,
      name: "FATIMA ASRAFY",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima Asrafy the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 1,
      image: img2,
      name: "JOHN NIRA",
      titles: "COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "John The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 2,
      image: img3,
      name: "JONE JANE",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Jone The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 3,
      image: img4,
      name: "JANEN ASRAFY ",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Fatima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 4,
      image: img5,
      name: "FATIMA ASRAFY",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Afrin The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 5,
      image: img6,
      name: "IRIN ASRAFY",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Irin The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 6,
      image: img7,
      name: "SHIPA",
      titles: " COO, AMERIMAR ENTERPRISES, INC.",
      description:
        "Shipa the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 7,
      image: img8,
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

  return (
    <Layout className="xss:py-[50px] md:py-[100px] xss:px-[20px] md:px-[50px] bg-[#f9f9f9]">
      <div>
        <div className="grid xss:grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="grid grid-cols-1 gap-10  sm:order-1">
            {singleR &&
              singleR.map((t: t) => (
                <div className="before:" key={t.id}>
                  <div className="">
                    <div>
                      <p className="xss:text-[16px] xss:leading-[28px] sm:text-[30px] sm:leading-[48px] text-[#18181b] font-medium ">
                        {t.description}
                      </p>
                      <div className="xss:text-[16px] xss:leading-[28px] sm:text-[18px] sm:leading-[50px] text-[#8c8c8c] font-light xss:flex-col sm:flex-row flex gap-2 mt-[16px]">
                        <p className="text-[#fd4766] font-medium">{t.name}</p>
                        <p> - {t.titles}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="xss:grid xss:grid-cols-2 sm:grid sm:grid-cols-3 md:flex md:justify-center md:flex-wrap gap-10 cursor-pointer sm:order-2">
            {testimonial.map((t: t) => (
              <div onClick={() => testimonialHandler(t.id)} key={t.id}>
                <img
                  className="rounded-[5px] drop-shadow-2xl"
                  src={t.image}
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
