import img1 from "../../images/logos/carousel-1.png";
import img2 from "../../images/logos/carousel-2.png";
import img3 from "../../images/logos/carousel-3.png";
import img4 from "../../images/logos/carousel-4.png";
import img5 from "../../images/logos/carousel-5.png";

type Props = {};

const sliderImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
];

const Slider = () => {
  return (
    <section>
      <div className="w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-5 overflow-x-auto">
          {sliderImg.map((img) => (
            <div key={img.id}>
              <img
                className="w-[465.49px] h-[334.7px] "
                src={img.img}
                alt="carousel-images"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
