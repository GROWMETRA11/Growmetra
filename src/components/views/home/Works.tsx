import React from "react";
import BuyersImg from "../../../app/assets/BuyersImg.svg";
import FarmersImg from "../../../app/assets/Farmers.svg";
import Image from "next/image";

const Works = () => {
  return (
    <section className="max-width-[1326px] w-full mx-auto mt-36">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[928px] text-center font-bold">
          <h1 className="text-[38px] leading-[57px] mb-6">
            How GrowMetra Works
          </h1>
          <p className="text-gray-500 text-[22px] leading-[33px] mb-8.5">
            Our simple two-step process connects farmers directly with buyers
            for maximum impact and growth.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[85px] m-5">
          <div className="pt-7.5 pb-7.5 pl-5 pr-5 border-1 border-gray-300 rounded-lg shadow-2xl shadow-gray-500">
            <div className=" max-w-[392px] w-full mx-auto">
              <h2 className="text-green-500 font-bold text-3xl mb-6">01</h2>
              <Image src={FarmersImg} alt="" />
              <h2 className="mt-5 mb-3 font-bold text-[22px] leading-[33px]">
                Farmers Lists Products
              </h2>
              <p className="mb-8 pr-2 font-normal text-base text-gray-600 leading-6">
                Farmers create profiles and list their fresh produce with
                detailed information, pricing, and availability.
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 rounded-full w-2 h-2"></div>
                <p className="font-normal text-base leading-6 text-green-500">
                  Live Now
                </p>
              </div>
            </div>
          </div>

          <div className="pt-7.5 pb-7.5 pl-5 pr-5 border-1 border-gray-300 rounded-lg shadow-2xl shadow-gray-500">
            <div className=" max-w-[392px]">
              <h2 className="text-green-500 font-bold text-3xl mb-6">02</h2>
              <Image src={BuyersImg} alt="" />
              <h2 className="mt-5 mb-3 font-bold text-[22px] leading-[33px]">
                Buyers Browse & Buy
              </h2>
              <p className="mb-8 pr-8  font-normal text-base text-gray-600 leading-6">
                Buyers discover quality produce from verified farmers and place
                orders directly through our secure platform.
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 rounded-full w-2 h-2"></div>
                <p className="font-normal text-base leading-6 text-green-500">
                  Live Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
