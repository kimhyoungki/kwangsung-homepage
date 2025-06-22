import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";
import ParticleSystem from "@/components/particle-system";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-military-gray-800 via-military-gray-700 to-agri-green-800 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-agri-green-300">광성</span> - 정밀 제어 기술의 리더
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            군·경 훈련장부터 스마트팜까지,<br/>
            <span className="text-agri-green-300 font-semibold">광성의 기술이 함께합니다</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => scrollToSection("services")}
              className="bg-agri-green-600 hover:bg-agri-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg text-base"
            >
              사업분야 보기
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-military-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors text-base"
            >
              문의하기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
