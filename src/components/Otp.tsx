import React from 'react'
import OtpImage from '../app/assets/OtpFrame 2147227444.svg'
import ChangeOtp from '../app/assets/elements.svg'
import Image from 'next/image'

const Otp = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-[320px] py-[121.5px] bg-gray-300'>
        <div className='rounded-lg max-w-[640px] h-[706px] py-[37px] px-[83px] bg-white mx-auto'>
            <div>
                <Image src={OtpImage} alt="" />
                <h2>Enter OTP to Continue</h2>
                <p>We sent a one-time code to your email/phone. +234XXXXXXXX</p>
                <div className='flex gap-2 flex-wrap'>
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                    <input className='w-[48px] h-[56px] rounded-[8px] border-1 border-natural-300 text-center' type="text" />
                </div>
                <a className='w-[474px] h-[52px] py-2 px-[137.5px] text-white bg-green-500 rounded-[8px]' href="">Verify & Continue</a>
                <p>Didn’t get the code?</p>
                <a href="">RESEND OTP</a>
            </div>
            <div className='flex gap-4'>
                <Image src={ChangeOtp} alt="" />
                <p>Change email/phone number</p>
            </div>
            <button className='p-[4px] bg-green-500 text-white rounded-[8px] '>Verified by GrowMetra</button>

        </div>
    </section>
  )
}

export default Otp