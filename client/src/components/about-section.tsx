import { motion } from "framer-motion";
import { Crosshair, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-military-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">회사소개</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            정밀 제어 기술의 혁신을 통해 군사 보안과 농업 발전에 기여하는 전문 기술기업입니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern technology company office environment" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-agri-green-500 transform-gpu hover:shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl font-bold text-military-gray-800 mb-3 flex items-center">
                <Crosshair className="text-agri-green-600 mr-2" size={20} />
                핵심 사업분야
              </h3>
              <p className="text-military-gray-600 leading-relaxed">
                군·경 사격제어시스템 및 기술 개발 연구 용역(HW/SW), 스마트팜 ICT 기자재 제작, 
                각종 제어장비 관련 시스템 개발 및 생산을 전문으로 하는 기술기업입니다.
              </p>
              <div className="mt-3 text-sm text-military-gray-500">
                <p><strong>주요 생산품목:</strong> 통신 인터페이스 보드, BLDC/STEP/DC 모터 드라이버, 사격 통합 표적시스템, 센서 노드</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-tech-blue-500 transform-gpu hover:shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl font-bold text-military-gray-800 mb-3 flex items-center">
                <Users className="text-tech-blue-600 mr-2" size={20} />
                주요 고객사
              </h3>
              <p className="text-military-gray-600 leading-relaxed">
                군·경, 한국기계연구원, LG에너지솔루션, LG CNS, ㈜지움, ㈜가나텍, 
                ㈜프로이노텍, 황해정공 등과 장기적 파트너십을 구축하고 있습니다.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-military-gray-500 transform-gpu hover:shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl font-bold text-military-gray-800 mb-3 flex items-center">
                <Award className="text-military-gray-600 mr-2" size={20} />
                기술 역량 & 정부과제 참여
              </h3>
              <p className="text-military-gray-600 leading-relaxed">
                HW/SW 통합 개발, 펌웨어 설계, 통신보드 제작, 모터 드라이버 개발 등 
                정밀 제어 기술 전반에 걸친 종합적인 솔루션을 제공합니다.
              </p>
              <div className="mt-3 text-sm text-military-gray-500">
                <p><strong>2023년 수행:</strong> 스마트팜 ICT기자재 국가표준 확산 지원사업 (시제품 제작 및 제품 개선 지원)</p>
                <p><strong>과제규모:</strong> 총 29,770천원 (국가보조금 20,800천원, 자부담 8,970천원)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
