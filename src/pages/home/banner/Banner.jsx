import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BanerImg1 from "../../../assets/banner/banner1.png";
import BanerImg2 from "../../../assets/banner/banner2.png";
import BanerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={BanerImg1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={BanerImg2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={BanerImg3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
