
import React from 'react';

interface StatItem {
  title: string;
  count: number;
}

const StatsCounter: React.FC = () => {
  const stats: StatItem[] = [
    { title: "Agriculture Products", count: 250 },
    { title: "Ongoing Projects", count: 120 },
    { title: "Satisfied Clients", count: 800 },
    { title: "Expert Farmers", count: 350 },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-4">
              <h3 className="text-xl font-bold">{stat.title}</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">{stat.count}+</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;