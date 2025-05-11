
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Warning Signs Your Roof Needs Immediate Attention",
    excerpt: "Learn to identify the critical warning signs that indicate your roof may need professional inspection or repairs before more serious damage occurs.",
    image: "/lovable-uploads/e72227c2-2151-4f35-a543-a1622deab13a.png",
    date: "May 5, 2023",
    readTime: "6 min read",
    slug: "warning-signs-roof-needs-attention"
  },
  {
    id: 2,
    title: "How to Choose the Best Roofing Material for Your South Jersey Home",
    excerpt: "Find out which roofing materials perform best in South Jersey's climate and which offer the best return on investment for your home.",
    image: "/lovable-uploads/29904895-4e5d-4e83-a677-e13ae0080077.png",
    date: "April 18, 2023",
    readTime: "8 min read",
    slug: "choosing-roofing-materials-south-jersey"
  },
  {
    id: 3,
    title: "The Benefits of Professional Roof Inspections After Storm Season",
    excerpt: "Discover why scheduling a professional roof inspection after storm season can save you thousands in potential damages and extend your roof's lifespan.",
    image: "/lovable-uploads/dcef4e80-01dd-41f6-b6c5-b186d347c576.png",
    date: "March 22, 2023",
    readTime: "5 min read",
    slug: "benefits-professional-roof-inspections"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roofing Tips & Insights</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Expert advice and industry knowledge to help you make informed decisions about your roofing investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-haddon-lightslate mb-3">
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-haddon-navy line-clamp-2">{post.title}</h3>
                <p className="text-haddon-slate mb-4 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-haddon-accent font-medium hover:text-haddon-navy transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-haddon-navy hover:bg-haddon-accent transition-colors">
              View All Roofing Tips
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
