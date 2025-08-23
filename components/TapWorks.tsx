import { ArrowRight, MapPin, Users, CheckCircle, Building, Database } from "lucide-react";
import React from "react";

const TapWorks = () => {
  const projects = [
    {
      name: "WUMIS",
      fullName: "Water Utility Management Information System",
      description: "A comprehensive water utility management system serving 2M+ users across 20+ cities in Ethiopia.",
      stats: {
        users: "2M+",
        cities: "20+",
        efficiency: "85%"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "CIS",
      fullName: "Cadastre Information System (CIS10)",
      description: "Complete rewrite and modernization of Ethiopia's premier cadastre platform serving 5M+ users across 15+ cities.",
      stats: {
        users: "5M+",
        cities: "15+",
        efficiency: "95%"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "WSIS",
      fullName: "Water Supply Information System",
      description: "A specialized water supply monitoring system serving 400K+ users across 13+ cities.",
      stats: {
        users: "400K+",
        cities: "13+",
        efficiency: "88%"
      },
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Flagship Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative systems we've developed and deployed across Ethiopia, 
            transforming how organizations operate and serve their communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.color}`}>
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.fullName}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{project.stats.users}</div>
                  <div className="text-xs text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{project.stats.cities}</div>
                  <div className="text-xs text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{project.stats.efficiency}</div>
                  <div className="text-xs text-gray-600">Efficiency</div>
                </div>
              </div>
              
              {/* CTA */}
              <a 
                href="/works"
                className="group/btn inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to See More?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our complete portfolio of systems and discover how we can help transform your organization.
            </p>
            <a 
              href="/works"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapWorks; 