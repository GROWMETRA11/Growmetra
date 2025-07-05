import React from 'react'
import AboutHeroImgBg from '../../../app/assets/AboutHeroBG.svg'
import Image from 'next/image'
const AboutHero = () => {
  return (
    <section className='relative w-full lg:h-[509px] h-[466px] marope'>
      <Image className='absolute top-[60px] left-0 w-full h-full object-cover' src={AboutHeroImgBg} alt="" />
      <div className='absolute inset-0 z-20 text-white flex justify-center items-center mt-[65px]'>
        <div className='text-center w-full max-w-[889px]'>
          <h1 className='mb-[4px] font-bold text-[32px] leading-[48px] lg:text-[56px] lg:leading-[84px]'>About GrowMetra</h1>
          <p className='mb-[10px] font-bold text-[26px] leading-[39px] text-green-500 lg:text-[46px] lg:leading-[69px]'>Digitalizing the Agricultural Ecosystem</p>
          <p className='mb-6 font-normal lg:font-bold text-[18px] leading-[27px]  lg:text-[26px] lg:leading-[39px] lg:max-w-[889px] lg:w-full'>Empowering farmer’s, Securing market’s, Delivering fresh produce with
            trust.
          </p>
          <div className='lg:space-x-[41px] space-x-[30px]'>
            <a className='px-[6px] lg:px-[28px] py-[11px] bg-green-500 text-white rounded' href="">Register as Farmer</a>
            <a className='px-[6px] py-[11px] lg:px-[22.5px] lg:py-[11.5px] bg-white text-green-500 rounded' href="">Shop Fresh Produce</a>
          </div>
        </div>
      </div>
    </section>  )
}

export default AboutHero