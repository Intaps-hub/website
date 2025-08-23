import { ArrowRight, Code, Cog, Zap, Star } from 'lucide-react';
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We design and implement tailored software solutions to meet the specific needs of organizations, ensuring scalability and efficiency.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"],
      color: "from-blue-500 to-indigo-500",
      delay: "delay-0"
    },
    {
      icon: Cog,
      title: "Flagship Products",
      description: "We develop and deploy Enterprise Resource Planning (ERP) systems and other flagship solutions to drive digital transformation.",
      features: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Cloud Integration"],
      color: "from-emerald-500 to-teal-500",
      delay: "delay-100"
    }
  ];

  return (
    <div id='services' className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <h2 className="mx-6 text-lg font-semibold text-blue-600 uppercase tracking-wider">Our Services</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Technology Solutions</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These are the main core services that are provided by INTAPS to help transform your organization 
            with cutting-edge technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${service.delay} animate-fade-in`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>


              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          
          <h4 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h4>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your organization achieve its digital transformation goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:tewelde@intaps.com?subject=Contact Request&body=Hello,%0D%0A%0D%0AI would like to get in touch with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- How you can help my organization%0D%0A- Available services and solutions%0D%0A- Next steps for collaboration%0D%0A%0D%0AThank you!"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;