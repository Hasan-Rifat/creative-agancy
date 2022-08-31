import { useState } from "react";
import img1 from "../../images/logos/carousel-1.png";
import img2 from "../../images/logos/carousel-2.png";
import img3 from "../../images/logos/carousel-3.png";
import img4 from "../../images/logos/carousel-4.png";
import img5 from "../../images/logos/carousel-5.png";

const sliderImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
];

type slide = {
  scrollLeft: number;
  sliders: HTMLElement | null | undefined;
};

const Slider: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(1);

  const sliderHandler = () => {
    if (sliderIndex !== sliderImg.length) {
      setSliderIndex(sliderIndex + 1);
    } else if (sliderIndex === sliderImg.length) {
      setSliderIndex(1);
    }
  };
  return (
    <section>
      <div className="w-[1200px] mx-auto">
        <div className="slider overflow-x-auto  whitespace-nowrap">
          {sliderImg.map((img) => (
            <div id="sliders" className="inline-block mx-5" key={img.id}>
              <img
                className="w-[100%] sm:w-[50%] sm:h-[50%] md:w-[465.49px] md:h-[334.7px] "
                src={img.img}
                alt="carousel-images"
              />
            </div>
          ))}
        </div>
        <div className="my-10 flex justify-center items-center">
          {sliderImg.map((item) => (
            <div
              onClick={sliderHandler}
              className="cursor-pointer w-[15px] h-[15px] mx-[11px] rounded-[50%] bg-[#242A65] text-center"
              key={item.id}
            >
              <span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
