export default function Footer() {
  return (
    <footer className="bg-military-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-agri-green-400">광성</span>
              <span className="text-military-gray-300 text-sm ml-2">KWANGSUNG</span>
            </div>
            <p className="text-military-gray-300 leading-relaxed">
              정밀 제어 기술의 혁신을 통해 군사 보안과 농업 발전에 기여하는 전문 기술기업
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-agri-green-400">사업분야</h4>
            <ul className="space-y-2 text-military-gray-300">
              <li>• 스마트팜 ICT 기자재</li>
              <li>• 군·경 사격제어시스템</li>
              <li>• 맞춤형 제어장비 개발</li>
              <li>• 외주 연구개발</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-agri-green-400">연락처</h4>
            <div className="space-y-2 text-military-gray-300">
              <p>대전광역시 대덕구 대전로1177번길2-3(오정동) 광성</p>
              <p>Tel: 010-3404-6543</p>
              <p>Fax: 0504-274-6543</p>
              <p>Email: sasimi6543@nate.com</p>
              <p className="text-agri-green-400 font-semibold">www.ks1234.co.kr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-military-gray-700 mt-8 pt-8 text-center">
          <p className="text-military-gray-400">
            &copy; 2025 광성 (KWANGSUNG). All rights reserved. | 사업자등록번호: 305-31-70462
          </p>
        </div>
      </div>
    </footer>
  );
}
