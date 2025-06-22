import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-agri-green-600">광성</span>
              <span className="text-military-gray-600 text-sm ml-2">KWANGSUNG</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                회사소개
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                사업분야
              </button>
              <button 
                onClick={() => scrollToSection("certifications")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                인증자격
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                제품갤러리
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                사업실적
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-military-gray-700 hover:text-agri-green-600 px-2 py-2 text-sm font-medium transition-colors"
              >
                연락처
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-military-gray-700 hover:text-agri-green-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              회사소개
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              사업분야
            </button>
            <button 
              onClick={() => scrollToSection("certifications")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              인증자격
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              제품갤러리
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              사업실적
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-military-gray-700 hover:text-agri-green-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              연락처
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
