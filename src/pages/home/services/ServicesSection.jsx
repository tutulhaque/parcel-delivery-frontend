// src/components/ServicesSection.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../../data/servicesData";

// Optional icons (example using emoji for now)
const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#03373D] rounded-3xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-50">Our Services</h2>
          <p className="text-gray-50">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
