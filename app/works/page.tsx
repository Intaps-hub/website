"use client";

import { ArrowRight, MapPin, Users, Globe, Award, CheckCircle, Building, Database, Shield } from "lucide-react";
import React from "react";

const WorksPage = () => {
  const projects = [
    {
      name: "WUMIS",
      fullName: "Water Utility Management Information System",
      description: "A comprehensive water utility management system designed to streamline water distribution, billing, and customer service operations for municipalities and water utilities across Ethiopia.",
      logo: "/wumis-logo.png",
      features: [
        "Water Distribution Management",
        "Customer Billing & Payment",
        "Meter Reading & Management",
        "Leak Detection & Monitoring",
        "Financial Reporting",
        "Customer Portal"
      ],
      cities: [
        "Addis Ababa",
        "Dire Dawa", 
        "Bahir Dar",
        "Mekelle",
        "Gondar",
        "Hawassa"
      ],
      stats: {
        users: "2M+",
        cities: "15+"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "CIS",
      fullName: "Cadastre Information System (CIS10)",
      description: "Complete rewrite and modernization of Ethiopia's premier cadastre platform into a workflow-driven CIS10 for the Dire Dawa Land Development and Management Bureau, enabling online services and significantly reducing wait times.",
      logo: "/cis-logo.png",
      features: [
        "Configurable Workflows",
        "Land Transaction Management",
        "Legacy Data Migration",
        "Online Appointment Portal",
        "Data Validation Framework",
        "Workflow-driven Operations"
      ],
      cities: [
        "Dire Dawa",
        "Addis Ababa",
        "Adama",
        "Jimma",
        "Dessie",
        "Shashamane"
      ],
      stats: {
        users: "Thousands",
        cities: "15+"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "WSIS",
      fullName: "Water Supply Information System",
      description: "A specialized water supply monitoring and management system that provides real-time data on water quality, distribution networks, and supply chain management for water utilities.",
      logo: "/wsis-logo.png",
      features: [
        "Water Quality Monitoring",
        "Supply Chain Management",
        "Real-time Data Analytics",
        "Infrastructure Mapping",
        "Quality Control",
        "Emergency Response"
      ],
      cities: [
        "Sheger City",
        "Modjo",
        "Ambo",
        "Motta",
        "Bichena",
        "Chiro",
        "Gelamso",
        "Sendafa",
        "Bedessa"
      ],
      stats: {
        users: "400K+",
        cities: "18+"
      },
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
              <Award className="w-4 h-4" />
              Proven Track Record
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}Success Stories
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              Discover the innovative systems we've developed and deployed across Ethiopia, 
              transforming how organizations operate and serve their communities.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Flagship
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Systems</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive software solutions are powering critical operations across Ethiopia, 
              serving millions of users and improving efficiency in key sectors.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 space-y-6">
                  
                  {/* Logo and Title */}
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color}`}>
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                      <p className="text-gray-600">{project.fullName}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{project.stats.users}</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{project.stats.cities}</div>
                      <div className="text-sm text-gray-600">Cities</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Cities */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Serving Cities</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.cities.map((city, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-6">
                    <a 
                      href={`mailto:tewelde@intaps.com?subject=${encodeURIComponent(project.name)} System Inquiry&body=${encodeURIComponent(`Hello,%0D%0A%0D%0AI'm interested in learning more about the ${project.name} system.%0D%0A%0D%0APlease provide information about:%0D%0A- System capabilities and features%0D%0A- Implementation requirements%0D%0A- Pricing and consultation%0D%0A- Case studies and references%0D%0A%0D%0AThank you!`)}`}
                      className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Section */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Across Ethiopia</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systems are transforming how organizations operate, improving efficiency and service delivery 
                across multiple sectors and cities throughout Ethiopia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">4M+ Users</h4>
                <p className="text-gray-600">Serving millions of citizens across Ethiopia</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">45+ Cities</h4>
                <p className="text-gray-600">Deployed across major Ethiopian cities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">99.9% Uptime</h4>
                <p className="text-gray-600">Reliable systems with excellent performance</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven systems can help your organization achieve its digital transformation goals.
            </p>
            
            <div className="flex items-center justify-center">
              <a 
                href="mailto:tewelde@intaps.com?subject=System Demo Request&body=Hello,%0D%0A%0D%0AI would like to see a demo of your systems.%0D%0A%0D%0APlease provide information about:%0D%0A- Available demos and presentations%0D%0A- Scheduling options%0D%0A- Technical requirements%0D%0A- Contact preferences%0D%0A%0D%0AThank you!"
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
