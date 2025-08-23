"use client";

import { ArrowRight, Code, Cog, Zap, Database, CreditCard, RefreshCw, Shield, Clock, Users, TrendingUp } from "lucide-react";
import React from "react";
import TapFooter from "@/components/TapFooter";

const ServicesPage = () => {
  const services = [
    {
      icon: Database,
      title: "ERP Software Development",
      description: "Comprehensive Enterprise Resource Planning solutions tailored to your organization's unique needs.",
      features: [
        "Custom ERP Modules",
        "Inventory Management",
        "Financial Management",
        "Human Resources",
        "Supply Chain Management",
        "Reporting & Analytics"
      ],
      benefits: [
        "Streamlined Operations",
        "Real-time Data Access",
        "Cost Reduction",
        "Improved Efficiency"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: CreditCard,
      title: "Payment Integrations",
      description: "Secure and seamless payment processing solutions for modern businesses.",
      features: [
        "Multiple Payment Gateways",
        "Mobile Payment Solutions",
        "Secure Transaction Processing",
        "Payment Analytics",
        "Real-time Monitoring",
        "Fraud Detection"
      ],
      benefits: [
        "Enhanced Security",
        "Faster Transactions",
        "Better User Experience",
        "Reduced Payment Failures"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: RefreshCw,
      title: "Enhancement & Migration",
      description: "Modernize and upgrade your existing systems with our expert migration services.",
      features: [
        "Legacy System Migration",
        "Cloud Migration",
        "Database Upgrades",
        "API Integration",
        "Performance Optimization",
        "Data Migration"
      ],
      benefits: [
        "Improved Performance",
        "Enhanced Security",
        "Reduced Maintenance",
        "Future-proof Solutions"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium text-white">
              <Zap className="w-4 h-4" />
              Professional Technology Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}Comprehensive Services
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              Discover our range of professional technology solutions designed to transform your business operations 
              and drive digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Specialized
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions that empower organizations to achieve their digital transformation goals.
            </p>
          </div>

                     {/* Services Grid */}
           <div className="space-y-12">
             {services.map((service, index) => (
               <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                   
                   {/* Left Side - Content */}
                   <div className="p-8 space-y-6">
                                         {/* Icon and Title */}
                     <div className="flex items-center gap-4">
                       <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color}`}>
                         <service.icon className="w-6 h-6 text-white" />
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                     </div>
                    
                                         {/* Description */}
                     <p className="text-base text-gray-600 leading-relaxed">
                       {service.description}
                     </p>
                     
                     {/* Features */}
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                         {service.features.map((feature, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                             <span className="text-sm text-gray-700">{feature}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                     
                     {/* Benefits */}
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Benefits</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                         {service.benefits.map((benefit, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <TrendingUp className="w-3 h-3 text-green-500" />
                             <span className="text-sm text-gray-700">{benefit}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                    
                                         {/* CTA Button */}
                     <div className="pt-4">
                       <a 
                         href="mailto:tewelde@intaps.com?subject=Contact Request&body=Hello,%0D%0A%0D%0AI would like to get in touch with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- How you can help my organization%0D%0A- Available services and solutions%0D%0A- Next steps for collaboration%0D%0A%0D%0AThank you!"
                         className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                       >
                         Contact Us
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </a>
                     </div>
                   </div>
                   
                   {/* Right Side - Visual */}
                   <div className={`bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}>
                     <div className="text-center text-white">
                       <service.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                       <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                       <p className="text-blue-100 leading-relaxed text-sm">
                         Professional solutions delivered with expertise and precision
                       </p>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Ready to Transform Your Business?</h3>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized technology solutions can help your organization 
              achieve its digital transformation goals and drive success.
            </p>
            
                         <div className="flex items-center justify-center">
                           <a 
               href="mailto:tewelde@intaps.com?subject=Contact Request&body=Hello,%0D%0A%0D%0AI would like to get in touch with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- How you can help my organization%0D%0A- Available services and solutions%0D%0A- Next steps for collaboration%0D%0A%0D%0AThank you!"
               className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
               Contact Us
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             </div>
          </div>
        </div>
      </div>
      
      <TapFooter />
    </div>
  );
};

export default ServicesPage; 