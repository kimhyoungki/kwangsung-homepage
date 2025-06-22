import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CertificationsSection from "@/components/certifications-section";
import ProductGallery from "@/components/product-gallery";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />
      <ProductGallery />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
