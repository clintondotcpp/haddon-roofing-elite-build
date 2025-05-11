
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between container-padding">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/b7bb27ee-7f48-4ea5-854e-09ce2103bc5f.png"
            alt="Haddon Roofing"
            className="h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              Home
            </Link>
            <a
              href="#services"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              About
            </a>
            <Link
              to="/service-areas"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              Service Areas
            </Link>
            <Link
              to="/blog"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              Blog
            </Link>
            <a
              href="#contact"
              className={`font-medium hover:text-haddon-accent transition-colors ${
                isScrolled ? "text-haddon-navy" : "text-white"
              }`}
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button className={`${isScrolled ? "bg-haddon-navy" : "bg-haddon-accent"} hover:bg-haddon-accent transition-colors`}>
              <a href="#contact" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> Free Estimate
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 ${isScrolled ? "bg-haddon-navy" : "bg-white"} transition-transform ${
              mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 ${isScrolled ? "bg-haddon-navy" : "bg-white"} transition-opacity ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 ${isScrolled ? "bg-haddon-navy" : "bg-white"} transition-transform ${
              mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <Link
            to="/"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#services"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <Link
            to="/service-areas"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service Areas
          </Link>
          <Link
            to="/blog"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="text-haddon-navy font-medium py-2 hover:text-haddon-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="bg-haddon-navy hover:bg-haddon-accent transition-colors w-full">
            <a href="#contact" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> Free Estimate
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
