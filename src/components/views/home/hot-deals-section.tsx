"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import grapes from "../../../../public/assets/home/grapes.png";
import onions from "../../../../public/assets/home/onions.jpg.png";
import guava from "../../../../public/assets/home/guava.png";
import tomatoes from "../../../../public/assets/home/tomatoes.png";

// Product data
const products = [
  {
    id: 1,
    name: "Grapes",
    image: grapes,
    price: "₦10,000",
    rating: 5,
  },
  {
    id: 2,
    name: "Onions",
    image: onions,
    price: "₦10,000",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomatoes",
    image: tomatoes,
    price: "₦10,000",
    rating: 5,
  },
  {
    id: 4,
    name: "Guava",
    image: guava,
    price: "₦10,000",
    rating: 5,
  },
];

export default function HotDealsSection() {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-medium mb-2">Special Offers</p>
          <h2 className="text-4xl font-bold text-gray-900">Today's Hot Deal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-4 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          className=" h-full w-full"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-green-600 font-medium">{product.price}</p>
      </div>
    </div>
  );
}
