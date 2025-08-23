import { Target, Users, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";

const Logos = () => {


  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and accountability in every project we undertake.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Customer Focus", 
      description: "Our clients' needs are at the core of everything we do, driving our commitment to excellence.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new ways to enhance our solutions using emerging technologies.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working together to achieve extraordinary results for our clients.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vision Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <h2 className="mx-6 text-lg font-semibold text-blue-600 uppercase tracking-wider">Our Vision</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Leading Technological 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Innovation</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To lead technological innovation through research and development, turning emerging technologies 
            into practical, scalable solutions that transform organizations and drive success.
          </p>
        </div>



        {/* Values Section */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-3xl p-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-sm font-medium text-blue-700 mb-6">
              <Shield className="w-4 h-4" />
              What Drives Us
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer innovative solutions that not only enhance environmental sustainability 
              but also drive economic efficiency and organizational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-6 lg:row-span-2' : 
                  index === 1 ? 'lg:col-span-3' : 
                  index === 2 ? 'lg:col-span-3' : 'lg:col-span-6'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className={`font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors ${
                    index === 0 ? 'text-3xl' : 'text-xl'
                  }`}>
                    {value.title}
                  </h4>
                  
                  <p className={`text-gray-600 leading-relaxed ${
                    index === 0 ? 'text-lg' : 'text-base'
                  }`}>
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${value.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gradient-to-r ${value.color} opacity-40 group-hover:opacity-80 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;