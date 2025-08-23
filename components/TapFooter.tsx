import Image from "next/image";
import { ArrowRight, Code, Cog } from "lucide-react";

function TapFooter() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions for your specific needs"
    },
    {
      icon: Cog,
      title: "Flagship Products",
      description: "ERP systems and enterprise solutions"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Logo and Company Info */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Image 
                src="/Intaps_logo.png" 
                width={180} 
                height={120} 
                alt="INTAPS Logo" 
                className="mx-auto"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">INTAPS Consultancy PLC</h3>
          <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Leading digital transformation in Ethiopia with 17+ years of experience in 
            delivering innovative technology solutions for public and private sectors.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold mb-4">Our Core Services</h4>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h5>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h4>
            <p className="text-blue-100 mb-6">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <a 
              href="mailto:tewelde@intaps.com?subject=Contact Request&body=Hello,%0D%0A%0D%0AI would like to get in touch with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- How you can help my organization%0D%0A- Available services and solutions%0D%0A- Next steps for collaboration%0D%0A%0D%0AThank you!"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} INTAPS Consultancy PLC. All rights reserved.
            </p>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>Wossen, CMC • Addis Ababa, Ethiopia</p>
              <p>Contact: tewelde@intaps.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TapFooter;