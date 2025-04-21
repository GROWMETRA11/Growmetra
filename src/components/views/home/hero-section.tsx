import Image from "next/image";
import Link from "next/link";
import { MapPin, Package, Truck } from "lucide-react";
import heroBg from "../../../../public/assets/home/hero-img.png";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className=" overflow-hidden" style={{
        background: `url(${heroBg.src}) no-repeat center / cover`
      }}>
        {/* Content Overlay */}
        <div
          className=" inset-0 bg-black/30 py-24 md:py-32"
         
        >
          <div className="container mx-auto h-full px-4 md:px-6 flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="mb-6">
                <span className="block font-['Covered_By_Your_Grace',_cursive] text-4xl md:text-5xl lg:text-6xl text-[#F9C74F] leading-tight">
                  Agriculture
                </span>
                <span className="block font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
                  & Organic Market
                </span>
              </h1>

              <Link
                href="/shop"
                className="inline-block bg-[#5CB85C] hover:bg-[#4CAE4C] text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar - Overlapping Section */}
      <div className="relative -mt-8 md:-mt-12 z-10 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Return Policy */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F1F9F1] rounded-full flex items-center justify-center text-[#5CB85C]">
                  <Package size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Return Policy</h3>
                  <p className="text-sm text-gray-600">Money Back Guarantee</p>
                </div>
              </div>

              {/* Free Shipping */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F1F9F1] rounded-full flex items-center justify-center text-[#5CB85C]">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Free Shipping</h3>
                  <p className="text-sm text-gray-600">
                    On All Orders Over $25,000
                  </p>
                </div>
              </div>

              {/* Store Locator */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F1F9F1] rounded-full flex items-center justify-center text-[#5CB85C]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Store Locator</h3>
                  <p className="text-sm text-gray-600">
                    Find Your Nearest Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section Placeholder */}
      <div className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-4">
                <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
                <h3 className="font-medium">Organic Product {item}</h3>
                <p className="text-[#5CB85C] font-bold mt-2">$24.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
