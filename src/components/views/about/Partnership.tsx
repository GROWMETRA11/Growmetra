import React from 'react'
import emailLogo from '../../../app/assets/mdi-light_email.svg'
import phoneLogo from '../../../app/assets/material-symbols-light_call-outline.svg'
import mapLogo from '../../../app/assets/mynaui_location.svg'
import Image from 'next/image'

const Partnership = () => {


  return (
    <section className='bg-green-500 mt-[65px] flex flex-col justify-center items-center '>
        <div className='text-center font-bold text-white pt-[60px]'>
            <h3 className='text-[32px] lg:text-[46px] mb-4 leading-[48px] w-[318px] lg:w-full m-auto lg:leading-[69px]'>
                Ready to Transform Agriculture Together?
            </h3>
            <h5 className='text-[22px] lg:text-[32px] leading-[33px] lg:leading-[48px]'>
                Join thousands of farmers, buyers, and partners already using GrowMetra
            </h5>
        </div>

        <div className='mt-[48px] flex flex-col lg:flex-row justify-center items-center text-white gap-[40px] lg:gap-[130px]'>
            <div className='flex flex-col justify-center items-center'>
                <Image src={emailLogo} alt="" />
                <p>Email</p>
                <a href="">support@growmetra.com</a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image src={phoneLogo} alt="" />
                <p>Phone</p>
                <a href="">+234 XXXXXXXXX</a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image src={mapLogo} alt="" />
                <p>Office</p>
                <a href="">Remote</a>
            </div>
        </div>
        <a className='px-6 py-2 bg-white text-green-600 rounded-[8px] mt-[46px] mb-[60px]' href="">Let's Talk Partneship</a>
    </section>
  )
}

export default Partnership