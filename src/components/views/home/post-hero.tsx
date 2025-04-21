import type React from "react";
import Image from "next/image";
import about1 from "../../../../public/assets/home/about1.png";

// Define the service item type
type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

export default function PostHeroSection() {
  // Service items data
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: "Agriculture Products",
      description:
        "GrowMetra supports the sale of a wide range of agricultural products, including fruits, vegetables, grains, livestock, and specialty crops.",
      image: about1.src,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 4V2" />
          <path d="M4 12H2" />
          <path d="M12 20v2" />
          <path d="M20 12h2" />
          <path d="M18.364 5.636l1.414-1.414" />
          <path d="M5.636 5.636L4.222 4.222" />
          <path d="M18.364 18.364l1.414 1.414" />
          <path d="M5.636 18.364L4.222 19.778" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Organic Products",
      description:
        "provides a dedicated platform for organic farmers to showcase their certified sustainable produce and connect with consumers seeking high-quality, eco-friendly agricultural options.",
      image: about1.src,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M7 22V9.5a3.5 3.5 0 0 1 7 0V22" />
          <path d="M22 13a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Dairy Products",
      description:
        "facilitates the sale of dairy products like milk, cheese, and yogurt, enabling dairy farmers to expand their customer base and negotiate fair prices for their high-quality goods.",
      image: about1.src,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M10 3v3" />
          <path d="M14 3v3" />
          <path d="M14 12v6" />
          <path d="M10 12v6" />
          <path d="M4 5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" />
          <path d="M18 5v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background pattern at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-repeat-x opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=100&width=500')",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-['Covered_By_Your_Grace',_cursive] text-xl text-[#F9C74F] mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">
            What We Offer
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image container with relative positioning for the icon */}
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-[#C9D94A] rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#333333] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
