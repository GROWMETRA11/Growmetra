import React from "react";
import VectorImg from "../../../app/assets/Vector.svg";
import Image from "next/image";


const Success = () => {
  return (
    <section className="max-w-[1220px] mx-auto w-full my-30">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px] lg:text-6xl font-semibold lg:font-bold leading-[57px]">
          Success Stories
        </h1>
        <p className="text-[12px] lg:text-[22px] text-center text-gray-600 font-bold max-w-[930px] w-full leading[33px] ">
          Hear from farmers and buyers who are already transforming agriculture
          through GrowMetra.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-[60px] mx-5 justify-center items-center">
        <div className="max-w-[380px]  w-full border-2 border-gray-200 rounded-xl shadow-lg pl-6 pr-6 pt-[33px] pb-[33px] ">
          <Image className="mb-[25px]" src={VectorImg} alt="" />
          <p className="text-base leading-[24px] italic pr-12 w-[320px] lg:w-[378px] text-gray-600 euclid font-normal">
            GrowMetra transformed how I sell my crops. Direct buyer access means
            better prices and no waiting for middlemen.
          </p>
          <div className="flex items-center gap-2 mt-8 euclid">
            <p className="bg-green-500 w-[41px] h-[41px] rounded-full font-bold flex justify-center items-center ">
              AA
            </p>
            <div>
              <p className="text-base font-normal leading-6 mb-2">
                Adebowale Adams
              </p>
              <div className="leading-6 font-[300px] text[14px]">
                <p>Organic Farmer</p>
                <p>Ogun State</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[380px] w-full border-2 border-gray-200 rounded-xl shadow-lg pl-6 pr-6 pt-[33px] pb-[33px] ">
          <Image className="mb-[25px]" src={VectorImg} alt="" />
          <p className="text-base leading-[24px] italic pr-5 w-[300px] lg:w-[378px] text-gray-600 euclid font-normal">
            Finally found a reliable source for fresh produce. The quality is
            exceptional and the farmers are verified.
          </p>
          <div className="flex items-center gap-2 mt-8 euclid">
            <p className="bg-green-500 w-[41px] h-[41px] rounded-full font-bold flex justify-center items-center ">
              WA
            </p>
            <div>
              <p className="text-base font-normal leading-6 mb-2">
                Wahab Adeleke
              </p>
              <div className="leading-6 font-[300px] text[14px]">
                <p>Restaurant Owner</p>
                <p>Ogun State</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[380px] w-full border-2 border-gray-200 rounded-xl shadow-lg pl-6 pr-6 pt-[33px] pb-[33px] ">
          <Image className="mb-[25px]" src={VectorImg} alt="" />
          <p className="text-base leading-[24px] italic pr-12 w-[320px] lg:w-[378px] text-gray-600 euclid font-normal">
            The transparency and direct connection with farmers has
            revolutionized our supply chain management.
          </p>
          <div className="flex items-center gap-2 mt-8 euclid">
            <p className="bg-green-500 w-[41px] h-[41px] rounded-full font-bold flex justify-center items-center ">
              JM
            </p>
            <div>
              <p className="text-base font-normal leading-6 mb-2">Joy Mary</p>
              <div className="leading-6 font-[300px] text[14px]">
                <p>Organic Farmer</p>
                <p>Ogun State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
