"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OtpImage from "../../app/assets/OtpFrame 2147227444.svg";
import ChangeOtp from "../../app/assets/elements.svg";
import { AuthApi } from "@/app/utils";
import { useRouter } from "next/navigation";
import { useToast } from "../toast/ToastContext";

interface OtpProps {
  email: string;
}

const Otp = ({ email }: OtpProps) => {

  const [count, setCount] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
const router=useRouter()
const { showToast } = useToast();
  const handleChange = async(index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      const otpCode = newOtp.join("");

setIsVerifying(true)
try{
  await AuthApi.verifyOTP(email,otpCode)
  
  showToast("Successful!",'success')
router.push('/dashboard')
      }
      catch(error:any){
         showToast(error.message || "Error, try again ",'error')

      }
      finally{
        setIsVerifying(false)
      }

  }
}

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [count]);

  const handleVerify = () => {
    if (otp.length < 6) return alert("Please enter full 6-digit OTP");
    setIsVerifying(true);   
  };

  return (
    <section className="bg-opacity-50 bg-black/50 w-full mx-auto inset-0 z-50 fixed px-[30px] lg:px-[320px] py-[137px] lg:py-[121.5px]">
      <div className="rounded-lg max-w-[640px] w-full py-[17.34px] lg:py-[37px] px-[38.91px] lg:px-[83px] bg-white mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image className="mb-4" src={OtpImage} alt="" />
          <h2 className="font-normal text-sm lg:text-2xl leading-[18px] lg:leading-[36px] mb-[3.75px] lg:mb-2">
            Enter OTP to Continue
          </h2>
          <p className="font-normal text-center text-sm lg:text-base leading-[15px] lg:leading-[24px] mb-[7.5px] lg:mb-4">
            We sent a one-time code to your email: <strong>{email}</strong>
          </p>
          {count !== 0 && (
            <p className="font-normal text-sm lg:text-base leading-[24px] mb-[15px] lg:mb-8">
              It expires in <span className="text-green-500">{count}</span>
            </p>
          )}

          {/* OTP Input */}
          <div className="mb-[23.44px] lg:mb-12.5">
            <div className="flex gap-2 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
       ref={(el) => {
  inputRefs.current[index] = el;
}}

          className="w-10 h-12 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      ))}
    </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="py-[3.75px] lg:py-2 px-[69.59px] lg:px-[137.5px] text-white bg-green-500 rounded-[3.75px] lg:rounded-[8px] leading-[36px] font-normal text-sm lg:text-2xl mb-[15px]  lg:mb-8"
          >
            {isVerifying ? "Verifying..." : "Verify & Continue"}
          </button>

          {count === 0 && (
            <>
              <p className="text-gray-600 text-sm lg:text-base leading-[15px] lg:leading-[24px] font-normal mb-[7.5px] lg:mb-4">
                Didn’t get the code?
              </p>
              <a
                className="text-green-600 text-sm lg:text-base leading-[15px] lg:leading-[24px] font-normal mb-[11.25px] lg:mb-6"
                href="#"
                onClick={() => {
                  setCount(10);
                  alert("OTP resent to your email");
                }}
              >
                Resend OTP
              </a>
            </>
          )}

          <a
            href="/signup"
            className="flex gap-[7.5px] lg:gap-4 mb-[18.75px] lg:mb-10"
          >
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
