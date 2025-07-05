"use client"
import React, { useState } from "react";
import BenefitsImg from "../../../app/assets/FarmersBenefitsImg.png";
import BenefitsImg2 from "../../../app/assets/BuyersBenefitsImg.png";
import Image from "next/image";

const Benefits = () => {
  const listItems = [
    "Direct access to buyers without middlemen",
    "Fair pricing for quality produce",
    "Increased market exposure",
    "Verified buyer network",
    "Secure payment processing",
  ];
  const famers = listItems.map((list, index) => <li key={index}>{list}</li>);

  const listItems1 = [
    "Direct sourcing from verified farms",
    "Competitive pricing ",
    "Quality assurance guaranteed",
    "Seasonal produce availability",
    "Transparent supply chain",
  ];
  const buyers = listItems1.map((list, index) => <li key={index}>{list}</li>);

  const [touch, setTouch] = useState(false);

  function handleTouch() {
    setTouch(!touch);
  }

  const [onTouch, setOntouch] = useState(false);

  function handleRemoveTouch() {
    setOntouch(!onTouch);
  }

  return (
    <section className="max-w-[1320px] w-full mx-auto mt-[170px] ">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="max-w-[393px] mx-auto font-bold text-[38px] text-center leading-[57px] ">
            Benefits for Everyone
          </h1>
          <p className="max-w-[841px] w-full font-bold text-gray-600 text-center text-[22px] leading-[33px]">
            GrowMetra creates value for farmers and buyers through our
            innovative agricultural platform.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12.5 mt-12 ml-5 mr-5">
          <div className="border-2 border-gray-200 shadow-lg rounded-lg shadow-gray-500 max-w-[432px] min-h-[400px]">
            <div className="pl-5 pr-5 pt-7.5">
              <div
                className="relative"
                onMouseEnter={handleTouch}
                onMouseLeave={handleTouch}
              >
                {touch && (
                  <div className="text-center absolute flex flex-col justify-center items-center m-2 w-[calc(100%-14px)] h-[calc(100%-14px)] rounded-lg bg-[#22C55E80] ">
                    <h2 className="text-[22px] font-bold leading-[33px]">
                      For Farmers
                    </h2>
                    <p className="text-[22px] text-white font-bold leading-[33px]">
                      Grow Your Income
                    </p>
                  </div>
                )}
                <Image src={BenefitsImg} alt="" />
              </div>
              <ul className="list-disc marker:text-green-500 ml-[37px] font-normal text-[16px] text-gray-600 leading-6 mt-8">
                {famers}
              </ul>
            </div>
          </div>
          <div className="border-2 border-gray-200 shadow-lg rounded-lg shadow-gray-500 ">
            <div className="pl-5 pr-5 pt-7.5">
              <div
                className="relative"
                onMouseEnter={handleRemoveTouch}
                onMouseLeave={handleRemoveTouch}
              >
                {onTouch && (
                  <div className="text-center absolute flex flex-col justify-center items-center bg-[#FFEB3B80] h-full w-full">
                    <h2 className="text-[22px] font-bold leading-[33px]">
                      For Buyers
                    </h2>
                    <p className="text-[22px] text-white font-bold leading-[33px]">
                      Fresh & Reliable
                    </p>
                  </div>
                )}
                <Image className="w-[392px]" src={BenefitsImg2} alt="" />
              </div>
              <ul className="list-disc marker:text-yellow-500 ml-[37px] font-normal text-[16px] text-gray-600 leading-6 mt-8 mb-12">
                {buyers}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
