import { motion } from "framer-motion";

const projects = [
  {
    year: "2024년",
    title: "교전전술훈련시스템 유지보수",
    amount: "66,000천원",
    detail: "하도급 계약",
    contractNumber: "제2024LMR0093(00)호",
    color: "bg-agri-green-600"
  },
  {
    year: "2024년",
    title: "축소모델 구동 제어기 제작",
    amount: "19,000천원",
    detail: "한국기계연구원",
    contractNumber: "제 2024-A0588호",
    color: "bg-tech-blue-600"
  },
  {
    year: "2024년",
    title: "전장상황 묘사 제어장치",
    amount: "19,000천원",
    detail: "구매 계약",
    contractNumber: "제2024LMR0161(00)호",
    color: "bg-agri-green-600"
  },
  {
    year: "2024년",
    title: "표적자동화레일 시스템",
    amount: "16,000천원",
    detail: "표적제어시스템 3점",
    contractNumber: "024SCR0136(00)호",
    color: "bg-tech-blue-600"
  },
  {
    year: "2024년",
    title: "사격통제시스템 표적구동기",
    amount: "8,000천원",
    detail: "교체관련 구매 계약",
    contractNumber: "제2024SDG0049(00)호",
    color: "bg-agri-green-600"
  },
  {
    year: "2024년",
    title: "LG화학 분리막 검사기",
    amount: "5,100천원",
    detail: "너울 측정기 펌웨어",
    contractNumber: "㈜엘지화학 프로젝트",
    color: "bg-tech-blue-600"
  },
  {
    year: "2023년",
    title: "Retrofit 밸브 고장 검출용 컨트롤러",
    amount: "6,170천원",
    detail: "한국기계연구원",
    contractNumber: "제 2023-A1810호",
    color: "bg-military-gray-600"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-military-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">사업실적</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            2023-2024년 주요 프로젝트 수행 실적
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-agri-green-300 h-full"></div>
          
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-agri-green-600 font-bold text-sm">{project.year}</span>
                  <h3 className="text-lg font-bold text-military-gray-800 mt-2">{project.title}</h3>
                  <p className="text-military-gray-600 text-sm mt-2">{project.detail} {project.amount}</p>
                  <p className="text-xs text-military-gray-500 mt-1">{project.contractNumber}</p>
                </div>
              </div>
              
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${project.color} rounded-full border-4 border-white`}></div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-agri-green-600 mb-2">139,270</div>
            <div className="text-sm text-military-gray-600">총 계약금액 (천원)</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-tech-blue-600 mb-2">7</div>
            <div className="text-sm text-military-gray-600">주요 프로젝트 수행</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-military-gray-600 mb-2">8+</div>
            <div className="text-sm text-military-gray-600">주요 고객사 보유</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
