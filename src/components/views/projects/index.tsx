import React from "react";
/* import HeroBanner from "../about/HeroBanner"; */
import Image from "next/image";
import Link from "next/link";
import easyHarvesting from "@/../public/assets/projects/easy-harvesting.png";
import agriculturalFarming from "@/../public/assets/projects/agriculture-farming.png";
import ecologicalFarming from "@/../public/assets/projects/ecological-farming.png";
import organicSolutions from "@/../public/assets/projects/organic-solutions.png";
import freshProducts from "@/../public/assets/projects/fresh-products.png";
import healthyFood from "@/../public/assets/projects/healthy-food.png";

export default function ProjectView() {
  return (
    <div className="bg-gray-200 min-h-screen">
     {/*  <HeroBanner
        title="Projects"
        backgroundImage="/images/wheat-field-banner.jpg"
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "PROJECTS", url: "/projects" },
        ]}
      /> */}
      <div className="py-20 px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[easyHarvesting, agriculturalFarming, ecologicalFarming, organicSolutions, freshProducts, healthyFood].map((img, i) => (
          <div key={i} className="w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.src}
              alt={`Project image ${i + 1}`}
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
