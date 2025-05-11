
import React from "react";
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Licensed & Fully Insured",
    "GAF & Owens Corning Certified",
    "Expert Installation Teams",
    "Premium Materials Only",
    "Comprehensive Warranties",
    "Emergency Repair Services",
    "Transparent Pricing",
    "Financing Options Available"
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              South Jersey's Premier Roofing Experts
            </h2>
            <div className="w-20 h-1 bg-haddon-accent mb-6"></div>
            
            <p className="text-haddon-slate mb-6 text-lg">
              At Haddon Roofing, we've built our reputation on quality craftsmanship, premium materials, and exceptional customer service. For over two decades, we've been protecting South Jersey homes and businesses with roofing solutions that stand the test of time.
            </p>
            
            <p className="text-haddon-slate mb-8">
              Our team of experienced professionals approaches every project with attention to detail and a commitment to excellence. From residential repairs to commercial installations, we deliver results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-haddon-accent h-5 w-5 mr-2" />
                  <span className="text-haddon-navy font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 mt-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/GAF_logo.svg"
                alt="GAF Certified" 
                className="h-16 grayscale hover:grayscale-0 transition-all"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Owens_Corning_logo.svg" 
                alt="Owens Corning Certified" 
                className="h-12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/210000f0-5092-4756-b2d3-39372834d61a.png"
                alt="Haddon Roofing Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute w-full h-full bg-haddon-accent/10 rounded-lg -top-6 -right-6 z-0"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
