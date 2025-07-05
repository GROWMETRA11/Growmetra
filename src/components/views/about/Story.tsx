import React from 'react'

const Story = () => {
  return (
    <section className="text-center w-full py-20 bg-gray-50/20">
      <h2 className="font-bold text-center my-[65px] text-[32px] lg:text-[56px]">
        Our Story
      </h2>

      <div className="max-w-[1007px] text-left mx-auto flex justify-center text-[#4B5563] items-center flex-wrap gap-10 px-4">
      <p className='text-base lg:text-lg'>
        At GrowMetra, we believe Africa's agriculture holds untapped potential to feed millions, create wealth, and build sustainable futures.
      </p>
      <p className='text-base lg:text-lg'>
        But for decades, farmers have struggled with middlemen exploitation, price fluctuations, delayed payments, and access to reliable markets.
      </p>
        <div className='h-[187px] max-w-[1007px] p-[42px] bg-[#F0FDF4] text-left border-l-4 rounded-l-2xl border-green-800'>
<div className='text-lg lg:text-[22px] font-bold'>We started GrowMetra with a bold mission:</div>
<div className='text-sm lg:text-[18px] mt-4'>To create a secure, transparent, and direct agricultural marketplace where farmers and buyers can transact confidently.
</div>
        </div>

         <p className='text-base lg:text-lg'>
        By combining digital technology with local expertise, we're bridging the gap between Nigeria's hard-working farmers and the growing demand for fresh, quality produce — safely, efficiently, and fairly.
      </p>
      </div>
    </section>
  )
}

export default Story;