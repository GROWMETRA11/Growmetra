import React from 'react'
import Shape from '../../app/assets/Shape.svg'
import Facebook from '../../app/assets/facebook-black.svg'
import Twitter from '../../app/assets/twitter-black.svg'
import Vimeo from '../../app/assets/vimeo-black.svg'
import Youtube from '../../app/assets/youtube-black.svg'
import Logo from '../../app/assets/GrowmetraLogo.svg'
import Image from 'next/image'


const Footer = () => {

  return (
    <>
    <footer className='relative'>
      <Image className='w-full min-h-[250px] relative' src={Shape} alt="" />
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[40px] gap-[10px] lg:max-w-[1074px] md:max-w-[720px] max-w-[300px] w-full bg-white lg:min-h-[200px] border-1 border-gray-200 shadow-lg rounded-lg lg:mx-auto mx-[50px] absolute lg:left-[150px] bottom-[30px] pt-2 lg:t-0 lg:-bottom-[70px]'>

        <h1 className='font-normal text-[18px] lg:text-[32px] leading-[100%]'>Subscribe Newsletters</h1>
            <div className='relative'>
              <input className=' pl-[5px] lg:pl-[24px] lg:w-[410px] w-[210px] rounded-lg outline-0 border-1 border-gray-400 py-[13px] lg:py-[26px] text-[12px] lg:text-[18px] mb-5 lg:mb-0 relative' type="email" placeholder=' Enter your email ' />
              <button className='bg-[#0081FE] cursor-pointer rounded-lg px-[5px] lg:px-[38px] py-[7px] lg:py-[22px] text-white absolute text-[10px] lg:text-[14px] top-[8px] right-[5px]'>Subscribe Now</button>
            </div>
      </div>
    </footer>

         <div className=' max-w-[1000px] w-full lg:mx-auto mt-[95px] '>
        <div className='flex lg:justify-between gap-[30px] flex-col lg:flex-row items-center'>
        <div>
          <ul className=' flex gap-[20px]'>
            <li>About Us</li>
            <li className='lg:pl-[50px]'>Our Missions</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className='flex items-center gap-[40px] '>
          <a href=""><Image src={Facebook} alt="" /></a>
          <a href=""><Image src={Twitter} alt="" /></a>
          <a href=""><Image src={Vimeo} alt="" /></a>
          <a href=""><Image src={Youtube} alt="" /></a>
        </div>
        </div>
        
        <div className='min-h-[1px] bg-gray-300 max-w-[1000px] mt-[51px]'></div>
        <div className='flex flex-col lg:flex-row justify-between items-center mt-[48px]'>
          <p>&copy; 2025 GrowMetra. All Rights Reserved.</p>
          <Image className='w-[150px]' src={Logo} alt="" />
          <div className='flex flex-col lg:gap-[20px] lg:flex-row'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer