
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    title: "Residential Roofing",
    description: "Expert installation, repair, and replacement services for homeowners. Using only premium materials backed by industry-leading warranties.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    image: "/lovable-uploads/29904895-4e5d-4e83-a677-e13ae0080077.png"
  },
  {
    title: "Commercial Roofing",
    description: "Comprehensive solutions for business owners and property managers. Minimize disruption with our efficient and professional team.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <line x1="2" y1="13" x2="22" y2="13"></line>
        <line x1="12" y1="6" x2="12" y2="18"></line>
      </svg>
    ),
    image: "/lovable-uploads/210000f0-5092-4756-b2d3-39372834d61a.png"
  },
  {
    title: "Roof Repairs",
    description: "Fast, reliable repairs for leaks, storm damage, and wear. Our experienced team identifies and resolves issues quickly and effectively.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    image: "/lovable-uploads/e72227c2-2151-4f35-a543-a1622deab13a.png"
  },
  {
    title: "Skylight Installation",
    description: "Bring natural light into your home with professional skylight installation. Energy-efficient options that enhance your interior.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    image: "/lovable-uploads/e2e6c0de-bbb2-4b9f-8d9c-5bd38dd9210b.png"
  },
  {
    title: "Gutters & Siding",
    description: "Complete exterior protection for your property. Custom gutter systems and premium siding options that enhance curb appeal.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    image: "/lovable-uploads/5f7d9df8-e680-48b6-a8b1-46142109e4b3.png"
  },
  {
    title: "Roof Inspections",
    description: "Comprehensive evaluations to identify potential issues before they become costly problems. Detailed reports with clear recommendations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-haddon-navy w-10 h-10 mb-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    image: "/lovable-uploads/dcef4e80-01dd-41f6-b6c5-b186d347c576.png"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            We provide comprehensive roofing solutions for residential and commercial properties using only the highest quality materials and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="service-card transition-all duration-300 border-none shadow-md hover:shadow-xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pt-6">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-haddon-slate text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-haddon-navy hover:bg-haddon-accent text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
