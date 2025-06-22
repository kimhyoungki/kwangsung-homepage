import { motion } from "framer-motion";
import { Cpu, Zap, Radio, Cog, Gauge, Wifi } from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "통신 인터페이스 보드",
    description: "유/무선 겸용 통신 모듈로 안정적인 데이터 전송 지원",
    features: ["RS485/Ethernet 지원", "무선 통신 기능", "실시간 데이터 처리"],
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "통신장비"
  },
  {
    icon: Zap,
    title: "BLDC/STEP/DC 모터 드라이버",
    description: "정밀 제어가 가능한 고효율 모터 드라이버 시스템",
    features: ["PWM 제어", "과전류 보호", "속도/위치 제어"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "모터제어"
  },
  {
    icon: Radio,
    title: "사격 통합 표적시스템",
    description: "군사훈련용 자동화 표적 제어 및 관리 시스템",
    features: ["자동화 레일 시스템", "무선 제어", "실시간 모니터링"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "군사장비"
  },
  {
    icon: Cog,
    title: "센서 노드",
    description: "환경 모니터링을 위한 고정밀 센서 네트워크 시스템",
    features: ["온도/습도/CO2 측정", "KS 표준 준수", "장거리 통신"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "센서장비"
  },
  {
    icon: Gauge,
    title: "구동기 제어 시스템",
    description: "스마트팜 천창, 측창, 유동팬 제어를 위한 통합 시스템",
    features: ["KS X 3265 표준", "DC 24V 구동", "스위치 제어"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "농업장비"
  },
  {
    icon: Wifi,
    title: "통합 제어 플랫폼",
    description: "복합노드 기반 스마트 농업 통합 관리 시스템",
    features: ["웹 기반 모니터링", "실시간 제어", "데이터 분석"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "소프트웨어"
  }
];

export default function ProductGallery() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">제품 갤러리</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            광성의 핵심 기술력이 집약된 주요 제품 라인업
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-agri-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <IconComponent size={20} className="text-military-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-military-gray-800 mb-3 group-hover:text-agri-green-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-military-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-military-gray-700">주요 특징:</h4>
                    <ul className="text-xs text-military-gray-500 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-agri-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 제품 문의 CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-military-gray-50 to-agri-green-50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-military-gray-800 mb-4">맞춤형 제품 개발 문의</h3>
          <p className="text-military-gray-600 mb-6 max-w-2xl mx-auto">
            고객의 특별한 요구사항에 맞춘 맞춤형 제품 개발 및 기술 상담을 제공합니다
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-agri-green-600 hover:bg-agri-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            제품 문의하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}