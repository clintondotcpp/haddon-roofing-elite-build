
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckSquare, Clock, Shield, Star, Wallet } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-4 text-haddon-accent">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-haddon-slate">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const DifferenceSection = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Premium Materials",
      description: "We use only top-tier roofing materials from industry-leading manufacturers with comprehensive warranties.",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Expert Craftsmanship",
      description: "Our team of highly trained and certified professionals delivers precision quality on every project.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Fully Licensed & Insured",
      description: "Complete peace of mind with $2 million in liability insurance and full workers' compensation coverage.",
    },
    {
      icon: <CheckSquare className="h-10 w-10" />,
      title: "White Glove Service",
      description: "Exceptional customer experience from initial consultation through project completion and beyond.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "On-Time, On-Budget",
      description: "Projects completed efficiently with transparent communication and no surprise costs.",
    },
    {
      icon: <Wallet className="h-10 w-10" />,
      title: "Flexible Financing",
      description: "Multiple financing options available with competitive rates and terms to fit your budget.",
    },
  ];

  return (
    <section id="difference" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            At Haddon Roofing, we elevate the standard of excellence in every aspect of our service. 
            Here's why South Jersey's most discerning property owners choose us:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
