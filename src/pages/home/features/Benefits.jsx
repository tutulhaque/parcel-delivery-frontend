import React, { useEffect, useState } from "react";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    fetch("benefits.json")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-4 py-6">
        Why Choose Us
      </h2>
      {featureData.map((feature) => (
        <BenefitCard feature={feature} />
      ))}
    </div>
  );
};

export default Benefits;
