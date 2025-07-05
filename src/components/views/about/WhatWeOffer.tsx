import Image from "next/image";
import offer1 from "../../../app/assets/offer1.svg";
import offer2 from "../../../app/assets/offer2.svg";
import offer3 from "../../../app/assets/offer3.svg";
import offer4 from "../../../app/assets/offer4.svg";
import offer5 from "../../../app/assets/offer5.svg";

const WhatWeOffer = () => {
  const Offers = [
    {
      icon: offer1,
      title: "Verified Farmers Only",
      description:
        "Strict onboarding with help from cooperatives, extension officers, and community leaders.",
    },
    {
      icon: offer5,
      title: "Buyer Protection via Escrow",
      description:
        "Buyers' funds are held securely until produce quality is confirmed.",
    },
    {
      icon: offer2,
      title: "Direct Produce Access",
      description:
        "Retailers and food businesses purchase directly from farms at competitive prices.",
    },
    {
      icon: offer3,
      title: "Real-Time Transparency",
      description:
        "Live prices, product availability, delivery timelines, and seasonal trend insights.",
    },
    {
      icon: offer4,
      title: "Simplified Logistics",
      description:
        "GrowMetra manages delivery with temperature-safe, efficient transport.",
    },
  ];
  return (
    <section className="text-center w-full py-20 bg-white">
      <h2 className="font-bold text-center my-[65px] text-[32px] lg:text-[56px]">
        What we Offer
      </h2>

      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-10 px-4">
        {Offers.map((offer, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl h-[257px] w-full lg:w-[362px] py-6 space-y-4 flex flex-col justify-center items-center text-center"
          >
            <div>
              <Image src={offer.icon} alt={index + " Offer"} />
            </div>
            <div className="text-lg w-[275px]">{offer.title}</div>
            <div className="text-sm w-[275px]">{offer.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
