
import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Haddon Roofing exceeded our expectations. The team was professional, on-time, and delivered exceptional quality. Our new roof looks amazing and was completed on schedule and on budget.",
    author: "Jennifer L.",
    location: "Cherry Hill, NJ",
    rating: 5,
  },
  {
    id: 2,
    content: "As a commercial property manager, I've worked with many roofing contractors over the years. Haddon Roofing's team stands out for their attention to detail, communication, and quality of work.",
    author: "Michael S.",
    location: "Haddonfield, NJ",
    rating: 5,
  },
  {
    id: 3,
    content: "After storm damage to our roof, Haddon Roofing was quick to respond, worked directly with our insurance, and repaired everything perfectly. Their service was truly top-notch.",
    author: "Robert K.",
    location: "Avalon, NJ",
    rating: 5,
  },
  {
    id: 4,
    content: "The skylight installation by Haddon Roofing transformed our home. The work was meticulous and their clean-up was impeccable. Couldn't be happier with the results.",
    author: "Sarah M.",
    location: "Princeton, NJ",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience with Haddon Roofing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center items-center mb-8 gap-6">
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-haddon-navy">500+</p>
              <p className="text-haddon-slate mt-2">Completed Projects</p>
            </div>
            <div className="hidden md:block w-0.5 h-16 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-haddon-navy">98%</p>
              <p className="text-haddon-slate mt-2">Satisfied Clients</p>
            </div>
            <div className="hidden md:block w-0.5 h-16 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-haddon-navy">20+</p>
              <p className="text-haddon-slate mt-2">Years Experience</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-haddon-navy hover:bg-haddon-accent text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Join Our Satisfied Clients
          </a>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <Card className="testimonial-card p-6 h-full flex flex-col justify-between border-none">
    <div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-haddon-slate mb-4 italic">{testimonial.content}</p>
    </div>
    <div>
      <p className="font-bold">{testimonial.author}</p>
      <p className="text-sm text-haddon-lightslate">{testimonial.location}</p>
    </div>
  </Card>
);

export default TestimonialsSection;
