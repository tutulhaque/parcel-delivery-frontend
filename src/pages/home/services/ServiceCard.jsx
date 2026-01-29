// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  const { icons, title, description } = service;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <div className="card-body items-center text-center">
        {/* Icon */}
        <div className="mb-4 text-primary text-4xl">{icons}</div>

        <h3 className="card-title text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
