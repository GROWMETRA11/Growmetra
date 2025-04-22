
import React from 'react';
import Image from 'next/image';
import farmer from '../../../../public/assets/div.master-team-1.png'
import farmer2 from '../../../../public/assets/div.master-team-2.png'
import farmer3 from '../../../../public/assets/div.master-team.png'

interface Farmer {
  id: number;
  name: string;
  image: any;
  specialty?: string;
}

const FarmersShowcase: React.FC = () => {
  const farmers: Farmer[] = [
    {
      id: 1,
      name: "Adedeyo Michael",
      image: farmer,
      specialty: "Organic Vegetables"
    },
    {
      id: 2,
      name: "Mary Badmus",
      image: farmer2,
      specialty: "Fruit Orchards"
    },
    {
      id: 3,
      name: "Taiwo Shobanke",
      image: farmer3,
      specialty: "Sustainable Farming"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Meet Our Farmers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="group relative overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <Image 
                  src={farmer.image} 
                  alt={farmer.name} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
                <h3 className="font-semibold text-lg">{farmer.name}</h3>
                {farmer.specialty && (
                  <p className="text-gray-600 text-sm">{farmer.specialty}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmersShowcase;