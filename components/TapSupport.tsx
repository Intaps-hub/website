import { useState } from 'react';
import { ArrowRight, MessageCircle, ChevronDown, HelpCircle, Clock, MapPin, Phone } from 'lucide-react';

function TapSupport() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "About INTAPS?",
      answer: "At INTAPS Consultancy PLC, we leverage advanced technology to help public and private sector organizations transform their operations. With over 17 years of experience, we are at the forefront of digital transformation in Ethiopia, driving innovation and simplifying complex processes. INTAPS is a market leader in providing software solutions that boost efficiency and offer strategic advantages.",
      icon: HelpCircle
    },
    {
      question: "Where Is It Located?",
      answer: "INTAPS Consultancy PLC is Located in AddisAbaba, Ethiopia around Wosen next to Aselefech Merga Hotel.",
      icon: MapPin
    },
    {
      question: "What are the Contact Information?",
      answer: "INTAPS Consultancy PLC is available at this phone lines: +251-91320 0500 or +251-116604088, or reach us via email at tewelde@intaps.com",
      icon: Phone
    },
    {
      question: "How Long Have You Been On The Market?",
      answer: "INTAPS Consultancy PLC has been working on software development for over 17 years, establishing ourselves as a trusted partner in digital transformation!",
      icon: Clock
    },
  ];

  const openDivAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Support Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Available 24/7</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Support When You
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Need It Most</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our dedicated support team is here to help you succeed. Whether you have questions about our services 
                or need technical assistance, we're just a call away.
              </p>
            </div>


          </div>

          {/* Right Side - FAQ */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find quick answers to common questions about our services and company.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                    openIndex === index 
                      ? 'border-blue-200 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => openDivAnswer(index)}
                    className="w-full text-left p-6 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                        openIndex === index ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <faq.icon className={`w-5 h-5 ${
                          openIndex === index ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
              <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Our team is here to help.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Get in touch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TapSupport;