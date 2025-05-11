
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const counties = [
    {
      name: "Camden County",
      towns: ["Cherry Hill", "Haddonfield", "Voorhees", "Collingswood", "Pennsauken", "Gloucester Township", "Haddon Township", "Haddon Heights", "Merchantville"]
    },
    {
      name: "Burlington County",
      towns: ["Moorestown", "Mount Laurel", "Medford", "Marlton", "Delran", "Cinnaminson", "Riverton", "Burlington Township", "Maple Shade"]
    },
    {
      name: "Gloucester County",
      towns: ["Glassboro", "Washington Township", "Deptford", "Woodbury", "Mullica Hill", "Swedesboro", "Mantua", "Harrison Township"]
    },
    {
      name: "Atlantic County",
      towns: ["Atlantic City", "Brigantine", "Ventnor", "Margate", "Longport", "Egg Harbor Township", "Linwood", "Somers Point", "Absecon"]
    },
    {
      name: "Cape May County",
      towns: ["Avalon", "Stone Harbor", "Sea Isle City", "Ocean City", "Cape May", "Wildwood", "North Wildwood", "Cape May Court House"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16">
          {/* Background */}
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/lovable-uploads/210000f0-5092-4756-b2d3-39372834d61a.png')" }}></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-haddon-navy/90"></div>
          
          {/* Content */}
          <div className="container relative z-20 mx-auto text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Service Areas
            </h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Providing exceptional roofing services throughout South Jersey, from cherry Hill to Cape May.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Areas We Proudly Serve</h2>
                <p className="text-haddon-slate">
                  Haddon Roofing provides premium roofing services throughout South Jersey. Our experienced team serves homeowners and businesses across five counties with the same exceptional quality and attention to detail.
                </p>
              </div>

              <div className="space-y-10">
                {counties.map((county, index) => (
                  <div key={index} className="rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="bg-haddon-navy p-4">
                      <h3 className="text-2xl font-bold text-white">{county.name}</h3>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {county.towns.map((town, townIndex) => (
                          <div key={townIndex} className="flex items-center">
                            <MapPin className="h-4 w-4 text-haddon-accent mr-2" />
                            <span className="text-haddon-slate">{town}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Don't See Your Town?</h3>
                <p className="text-haddon-slate mb-6">
                  We may still serve your area. Contact us today to discuss your roofing project and verify service availability in your location.
                </p>
                <Button className="bg-haddon-navy hover:bg-haddon-accent transition-colors">
                  <a href="#contact" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" /> Contact Us Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceAreas;
