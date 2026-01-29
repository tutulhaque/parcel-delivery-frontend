import React from "react";
import Banner from "../banner/Banner";
import ServicesSection from "../services/ServicesSection";
import BrandSection from "../brand/BrandSection";
import Benefits from "../features/Benefits";
import BeMerchent from "../beMarchent/BeMerchent";
import TestimonialSection from "../testomonials/TestimonialSection";
import FaqSection from "../faq/FaqSection";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <Banner />
      <ServicesSection />
      <BrandSection />
      <hr className="border-dotted border-gray-500" />
      <Benefits />
      <BeMerchent />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
};

export default Home;
