import React from "react";

const CoreValues = () => {
  const values = [
    "Integrity",
    "Transparency",
    "Empowerment",
    "Fairness",
    "Innovation",
    "Sustainability"
  ];

  return (
    <div className="flex flex-col justify-center items-center py-[60px] ">
      <h2 className="font-bold text-[32px] lg:text-[56px] text-center leading-[84px] mb-16 ">
        Core Values
      </h2>
      <div className="flex flex-wrap md:flex-col lg:flex-row justify-center lg:gap-8 gap-4">
        {values.map((value, index) => (
          <div
            className="bg-green-500 rounded-[50px] text-[18px] font-medium  text-white px-10 py-2"
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
