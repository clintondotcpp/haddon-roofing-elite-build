
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Estimate Request Received",
        description: "We'll contact you shortly to discuss your roofing needs.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Free Estimate</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Fill out the form below and our team will get back to you within 24 hours to schedule your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-haddon-navy"
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Roofing">Residential Roofing</option>
                    <option value="Commercial Roofing">Commercial Roofing</option>
                    <option value="Roof Repairs">Roof Repairs</option>
                    <option value="Skylight Installation">Skylight Installation</option>
                    <option value="Gutters & Siding">Gutters & Siding</option>
                    <option value="Roof Inspection">Roof Inspection</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide any details about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-gray-300 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6 bg-haddon-navy hover:bg-haddon-accent py-6 text-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Free Estimate"}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms.
              </p>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-haddon-navy">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-haddon-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <a href="tel:6402594166" className="text-haddon-slate hover:text-haddon-accent transition-colors">
                      (640) 259-4166
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-haddon-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <a href="mailto:info@haddonroofing.com" className="text-haddon-slate hover:text-haddon-accent transition-colors">
                      info@haddonroofing.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-haddon-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Location</p>
                    <p className="text-haddon-slate">
                      Cherry Hill, NJ
                    </p>
                    <p className="mt-1 text-haddon-lightslate">
                      Serving Cherry Hill, Avalon, Haddonfield, and all of South Jersey
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-2">Our Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 6:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 3:00 PM</p>
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
                <p className="text-sm mt-4">
                  Emergency services available 24/7
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Service Area</h4>
                <p className="text-sm text-haddon-slate">
                  We proudly serve Cherry Hill, Avalon, Haddonfield, Moorestown, Mount Laurel, Princeton, Marlton, and surrounding communities in South Jersey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
