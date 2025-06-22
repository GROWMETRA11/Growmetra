import React from "react";
import AboutImg from "../../../app/assets/AboutImg.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-[1326px] w-full mx-auto min-h-[617px] mt-[168px]">
      <div className="max-w-[922px] w-full mx-auto text-center mb-6">
        <h1 className="mb-6 mt-[30px] font-bold lg:text-[38px] text-[28px] leading-[57px]">
          About GrowMetra
        </h1>
        <p className="font-bold lg:text-[22px] text-base leading-[33px] text-gray-500 pb-12">
          GrowMetra is revolutionizing agriculture by creating direct
          connections between farmers and buyers, eliminating intermediaries and
          ensuring fair pricing for quality produce.
        </p>
      </div>
      <div className="flex lg:flex-row mx-3 text-center lg:text-left flex-col gap-7.5">
        <Image src={AboutImg} alt="Nature" />
        <div className="max-w-[545px] w-full mx-auto">
          <h2 className="font-bold text-xl leading-[22px] mb-2.5">
            Our Mission
          </h2>
          <p className="font-normal text-gray-600 text-base leading-6 mb-8 pr-2">
            GrowMetra connects farmers directly with buyers, eliminating
            intermediaries and ensuring fair pricing for quality produce.
          </p>
          <p className="font-normal text-gray-600 text-base leading-6 lg:mb-16 mb-8 pr-2">
            Our platform promotes transparency through verified farmer profiles,
            product quality assurance, and secure transaction systems.
          </p>
          <p className="font-normal text-gray-600 text-base leading-6 pr-2">
            We're building a sustainable marketplace where farmers can showcase
            their products to a wide network of verified buyers, from
            restaurants to grocery chains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
