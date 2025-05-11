
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Warning Signs Your Roof Needs Immediate Attention",
    excerpt: "Learn to identify the critical warning signs that indicate your roof may need professional inspection or repairs before more serious damage occurs.",
    image: "/lovable-uploads/e72227c2-2151-4f35-a543-a1622deab13a.png",
    date: "May 5, 2023",
    readTime: "6 min read",
    slug: "warning-signs-roof-needs-attention",
    category: "Maintenance"
  },
  {
    id: 2,
    title: "How to Choose the Best Roofing Material for Your South Jersey Home",
    excerpt: "Find out which roofing materials perform best in South Jersey's climate and which offer the best return on investment for your home.",
    image: "/lovable-uploads/29904895-4e5d-4e83-a677-e13ae0080077.png",
    date: "April 18, 2023",
    readTime: "8 min read",
    slug: "choosing-roofing-materials-south-jersey",
    category: "Materials"
  },
  {
    id: 3,
    title: "The Benefits of Professional Roof Inspections After Storm Season",
    excerpt: "Discover why scheduling a professional roof inspection after storm season can save you thousands in potential damages and extend your roof's lifespan.",
    image: "/lovable-uploads/dcef4e80-01dd-41f6-b6c5-b186d347c576.png",
    date: "March 22, 2023",
    readTime: "5 min read",
    slug: "benefits-professional-roof-inspections",
    category: "Inspections"
  },
  {
    id: 4,
    title: "Understanding Your Roof Warranty: What's Covered and What's Not",
    excerpt: "A comprehensive guide to understanding manufacturer and workmanship warranties for your new roof and how to ensure you're properly protected.",
    image: "/lovable-uploads/5f7d9df8-e680-48b6-a8b1-46142109e4b3.png",
    date: "March 10, 2023",
    readTime: "7 min read",
    slug: "understanding-roof-warranties",
    category: "Education"
  },
  {
    id: 5,
    title: "How to Maximize Energy Efficiency with Your Roofing Choices",
    excerpt: "Learn how the right roofing materials and proper installation techniques can significantly reduce your energy bills year-round.",
    image: "/lovable-uploads/e2e6c0de-bbb2-4b9f-8d9c-5bd38dd9210b.png",
    date: "February 25, 2023",
    readTime: "9 min read",
    slug: "energy-efficient-roofing-choices",
    category: "Energy Efficiency"
  },
  {
    id: 6,
    title: "Commercial Roofing: Key Considerations for Business Owners",
    excerpt: "Important factors every business owner should consider when selecting, maintaining, or replacing a commercial roofing system.",
    image: "/lovable-uploads/210000f0-5092-4756-b2d3-39372834d61a.png",
    date: "February 12, 2023",
    readTime: "10 min read",
    slug: "commercial-roofing-considerations",
    category: "Commercial"
  }
];

const categories = ["All", "Maintenance", "Materials", "Inspections", "Education", "Energy Efficiency", "Commercial"];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16">
          {/* Background */}
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/lovable-uploads/dcef4e80-01dd-41f6-b6c5-b186d347c576.png')" }}></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-haddon-navy/90"></div>
          
          {/* Content */}
          <div className="container relative z-20 mx-auto text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Roofing Tips & Resources
            </h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Expert advice, industry insights, and educational resources to help you make informed decisions about your roofing investment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haddon-accent focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 text-haddon-navy">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className={`block py-2 px-3 rounded-md transition-colors ${
                            category === "All" 
                              ? "bg-haddon-navy text-white" 
                              : "text-haddon-slate hover:bg-gray-200"
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4 text-haddon-navy">Get a Free Estimate</h3>
                  <p className="text-haddon-slate mb-4">Ready to discuss your roofing project with our experts?</p>
                  <Button className="w-full bg-haddon-navy hover:bg-haddon-accent transition-colors">
                    Contact Us Today
                  </Button>
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium bg-gray-100 text-haddon-slate py-1 px-2 rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-haddon-lightslate">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-haddon-navy line-clamp-2">{post.title}</h3>
                        <p className="text-haddon-slate mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-haddon-lightslate">
                            <CalendarIcon className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                          <Link to={`/blog/${post.slug}`} className="text-haddon-accent font-medium hover:text-haddon-navy transition-colors text-sm">
                            Read Article →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
