import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles className="w-4 h-4" />
            Leading Digital Transformation in Ethiopia
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                INTAPS
              </span>
              <br />
              <span className="text-gray-900">Consultancy PLC</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
              Empowering Public and Private Sectors with 
              <span className="font-semibold text-blue-600"> Technology-Driven Solutions</span>
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {[
              "17+ Years Experience",
              "Custom Software Development", 
              "Enterprise Solutions"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center pt-8">
            <a 
              href="mailto:tewelde@intaps.com?subject=Contact Request&body=Hello,%0D%0A%0D%0AI would like to get in touch with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- How you can help my organization%0D%0A- Available services and solutions%0D%0A- Next steps for collaboration%0D%0A%0D%0AThank you!"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Logo Section */}
          <div className="pt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 max-w-2xl mx-auto">
              <div className="relative">
                <Image
                  src="/Intaps_logo.png"
                  width={400}
                  height={200}
                  alt="INTAPS Logo"
                  className="mx-auto"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">17+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;