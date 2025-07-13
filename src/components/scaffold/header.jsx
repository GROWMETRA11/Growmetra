"use client"
import Image from "next/image";
import Logo from "../../app/assets/GrowmetraLogo.svg";
import React, { useState } from "react";

const Header = () => {
  const list = [{name: "About", link: "/about"},
                {name: "How it works", link: "/how it works"},
                {name: "Benefits", link: "/benefits"},
                {name: "Contacts", link: "/contacts"}
  ];
  const navBar = list.map((nav, index) => <li key={index}> <a href={nav.link}>{nav.name}</a> </li> );

  const [menu, setMenu] = useState(false);

  function handleToggle() {
    setMenu(!menu);
  }

  return (
    <header className="w-full bg-white fixed z-50">
      <nav className="max-w-[1320px] w-full mx-auto bg-white">
        <div className="mt-0.5  flex justify-between items-center mr-4">
          <a href="/"><Image src={Logo} alt="Growmetra Logo" /></a>
          <ul>
            <a
              className="lg:flex gap-6 list-none text-4.5 font-medium leading-6.75 hidden"
              href=""
            >
              {navBar}
            </a>
          </ul>
          <div className="lg:flex items-center gap-7 hidden">
            <a href="/login" className="w-16 h-10 font-semibold text-3.5 leading-5.25 flex justify-center items-center rounded">
              Login
            </a>
            <a href="/signup" className="w-20 h-10 font-extrabold text-3.5 leading-5.25 flex justify-center items-center text-white bg-green-500 rounded">
              Sign Up
            </a>
          </div>
          <div className="lg:hidden" onClick={handleToggle}>
            {!menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        {menu && (
          <div className="lg:hidden list-none flex flex-col items-center gap-5 h-screen z-50">
            {navBar}
            <div className=" items-center gap-7 lg:hidden">
              <a href="/login" className="w-16 h-7 font-semibold mb-3 cursor-pointer  flex justify-center items-center rounded">
                Login
              </a>
              <a href="/signup" className="w-20 h-7 font-extrabold cursor-pointer flex justify-center items-center text-white bg-green-500 rounded">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
