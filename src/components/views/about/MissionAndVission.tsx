import React from "react";

const MisssionAndVission = () => {
  const contents = [
    {
      id: 1,
      text: "Empower Nigerian farmers to earn fairly",
    },
    {
      id: 2,
      text: "Simplify agricultural trade through technology",
    },
    {
      id: 3,
      text: "Provide risk-free transactions for buyers and investors",
    },
    {
      id: 4,
      text: "Build trust and transparency in Africa's food supply chain",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row max-[1440px] min-h-[358px] w-full justify-center lg:gap-[116px]">
      <div className=" max-w-[566px] mt-[49px] text-center lg:text-left">
        <h3 className=" font-bold text-[32px] lg:text-[46px] leading-[69px] mb-6 ">Our Vision</h3>
        <p className="font-medium text-[18px] leading-[27px]">
          To build the most trusted agricultural trading ecosystem in Africa —
          empowering farmers, reducing food waste, stabilizing prices, and
          delivering quality produce to consumers everywhere.
        </p>
      </div>
      <div>
        <h3 className=" font-bold text-[32px] lg:text-[46px] mt-[60px] text-center lg:text-left leading-[69px] lg:mb-6">Our Mission</h3>
        <div>
          {contents.map((list, index) => (
            <div className="flex items-center gap-2 pb-3 px-6 m-auto text-[14px] lg:text-[18px]" key={index}>
              <div>
                 <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 1.4578C13.553 1.16035 12.5452 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 9.95479 21.3396 8.94704 21.0422 8"
              stroke="#16A34A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 8.5L11.5 12L20.5002 2"
              stroke="#16A34A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
              </div>
              <div className="">{list.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MisssionAndVission;
