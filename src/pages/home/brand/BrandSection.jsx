import React from "react";
import brandImg1 from "../../../assets/brands/amazon.png";
import brandImg2 from "../../../assets/brands/amazon_vector.png";
import brandImg3 from "../../../assets/brands/casio.png";
import brandImg4 from "../../../assets/brands/moonstar.png";
import brandImg5 from "../../../assets/brands/randstad.png";
import brandImg6 from "../../../assets/brands/start-people 1.png";
import brandImg7 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";
const logos = [
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg7,
];

const BrandSection = () => {
  return (
    <div className="py-6">
      <div className="text-center max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">
          We've helped thousands of sales teams
        </h2>

        <Marquee>
          <div className="flex items-center space-x-20 mt-12">
            {logos.map((logo, idx) => (
              <img key={idx} src={logo} alt="" className="h-6 object-contain" />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandSection;
