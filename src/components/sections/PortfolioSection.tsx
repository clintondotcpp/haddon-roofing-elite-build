
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Luxury Home Roof Replacement",
    category: "residential",
    location: "Cherry Hill, NJ",
    image: "/lovable-uploads/29904895-4e5d-4e83-a677-e13ae0080077.png",
    description: "Complete roof replacement with premium architectural shingles and gutter system upgrade.",
  },
  {
    id: 2,
    title: "Commercial Flat Roof Installation",
    category: "commercial",
    location: "Haddonfield, NJ",
    image: "/lovable-uploads/e2e6c0de-bbb2-4b9f-8d9c-5bd38dd9210b.png",
    description: "New TPO roofing system for a retail complex with custom drainage solutions.",
  },
  {
    id: 3,
    title: "Standing Seam Metal Roof",
    category: "residential",
    location: "Avalon, NJ",
    image: "/lovable-uploads/5f7d9df8-e680-48b6-a8b1-46142109e4b3.png",
    description: "Premium metal roofing installation with 50-year warranty for coastal property.",
  },
  {
    id: 4,
    title: "Historic Home Restoration",
    category: "specialty",
    location: "Moorestown, NJ",
    image: "/lovable-uploads/e72227c2-2151-4f35-a543-a1622deab13a.png",
    description: "Careful restoration of original roofing elements while maintaining historical integrity.",
  },
  {
    id: 5,
    title: "HOA Complex Re-Roofing",
    category: "commercial",
    location: "Mount Laurel, NJ",
    image: "/lovable-uploads/bf4020b8-6da7-4ce5-a248-fa0f1be84a3e.png",
    description: "Multi-building project completed on schedule with minimal disruption to residents.",
  },
  {
    id: 6,
    title: "Custom Skylight Installation",
    category: "specialty",
    location: "Princeton, NJ",
    image: "/lovable-uploads/dcef4e80-01dd-41f6-b6c5-b186d347c576.png",
    description: "Energy-efficient skylights integrated with smart home technology.",
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-haddon-accent mx-auto mb-6"></div>
          <p className="text-haddon-slate text-lg">
            Browse our recent projects showcasing our commitment to quality and craftsmanship in every job we complete.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-10">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="residential" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "residential")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "commercial")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "specialty")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div 
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/75"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-haddon-slate mb-4">{selectedProject.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {selectedProject.location}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <Card 
    className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-4 text-white">
          <p className="text-sm font-medium uppercase tracking-wider">{project.category}</p>
          <h3 className="text-lg font-bold">{project.title}</h3>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold mb-1">{project.title}</h3>
      <p className="text-sm text-haddon-slate flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        {project.location}
      </p>
    </div>
  </Card>
);

export default PortfolioSection;
