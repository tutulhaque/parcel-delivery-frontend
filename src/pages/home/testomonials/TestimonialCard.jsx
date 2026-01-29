import React, { useState } from "react";

const TestimonialCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = data.length - 3;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 33.333}%)`,
          }}
        >
          {data.map((item, index) => {
            // ✅ middle card focus
            const isActive = index === activeIndex + 1;

            return (
              <div key={item.id} className="w-1/3 px-4 flex-shrink-0">
                <div
                  className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500
                    ${
                      isActive ? "scale-105 opacity-100" : "scale-90 opacity-50"
                    }`}
                >
                  <img
                    src={item.user_photoURL}
                    alt={item.userName}
                    className="w-14 h-14 rounded-full mb-4"
                  />
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <h4 className="font-semibold">{item.userName}</h4>
                  <p className="text-xs text-gray-500">{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all
              ${index === activeIndex ? "bg-black scale-110" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
