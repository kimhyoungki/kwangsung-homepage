import { useState } from "react";
import { motion } from "framer-motion";
import { Building, User, MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "문의 전송 실패",
        description: "다시 시도해 주세요.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "필수 항목을 입력해 주세요",
        description: "이름, 이메일, 문의내용은 필수 입력 항목입니다.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-military-gray-800 mb-4">연락처</h2>
          <p className="text-lg text-military-gray-600 max-w-2xl mx-auto">
            프로젝트 문의 및 기술 상담을 위해 언제든 연락주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-military-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-military-gray-800 mb-6">회사정보</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-agri-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-military-gray-800">회사명</h4>
                    <p className="text-military-gray-600">광성 (KWANGSUNG)</p>
                    <p className="text-sm text-military-gray-500">사업자등록번호: 305-31-70462</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-tech-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-military-gray-800">대표자</h4>
                    <p className="text-military-gray-600">김형기</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-military-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-military-gray-800">주소</h4>
                    <p className="text-military-gray-600">대전광역시 대덕구 대전로1177번길2-3(오정동) 광성</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-agri-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-military-gray-800">연락처</h4>
                    <p className="text-military-gray-600">전화: 010-3404-6543</p>
                    <p className="text-military-gray-600">팩스: 0504-274-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-tech-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-military-gray-800">이메일</h4>
                    <p className="text-military-gray-600">sasimi6543@nate.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-military-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-military-gray-800 mb-6">문의하기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-military-gray-700 mb-2">성명 *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="홍길동"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-military-gray-700 mb-2">회사명</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="회사명 또는 소속"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-military-gray-700 mb-2">이메일 *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="contact@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-military-gray-700 mb-2">연락처</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-military-gray-700 mb-2">문의 분야</label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="문의 분야를 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smart-farm">스마트팜 ICT 기자재</SelectItem>
                    <SelectItem value="shooting-system">군·경 사격제어시스템</SelectItem>
                    <SelectItem value="custom-development">맞춤형 제어장비 개발</SelectItem>
                    <SelectItem value="rd-services">외주 연구개발</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-military-gray-700 mb-2">문의 내용 *</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="문의하실 내용을 자세히 적어주세요..."
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={submitMutation.isPending}
                className="w-full bg-agri-green-600 hover:bg-agri-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                <Send className="mr-2" size={16} />
                {submitMutation.isPending ? "전송 중..." : "문의 보내기"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
