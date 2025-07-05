import React from "react";
import HeroImg from "../../../app/assets/HeroImg1.png";
import TradeImg from "../../../app/assets/trade.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mx-auto">
      <div className="max-w-[1320px] mx-auto p-5 lg:pt-[132px] pt-[90px] lg:flex lg:justify-between gap-[84px] lg:text-left text-center">
        <div className="">
          <h1 className="lg:text-[56px] text-[28px] leading-[42px] lg:leading-[84px] font-bold">
            Connecting <span className="text-green-500">Farms</span> to{" "}
            <span className="text-green-500">Markets</span>
          </h1>
          <p className="max-w-[586px] w-full px-5 lg:px-0 mx-auto lg:mx-0  mt-6 lg:text-lg text-base  font-medium lg:leading-6.75">
            Empowering farmers and enabling buyers through direct connections.
            Build transparency, drive trade, and foster growth across local and
            national markets.
          </p>
          <div className="flex lg:flex-row flex-col gap-6 lg:justify-start justify-center items-center mt-8">
            <button className="p-2 rounded-lg bg-green-500 text-white">
              Get Started a a Farmer
            </button>
            <button className="p-2 rounded-lg bg-green-500 text-white">
              Explore the Market place
            </button>
          </div>
          <div className="mt-7 lg:flex lg:flex-row hidden  flex-col items-center justify-center lg:justify-start lg:gap-8 gap-2">
            <span>
              <h2 className="text-green-500 text-3xl  text-center font-bold leading-12">
                1000+
              </h2>
              <p className="text-gray-400">Active Farmers</p>
            </span>
            <span>
              <h2 className="text-green-500 text-3xl text-center font-bold leading-12">
                500+
              </h2>
              <p className="text-gray-400">Verified Buyers</p>
            </span>
            <span>
              <h2 className="text-green-500 text-3xl  text-center font-bold leading-12">
                #2M+
              </h2>
              <p className="text-gray-400 text-base font-normal leading-6">
                Trade Volume
              </p>
            </span>
          </div>
        </div>

        <div className="relative lg:w-[688.3px] mx-auto lg:mx-0 w-[332px] lg:min-h-[456px] pt-2 mt-2">
          <Image className="rounded-xl mx-auto" src={HeroImg} alt="Hero Image" />
          <Image
            className=" absolute -bottom-20  left-[22px] lg:bottom-[-20px] lg:left-[-50px]"
            src={TradeImg}
            alt="Trade Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
