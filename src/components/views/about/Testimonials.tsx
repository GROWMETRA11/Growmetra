
import React from 'react';
import Image from 'next/image';
import avatar from '../../../../public/assets/avatar.png'
import avatar2 from '../../../../public/assets/avatar2.png'
interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: any;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jacob Oladimeji",
      quote: "GrowMetra makes it easy for me to find and purchase organic produce directly from local farmers. The selection and convenience are fantastic!",
      image: avatar,
    },
    {
      id: 2,
      name: "Hannah Emmanuel",
      quote: "I love being able to support nearby farms through GrowMetra. The produce is fresher and more flavorful than what I get from supermarkets.",
      image: avatar2
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What They Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative w-[140px] h-[183px]">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill
                    className="rounded-[10px] object-cover"
                  />
                  <div className="absolute -right-1 bottom-[40%] w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#878680] mb-4">{testimonial.quote}</p>
                <h4 className="font-medium text-right">{testimonial.name}</h4>
                <div className="font-[300] text-right">customer</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;