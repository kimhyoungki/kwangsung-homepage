import { motion } from "framer-motion";
import { Award, FileCheck, Shield, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: FileCheck,
    title: "사업자등록증",
    number: "305-31-70462",
    detail: "정식 법인사업자로 등록",
    color: "bg-military-gray-600"
  },
  {
    icon: Award,
    title: "정부과제 수행기업",
    number: "2023년 수행",
    detail: "스마트팜 ICT기자재 국가표준 확산 지원사업",
    color: "bg-agri-green-600"
  },
  {
    icon: Shield,
    title: "KS 표준 인증",
    number: "KS X 3265/3267",
    detail: "국가표준 ICT기자재 검정 완료 예정",
    color: "bg-tech-blue-600"
  },
  {
    icon: CheckCircle,
    title: "품질관리 시스템",
    number: "직접생산/위탁생산",
    detail: "엄격한 품질관리 하에 제품 생산",
    color: "bg-purple-600"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 lg:py-24 bg-gradient-to-br from-military-gray-50 to-agri-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">인증 및 자격</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            신뢰할 수 있는 기술력과 품질을 바탕으로 한 공인된 자격과 인증
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  rotateY: index % 2 === 0 ? 5 : -5,
                  scale: 1.02
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center">
                  <div className={`${cert.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-military-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-agri-green-600 font-semibold text-sm mb-2">{cert.number}</p>
                  <p className="text-military-gray-600 text-xs leading-relaxed">
                    {cert.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 추가 인증 정보 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-agri-green-600 mb-2">100%</h4>
              <p className="text-military-gray-600">정부과제 수행 성공률</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-tech-blue-600 mb-2">8+</h4>
              <p className="text-military-gray-600">주요 고객사 보유</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-military-gray-600 mb-2">2023</h4>
              <p className="text-military-gray-600">정부과제 수행 완료</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}