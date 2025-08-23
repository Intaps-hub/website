import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function TapRenewal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium text-white">
            <Sparkles className="w-4 h-4" />
            Transform Your Business Today
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Lead the 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}Digital Revolution
              </span>
              ?
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 leading-relaxed">
              Join hundreds of organizations that have transformed their operations with INTAPS. 
              Let's build the future together with cutting-edge technology solutions.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            {[
              "Free Initial Consultation",
              "Custom Solution Design",
              "24/7 Ongoing Support",
              "Scalable Architecture"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="mailto:tewelde@intaps.com?subject=Digital Transformation Inquiry&body=Hello,%0D%0A%0D%0AI'm interested in starting a digital transformation project with INTAPS.%0D%0A%0D%0APlease provide information about:%0D%0A- Available transformation services%0D%0A- Project timeline and process%0D%0A- Cost estimates and consultation%0D%0A%0D%0AThank you!"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule a Call
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">17+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-blue-200">Successful Deployments</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-blue-200">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
    </section>
  );
}