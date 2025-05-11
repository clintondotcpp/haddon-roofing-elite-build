
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical roof installation take?",
    answer: "The timeline for a roof installation depends on various factors including the size of your roof, the materials used, and weather conditions. A standard residential roof replacement typically takes 1-3 days, while larger or more complex projects may take longer. During your consultation, we'll provide a detailed timeline specific to your project."
  },
  {
    question: "What roofing materials do you offer?",
    answer: "We offer a comprehensive range of premium roofing materials including asphalt shingles, metal roofing, slate, tile, flat roofing systems (TPO, EPDM, modified bitumen), and cedar shake. We partner with industry-leading manufacturers like GAF and Owens Corning to ensure quality and durability. Our team will help you select the best material for your specific needs and budget."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "Yes, we stand behind our workmanship with comprehensive warranties. We offer a 10-year workmanship warranty on all installations, and our materials come with manufacturer warranties ranging from 25 years to lifetime coverage, depending on the product. We'll provide detailed warranty information during your consultation so you understand exactly what's covered."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Haddon Roofing is fully licensed, bonded, and insured in the state of New Jersey. We carry comprehensive general liability insurance and workers' compensation coverage for all our employees. We're happy to provide proof of insurance and licensing documentation upon request."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with several financial institutions to offer flexible financing options that can help make your roofing project more affordable. Options include 0% interest for qualified buyers, low monthly payments, and terms up to 120 months. Our team can help you explore the financing solutions that best fit your needs during your consultation."
  },
  {
    question: "How do I know if I need a roof repair or complete replacement?",
    answer: "Several factors determine whether repair or replacement is more appropriate, including the age of your roof, extent of damage, and your long-term plans for the property. During our free inspection, our experts will assess your roof's condition, identify any issues, and provide honest recommendations along with the pros and cons of each option so you can make an informed decision."
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Find answers to our most commonly asked questions. If you don't see what you're looking for, please contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-haddon-navy hover:text-haddon-accent py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-haddon-slate pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-haddon-slate mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-haddon-navy hover:bg-haddon-accent text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
