
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import farmerImg from "@/../public/assets/about/about-01.webp.png"

const AgricultureMarket: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-green-500/20 absolute w-24 h-24 -left-6 -top-6"></div>
              <Image 
                src={farmerImg.src} 
                alt="Farmers working" 
                width={500} 
                height={400} 
                className="object-cover relative z-10"
              />
              <div className="relative z-10 -mt-16 ml-24">
                <Image 
                  src="/images/person-farming.jpg" 
                  alt="Person farming" 
                  width={250} 
                  height={200} 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
          <span className="block font-['Covered_By_Your_Grace',_cursive] text-base md:text-xl lg:text-[24px] text-[#F9C74F] leading-tight">
          Get to Know Us
                </span>
            <h2 className="text-[48px] font-bold mb-4 max-w-[800px] w-full">The Best Agriculture Market</h2>
            
            <p className="text-green-600 mb-4 max-w-[700px] w-full">
              GrowMetra empowers farmers to grow, market, and sell quality organic produce.
            </p>
            
            <p className="text-gray-600 mb-6 max-w-[500px] w-full">
              GrowMetra connects farmers to diverse agricultural markets, including local farmer's markets, online sales platforms, and contracts with restaurants and grocery stores, including international outlets.
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4375 14.6744L0.234375 9.47125C0.078125 9.315 0 9.1275 0 8.90875C0 8.69 0.078125 8.5025 0.234375 8.34625L1.35938 7.20563C1.51562 7.04938 1.70573 6.97125 1.92969 6.97125C2.15365 6.97125 2.34375 7.04938 2.5 7.20563L6 10.7056L13.5 3.20563C13.6562 3.04938 13.8464 2.97125 14.0703 2.97125C14.2943 2.97125 14.4844 3.04938 14.6406 3.20563L15.7656 4.34625C15.9219 4.5025 16 4.69 16 4.90875C16 5.1275 15.9219 5.315 15.7656 5.47125L6.5625 14.6744C6.40625 14.8306 6.21875 14.9088 6 14.9088C5.78125 14.9088 5.59375 14.8306 5.4375 14.6744Z" fill="#C5CE38"/>
</svg>

                <span>Direct-to-consumer sales through online platforms and local farmer's markets.</span>
              </li>
              <li className="flex items-start gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4375 14.6744L0.234375 9.47125C0.078125 9.315 0 9.1275 0 8.90875C0 8.69 0.078125 8.5025 0.234375 8.34625L1.35938 7.20563C1.51562 7.04938 1.70573 6.97125 1.92969 6.97125C2.15365 6.97125 2.34375 7.04938 2.5 7.20563L6 10.7056L13.5 3.20563C13.6562 3.04938 13.8464 2.97125 14.0703 2.97125C14.2943 2.97125 14.4844 3.04938 14.6406 3.20563L15.7656 4.34625C15.9219 4.5025 16 4.69 16 4.90875C16 5.1275 15.9219 5.315 15.7656 5.47125L6.5625 14.6744C6.40625 14.8306 6.21875 14.9088 6 14.9088C5.78125 14.9088 5.59375 14.8306 5.4375 14.6744Z" fill="#C5CE38"/>
</svg>

                <span>Wholesale contracts with restaurants, grocery stores, and specialty food retailers.</span>
              </li>
              <li className="flex items-start gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4375 14.6744L0.234375 9.47125C0.078125 9.315 0 9.1275 0 8.90875C0 8.69 0.078125 8.5025 0.234375 8.34625L1.35938 7.20563C1.51562 7.04938 1.70573 6.97125 1.92969 6.97125C2.15365 6.97125 2.34375 7.04938 2.5 7.20563L6 10.7056L13.5 3.20563C13.6562 3.04938 13.8464 2.97125 14.0703 2.97125C14.2943 2.97125 14.4844 3.04938 14.6406 3.20563L15.7656 4.34625C15.9219 4.5025 16 4.69 16 4.90875C16 5.1275 15.9219 5.315 15.7656 5.47125L6.5625 14.6744C6.40625 14.8306 6.21875 14.9088 6 14.9088C5.78125 14.9088 5.59375 14.8306 5.4375 14.6744Z" fill="#C5CE38"/>
</svg>

                <span>Export opportunities to international markets seeking high-quality organic produce.</span>
              </li>
            </ul>
            
            <Link href="/services">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition duration-300">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureMarket;