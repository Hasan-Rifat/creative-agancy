import img1 from "../../images/logos/carousel-1.png";
import img2 from "../../images/logos/carousel-2.png";
import img3 from "../../images/logos/carousel-3.png";
import img4 from "../../images/logos/carousel-4.png";
import img5 from "../../images/logos/carousel-5.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

type sliderImg = {
  id: number;
  img: string;
}[];

const sliderImg: sliderImg = [
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

const Sliders: React.FC = () => {
  return (
    <section className="">
      <div className="max-w-[1200px] mx-auto">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="">
            {sliderImg.map((img: images) => (
              <SwiperSlide key={img.id}>
                <div id="sliders" className="">
                  <img
                    className="xss:w-[100%] xss:h-[100px] md:w-[465.49px] md:h-[334.7px] "
                    src={img.img}
                    alt="carousel-images"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Sliders;
