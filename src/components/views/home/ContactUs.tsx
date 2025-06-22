import React from 'react'

const ContactUs = () => {
  return (
    <section className='mx-3'>
        <div className='max-w-[1326px] w-full mx-auto flex mt-[113px] mb-[99px]'>
            <div className='w-full hidden lg:block h-[500px]'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013522.9353614125!2d2.9906519166784493!3d7.117427144478357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b0deeeb1087cb%3A0xae67d82f51409ce8!2sOgun%20State!5e0!3m2!1sen!2sng!4v1749944529952!5m2!1sen!2sng" className='w-full h-full border-none'>
              </iframe>
            </div>
            <div className='w-full flex flex-col lg:justify-start justify-center items-center bg-white'>
                <h3 className='text-6 leading-[36px] text-[#EEC044] font-normal'>Contact us</h3>
                <h1 className='text-[24px] lg:text-[48px] font-bold leading-[57.6px]'>Write a Message</h1>
                <form className='flex flex-col lg:justify-start justify-center items-center lg:items-start' action="">
                   <div className='space-x-5 mt-[20px]'>
                     <input className='py-5 px-7.5 w-full outline-0 border-1 rounded-lg border-gray-500' type="text" placeholder='Name' />
                     <input className='py-5 px-7.5 w-full mt-[10px] outline-0 border-1 rounded-lg border-gray-500' type="text" placeholder='Email Adress'/>
                   </div>
                    <textarea className='pt-4 pl-7.5 w-full resize-none rounded-lg mt-[20px] h-[200px] border-1 border-gray-400 outline-0' name="message" id="message" placeholder='Write a Message'></textarea>
                <button className='px-[50px] py-[15px] rounded-lg text-white bg-green-500 mt-4'>Send a Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs