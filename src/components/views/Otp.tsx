import React, { useState, useEffect } from "react";
import OtpImage from "../../app/assets/OtpFrame 2147227444.svg";
import ChangeOtp from "../../app/assets/elements.svg";
import Image from "next/image";

const Otp = () => {

// Timer
const [count, setCount] = useState(10)
useEffect(() => {
  let timer;
  count > 0 && setTimeout(() => setCount(count - 1), 1000);
  
  return () => clearTimeout(timer)
}, [count])

  return (
    <section className="bg-opacity-50 bg-black/50 w-full mx-auto inset-0 z-50 fixed px-[30px] lg:px-[320px] py-[137px] lg:py-[121.5px]">
      <div className="rounded-lg max-w-[640px] w-full py-[17.34px] lg:py-[37px] px-[38.91px] lg:px-[83px] bg-white mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image className="mb-4" src={OtpImage} alt="" />
          <h2 className="font-normal text-sm lg:text-2xl leading-[18px] lg:leading-[36px] mb-[3.75px] lg:mb-2">
            Enter OTP to Continue
          </h2>
          <p className="font-normal text-center text-sm lg:text-base leading-[15px] lg:leading-[24px] mb-[7.5px] lg:mb-4">
            We sent a one-time code to your email
          </p>
          {count !== 0  && <p className="font-normal text-sm lg:text-base leading-[24px] mb-[15px] lg:mb-8">
            It expires in <span className="text-green-500">{count}</span>
          </p>}
          <div className="flex gap-2 mb-[23.44px] lg:mb-12.5">
            <input
              className="w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
            <input
              className="w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
            <input
              className="w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
            <input
              className="w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
            <input
              className="w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
            <input
              className=" w-[22.5px] lg:w-[48px] lg:h-[56px] h-[26.25px] rounded-[3.75px] lg:rounded-[8px] border-1 border-neutral-300 outline-green-500 text-center"
              type="text"
            />
          </div>
          <a
            className="py-[3.75px] lg:py-2 px-[69.59px] lg:px-[137.5px] text-white bg-green-500 rounded-[3.75px] lg:rounded-[8px] leading-[36px] font-normal text-sm lg:text-2xl mb-[15px]  lg:mb-8"
            href=""
          >
            Verify & Continue
          </a>
          {count === 0 && <>
          <p className="text-gray-600 text-sm lg:text-base leading-[15px] lg:leading-[24px] font-normal mb-[7.5px] lg:mb-4">
            Didn’t get the code?
          </p>
          <a
            className="text-green-600 text-sm lg:text-base leading-[15px] lg:leading-[24px] font-normal mb-[11.25px] lg:mb-6"
            href="/"
          >
            Resend OTP
          </a>
          </> }

          <a href="/signup" className="flex gap-[7.5px] lg:gap-4 mb-[18.75px] lg:mb-10">
            <Image src={ChangeOtp} alt="" />
            <p className="text-gray-600 text-sm lg:text-base leading-[15px] lg:leading-[24px] font-normal">
              Change email
            </p>
          </a>
          <button className="p-[4px] text-sm leading-[21px] font-normal bg-green-500 text-white rounded-[8px] mb-[7.5px] lg:mb-4">
            Verified by GrowMetra
          </button>
          <p className="text-gray-600 text-[12px] leading-[10px] lg:leading-[21px] font-normal">
            🔒 Escrow Protected • Secure Platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Otp;
