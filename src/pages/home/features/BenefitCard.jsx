import React from "react";

const BenefitCard = ({ feature }) => {
  return (
    <div className="flex gap-12 items-center bg-gray-50 p-10 rounded-2xl my-6">
      <div className="border-r-2 border-dotted border-gray-500">
        <img className="px-6" src={feature.image} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold py-3">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
