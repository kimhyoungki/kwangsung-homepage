import { motion } from "framer-motion";
import { Sprout, Target, Settings, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "스마트팜 ICT 기자재",
    description: "KS X 3265/3267 기반 구동기 및 센서 복합노드, 통합환경제어 시스템 개발",
    features: ["천창/측창/유동팬 구동기", "온도/습도/CO2 센서", "통신 프로토콜 규격 적용"],
    bgColor: "from-agri-green-50 to-agri-green-100",
    borderColor: "border-agri-green-200",
    iconBg: "bg-agri-green-600"
  },
  {
    icon: Target,
    title: "군·경 사격제어시스템",
    description: "무선 통신 기반 사격장 제어 기술 및 표적 자동화 시스템",
    features: ["표적자동화레일 시스템", "전장상황 묘사 제어장치", "교전전술훈련시스템"],
    bgColor: "from-military-gray-50 to-military-gray-100",
    borderColor: "border-military-gray-200",
    iconBg: "bg-military-gray-700"
  },
  {
    icon: Settings,
    title: "맞춤형 제어장비 개발",
    description: "고객 요구사항에 맞춘 회로 설계, 펌웨어, 통신보드 제작",
    features: ["BLDC/STEP/DC 모터 드라이버", "통신 인터페이스 보드", "센서 노드 개발"],
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-tech-blue-200",
    iconBg: "bg-tech-blue-600"
  },
  {
    icon: FlaskConical,
    title: "외주 연구개발",
    description: "연구기관 및 기업 대상 기술 개발 연구 용역 서비스",
    features: ["축소모델 구동 제어기", "분리막 검사기 펌웨어", "밸브 고장 검출 컨트롤러"],
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-600"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">사업분야</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            정밀 제어 기술을 바탕으로 한 4가지 핵심 사업영역
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  rotateX: 10, 
                  rotateY: index % 2 === 0 ? 5 : -5,
                  scale: 1.02
                }}
                className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border ${service.borderColor} transform-gpu`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center">
                  <div className={`${service.iconBg} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-military-gray-800 mb-3">{service.title}</h3>
                  <p className="text-military-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="text-xs text-military-gray-500 space-y-1 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
