
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreaSection = () => {
  const servicedTowns = [
    "Cherry Hill", "Haddonfield", "Moorestown", "Marlton", 
    "Medford", "Mount Laurel", "Voorhees", "Collingswood", 
    "Avalon", "Stone Harbor", "Sea Isle City", "Ocean City", 
    "Margate", "Longport", "Ventnor", "Atlantic City", 
    "Brigantine", "Linwood", "Somers Point", "Egg Harbor Township"
  ];

  return (
    <section id="service-area" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Area</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Proudly serving South Jersey homeowners and businesses with premium roofing solutions.
            Our coverage extends throughout Camden, Burlington, Gloucester, and Atlantic counties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start fade-in-section">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/bf4020b8-6da7-4ce5-a248-fa0f1be84a3e.png" 
                alt="South Jersey Service Area Map" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold text-haddon-navy mb-2">Serving All of South Jersey</h3>
                <p className="text-haddon-slate mb-4">
                  Our team provides exceptional roofing services throughout South Jersey, 
                  including residential and commercial properties in the areas shown above.
                </p>
                <Link to="/service-areas">
                  <Button className="bg-haddon-navy hover:bg-haddon-accent transition-colors">
                    View All Service Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-haddon-navy mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicedTowns.map((town, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-haddon-accent mr-2" />
                    <span className="text-haddon-slate">{town}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-haddon-slate mb-4">Don't see your town? Contact us to confirm service in your area.</p>
                <Link to="/contact">
                  <Button variant="outline" className="border-haddon-navy text-haddon-navy hover:bg-haddon-navy hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
