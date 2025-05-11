
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/bf4020b8-6da7-4ce5-a248-fa0f1be84a3e.png')" }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 hero-overlay"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto text-center md:text-left md:max-w-3xl lg:max-w-4xl px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
          South Jersey's Most Trusted Roofing Professionals
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 animate-fade-in">
          Premium roofing solutions for residential and commercial properties. Licensed, insured, and trusted by homeowners for over 20 years.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in">
          <Button className="bg-white text-haddon-navy hover:bg-gray-100 px-8 py-6 text-lg transition-all transform hover:scale-105">
            <a href="#contact" className="flex items-center">
              Get a Free Estimate
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            <a href="#services">
              Explore Services
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
