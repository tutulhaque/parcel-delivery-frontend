import React, { useEffect, useState } from "react";
import testomonialImg1 from "../../../assets/customer-top.png";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="py-20">
      <div className="flex flex-col justify-center items-center">
        <img className="w-36" src={testomonialImg1} alt="" />
        <h1 className="text-3xl font-bold py-3">
          What our customers are sayings
        </h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="card-section py-10">
        <TestimonialCard data={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;
