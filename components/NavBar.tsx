import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  const address = {
    icon: MapPin,
    title: "Our Address",
    content: "Wossen, CMC\nAddis Ababa, Ethiopia",
    color: "bg-lime-500",
  };

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/Intaps_logo.png"
                width={120}
                height={120}
                alt="INTAPS Logo"
                className="hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a 
              href="/works" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Works
            </a>
          </div>

          {/* Contact Information */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            
            {/* Address */}
            {/* <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                <address.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Our Location</div>
                <div className="text-xs text-gray-600 whitespace-pre-line">{address.content}</div>
              </div>
            </div> */}

            {/* Contact Email */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Contact Us</div>
                <a 
                  href="mailto:tewelde@intaps.com" 
                  className="text-xs text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                >
                  tewelde@intaps.com
                </a>
              </div>
            </div>


          </div>

          {/* Mobile Contact - Simplified */}
          <div className="md:hidden flex items-center gap-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Home
            </a>
            <a 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Services
            </a>
            <a 
              href="/works" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Works
            </a>
            <a 
              href="mailto:tewelde@intaps.com" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Contact</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;