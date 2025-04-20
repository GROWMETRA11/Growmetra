import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import Logo from "./logo";
import ExploreIcon from "./exploreIcon";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Footer() {
  // Navigation links data
  const exploreLinks = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Our Projects", href: "/projects" },
    { title: "Meet the Farmers", href: "/farmers" },
    { title: "Latest News", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  // News data
  const newsItems = [
    {
      title: "Bringing Food Production Back To Cities",
      date: "April 16, 2025",
      href: "/news/bringing-food-production-back-to-cities",
    },
    {
      title: "The Future of Farming, Smart Irrigation Solutions",
      date: "April 16, 2025",
      href: "/news/future-of-farming-smart-irrigation",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: "twitter",
      href: "https://twitter.com/growmetra",
      label: "Twitter",
    },
    {
      icon: "facebook",
      href: "https://facebook.com/growmetra",
      label: "Facebook",
    },
    {
      icon: "pinterest",
      href: "https://pinterest.com/growmetra",
      label: "Pinterest",
    },
    {
      icon: "instagram",
      href: "https://instagram.com/growmetra",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-[#24231D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo />
            </div>

            <h2 className="text-2xl font-light">
              <span className="text-gray-400">"Harvest Better</span>
              <br />
              <span className="text-gray-400">connections"</span>
            </h2>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon === "twitter" && (
                    <span className="text-sm">𝕏</span>
                  )}
                  {social.icon === "facebook" && <span>f</span>}
                  {social.icon === "pinterest" && <span>P</span>}
                  {social.icon === "instagram" && <span>I</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Explore
              <div className="flex gap-2 mt-2">
              <div className="w-10 h-1 bg-green-500 rounded-2xl"></div>
              <div className="w-1 h-1 bg-green-500 rounded-2xl"></div>
              </div>
            </h3>
            
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ExploreIcon
                  width={12} />
                  <Link
                    href={link.href}
                    className="hover:text-green-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              News
              <div className="flex gap-2 mt-2">
              <div className="w-10 h-1 bg-green-500 rounded-2xl"></div>
              <div className="w-1 h-1 bg-green-500 rounded-2xl"></div>
              </div>
            </h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <Link
                    href={item.href}
                    className="block hover:text-green-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                  <p className="text-[#EEC044] text-sm">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact
              <div className="flex gap-2 mt-2">
              <div className="w-10 h-1 bg-green-500 rounded-2xl"></div>
              <div className="w-1 h-1 bg-green-500 rounded-2xl"></div>
              </div>
            </h3>
            <div className="space-y-4">
  <div className="flex items-start">
    <Phone className="text-[#24231D] fill-[#EEC044] mr-2" />
    <Link
      href="tel:07011194334"
      className="hover:text-green-500 transition-colors"
    >
      07011194334
    </Link>
  </div>

  <div className="flex items-start">
    <Mail className="text-[#24231D] fill-[#EEC044] mr-2" />
    <Link
      href="mailto:needhelp@company.com"
      className="hover:text-green-500 transition-colors"
    >
      needhelp@company.com
    </Link>
  </div>

  <div className="flex items-start">
    <MapPin className="text-[#EEC044] fill-[#EEC044] mr-2" />
    <address className="not-italic">
      No 5A, Bolajoko Oshun street, Ikeja Lagos
    </address>
  </div>


              <form className="mt-6 flex rounded-2xl">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-white text-black px-4 py-2 flex-grow text-sm"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 hover:bg-green-600 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© All Copyright 2025</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 text-sm hover:text-green-500 transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/privacy"
              className="text-gray-400 text-sm hover:text-green-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
