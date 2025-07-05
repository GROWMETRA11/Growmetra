import offer1 from "../../../app/assets/offer1.svg";
import offer5 from "../../../app/assets/offer5.svg";
import offer2   from "../../../app/assets/offer2.svg";
import Image from "next/image";


const EdgeAndWhoWeServe = () => {
  const Serves = [
    {
      icon: offer1,
      title: "Verified Farmers Only",
      description:
        "Strict onboarding with help from cooperatives, extension officers, and community leaders.",
    },
  
    {
      icon: offer5,
      title: "Direct Produce Access",
      description:
        "Retailers and food businesses purchase directly from farms at competitive prices.",
    },
    {
      icon: offer2,
      title: "Real-Time Transparency",
      description:
        "Live prices, product availability, delivery timelines, and seasonal trend insights.",
    },
  
  ];

  const edges =[
    {
        id:1,
        text:'Full farmer verification before listing',
    },
    {
        id:2,
        text:'Cut out middlemen',
    },
    {
        id:3,
        text:'Escrow-protected payments',
    },
    {
        id:4,
        text:'Integrated logistics for safe delivery',
    },
    {
        id:5,
        text:'Transparent pricing and real-time data',
    },
    {
        id:6,
        text:'Built with Nigerian legal & compliance standards',
    }
  ]
  return (
    <>
    <section className="text-center w-full py-20 bg-green-100">
      <h2 className="font-bold text-center my-[65px] text-[32px] lg:text-[56px]">
        Our Edge
      </h2>

      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-10 px-4">
        {edges.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl h-[76px] w-full lg:w-[438px] gap-4 flex justify-start px-10  items-center text-left"
          >
            <div>
             <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 1.4578C13.553 1.16035 12.5452 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 9.95479 21.3396 8.94704 21.0422 8" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 8.5L11.5 12L20.5002 2" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
           
            <div className="text-sm w-[275px]">{offer.text}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="text-center w-full py-20 bg-white">
      <h2 className="font-bold text-center my-[65px] text-[32px] lg:text-[56px]">
        Who we Serve
      </h2>

      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-10 px-4">
        {Serves.map((offer, index) => (
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
    </>)
};

export default EdgeAndWhoWeServe;
