
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto container-padding">
        <div className="cta-gradient rounded-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 lg:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Roof?
              </h2>
              <p className="text-white/90 text-lg">
                Contact us today for a free, no-obligation estimate. Our team of experts is ready to provide you with exceptional roofing solutions tailored to your needs.
              </p>
            </div>
            <div>
              <Button className="bg-white text-haddon-navy hover:bg-gray-100 px-6 py-6 text-lg shadow-lg">
                <a href="#contact" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> Schedule Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
