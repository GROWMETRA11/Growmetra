import React from "react";
import Image from "next/image";
import Link from "next/link";

// Example images and icons (you should replace these with actual imports)
const projects = [
  {
    title: "Agriculture Products",
    image: "/assets/services/agriculture-products.png",
    icon: "/assets/services/servicon1.png",
    link: "#",
  },
  {
    title: "Organic Products",
    image: "/assets/services/organic-products.png",
    icon: "/assets/services/servicon2.png",
    link: "#",
  },
  {
    title: "Fresh Vegetables",
    image: "/assets/services/fresh-vegetables.png",
    icon: "/assets/services/servicon3.png",
    link: "#",
  },
  {
    title: "Dairy Products",
    image: "/assets/services/agriculture-products.png",
    icon: "/assets/services/servicon3.png",
    link: "#",
  },
];

export default function ProjectCards() {
  return (
    <div className="bg-gray-200 py-16 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="relative group">
            {/* Background Image */}
            <div className="h-72 overflow-hidden rounded-t-xl relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Body (Overlapping) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] bg-white rounded-xl shadow-md text-center py-6 px-4 z-10">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 relative">
                  <Image src={project.icon} alt="icon" fill className="object-contain" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

              {/* Read More Button */}
              <Link
                href={project.link}
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
