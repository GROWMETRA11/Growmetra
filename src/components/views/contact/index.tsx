"use client";

import type React from "react";

import { useState } from "react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-200 min-h-screen">
    
      {/* Info Boxes Section */}
      <section className="container max-w-6xl mx-auto py-12 px-4 space-y-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Box */}
          <div className="bg-[#7BC053] rounded-lg p-6 text-white">
            <h2 className="text-2xl font-light mb-4 font-['Covered_By_Your_Grace',_cursive]">About</h2>
            <p className="text-sm">
              GrowMetra's revolutionary farming tech yields exceptional,
              sustainable produce that redefines the future of local food.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-[#D8D14E] rounded-lg p-6 text-white">
            <h2 className="text-2xl font-light mb-4 font-['Covered_By_Your_Grace',_cursive]">Contact</h2>
            <p className="text-sm mb-2">07011194334</p>
            <p className="text-sm mb-2">support@growmetra.com</p>
            <p className="text-sm">Mon - Fri: 7:00 am - 6:00 pm</p>
          </div>

          {/* Address Box */}
          <div className="bg-[#F0C14F] rounded-lg p-6 text-white">
            <h2 className="text-2xl font-light mb-4 font-['Covered_By_Your_Grace',_cursive]">Address</h2>
            <p className="text-sm mb-1">No 5A, Bolajoko Oghun street</p>
            <p className="text-sm">Ikeja, Lagos</p>
          </div>
        </div>

        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map Section */}
            <div className="h-[500px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3515706355933!2d3.3397886!3d6.601869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922f3b4b6c7d%3A0x5c9f0a56c24b3c92!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714334188000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GrowMetra Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-sm">
                <p className="text-sm font-medium">lastminute.com Ikeja</p>
                <p className="text-sm">Ikeja, Lagos</p>
                <div className="flex items-center mt-1">
                  <div className="text-sm">4.5</div>
                  <div className="text-xs text-gray-500 ml-2">
                    170,029 reviews
                  </div>
                </div>
                <button className="text-xs text-blue-500 mt-1">
                  View larger map
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-[#F0C14F] text-xl mb-2">Contact Us</h3>
              <h2 className="text-4xl font-bold mb-8">Write a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-100 p-4 rounded-md w-full focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-100 p-4 rounded-md w-full focus:outline-none"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Write a Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-100 p-4 rounded-md w-full resize-none focus:outline-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#7BC053] text-white py-4 px-8 rounded-md hover:bg-[#6BAF43] transition-colors"
                >
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>

      {/* Map and Contact Form Section */}
    </div>
  );
}
