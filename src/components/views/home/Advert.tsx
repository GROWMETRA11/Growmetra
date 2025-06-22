import React from "react";

const Advert = () => {
  return (
    <section className="bg-green-500 min-h-[372px] flex flex-col justify-center items-center">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="text-center">
          <h1 className="text-[22px] lg:text-[38px] mb-5 font-bold lg:leading-[57px]">
            Join GrowMetra Today
          </h1>
          <p className="text-[12px] mx-8 lg:text-[26px] mb-[40px] text-gray-100 font-semibold lg:font-bold lg:leading-[39px]">
            Whether you're a farmer looking to expand your market reach or a
            buyer seeking quality produce, GrowMetra is your gateway to the
            future of agriculture.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
          <button className="px-8 py-2 bg-white text-green-600 rounded text-[18px] font-[500px] leading-[27px]">
            Start Selling as a Farmer
          </button>
          <button className="px-8 py-2 w-[235px] bg-yellow-200 rounded font-[500px] text[18px] leading-[27px]">
            Browse Marketplace
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advert;
