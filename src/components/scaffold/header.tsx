"use client"

// import Logo from "../../app/assets/logo.png"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react"
import Logo from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Navigation data with dropdowns
  const navItems = [
    {
      name: "Home",
      path: "/",
      // hasDropdown: true,
      // dropdownItems: [
      //   { name: "Home 1", path: "/" },
      //   { name: "Home 2", path: "/home-2" },
      //   { name: "Home 3", path: "/home-3" },
      // ],
    },
    {
      name: "About",
      path: "/about",
      hasDropdown: false,
    },
    // {
    //   name: "Services",
    //   path: "/services",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: "Service 1", path: "/services/service-1" },
    //     { name: "Service 2", path: "/services/service-2" },
    //     { name: "Service 3", path: "/services/service-3" },
    //   ],
    // },
    // {
    //   name: "Projects",
    //   path: "/projects",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: "Project 1", path: "/projects/project-1" },
    //     { name: "Project 2", path: "/projects/project-2" },
    //     { name: "Project 3", path: "/projects/project-3" },
    //   ],
    // },
    // {
    //   name: "News",
    //   path: "/news",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: "Latest News", path: "/news/latest" },
    //     { name: "Press Releases", path: "/news/press" },
    //     { name: "Blog", path: "/news/blog" },
    //   ],
    // },
    {
      name: "Shop",
      path: "/shop",
      hasDropdown: true,
      dropdownItems: [
        { name: "Products", path: "/shop/products" },
        { name: "Cart", path: "/shop/cart" },
        { name: "Checkout", path: "/shop/checkout" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      hasDropdown: false,
    },
  ]

  const toggleDropdown = (name: string) => {
    if (isMobile) {
      setOpenDropdowns((prev) => ({
        ...prev,
        [name]: !prev[name],
      }))
    }
  }

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="grid grid-cols-3 px-4">
      <div className="bg-[#e9e9e9] border-t-4 border-[#4d8c40]"></div>
      <div className="bg-[#e9e9e9] border-t-4 border-[#C5CE38]"></div>
      <div className="bg-[#e9e9e9] border-t-4 border-[#EEC044]"></div>
      </div>
      <div className="bg-[#e9e9e9] py-3">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 lg:mb-0">
            {/* <Link href="/" className="flex items-center">
              <Image
                src= {Logo}
                alt="GrowMetra Logo"
                width={140}
                height={60}
                className="mr-2 "
              />
             
            </Link> */}
            <Logo />
          </div>

          {/* Social and Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Social Icons */}
            <div className="flex space-x-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#4d8c40] hover:text-white transition-colors"
              >
                <Twitter size={18} className="fill-black"/>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#4d8c40] hover:text-white transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center ">
                <Facebook size={18} className="fill-white stroke-white"/>
                <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#4d8c40] hover:text-white transition-colors"
              >
                <span className="font-bold">P</span>
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#4d8c40] hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                  <Phone className= "stroke-[#4d8c40]"size={25} />
                
                <div>
                  <p className="text-xs text-gray-500">Call anytime</p>
                  <p className="text-sm font-medium">07011194334</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                  <Mail className= "stroke-[#4d8c40]" size={25} />
                
                <div>
                  <p className="text-xs text-gray-500">Send email</p>
                  <p className="text-sm font-medium">growmetra@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                  <MapPin className= "stroke-[#4d8c40]" size={25} />
               
                <div>
                  <p className="text-xs text-gray-500">No 5A, Bolajoko Oshun street</p>
                  <p className="text-sm font-medium">Ikeja, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className="flex items-center text-gray-700 hover:text-[#4d8c40] py-4 font-medium"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50 invisible group-hover:visible">
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4d8c40] hover:text-white"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#4d8c40]" aria-label="Search">
                <Search size={20} />
              </button>
              <div className="relative">
                <button className="text-gray-700 hover:text-[#4d8c40]" aria-label="Shopping cart">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-[#4d8c40] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-y-0 left-0 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                  <Logo
                  width = {80}
                />
                      </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="p-4 border-b space-y-3">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#4d8c40]" />
              <span className="text-sm">07011194334</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#4d8c40]" />
              <span className="text-sm">growmetra@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#4d8c40]" />
              <span className="text-sm">Ikeja, Lagos</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <div className="border-b border-gray-100">
                    <div
                      className="flex justify-between items-center text-  py-3 px-2 text-gray-700 hover:text-[#4d8c40]"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <Link
                        href={item.hasDropdown ? "#" : item.path}
                        className={`${item.hasDropdown ? "pointer-events-none" : ""} flex-grow`}
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            e.preventDefault()
                          } else {
                            setIsMenuOpen(false)
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${openDropdowns[item.name] ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.hasDropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdowns[item.name] ? "max-h-60" : "max-h-0"
                        }`}
                      >
                        <div className="bg-gray-50 py-2 pl-6">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              className="block py-2 text-sm text-gray-600 hover:text-[#4d8c40]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Social Icons */}
          <div className="p-4 border-t">
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#4d8c40]">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#4d8c40]">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#4d8c40]">
                <span className="font-bold">P</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#4d8c40]">
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}
