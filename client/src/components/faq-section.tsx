import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Knowledge Wave India?",
      answer: "Knowledge Wave India is an online platform that offers digital courses and skill-based trainings to help individuals enhance their skills and knowledge in all the fields relevant in today's time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including major credit cards, debit cards, and online payment platforms. Simply choose your preferred payment method during the checkout process."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we take the security of your payment information seriously. We use industry-standard encryption and secure payment gateways to ensure that your payment details are protected."
    },
    {
      question: "Can I contact support if I have questions or issues?",
      answer: "Absolutely! We have a dedicated support team ready to assist you. If you have any questions, technical difficulties, or require assistance, you can reach out to our support team through the contact information provided on our website."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
                alt="Professional consultation meeting in modern office"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              FAQ's
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common queries in our Frequently Asked Questions section.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                    <div className="flex-shrink-0 ml-4">
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 pb-5' : 'max-h-0 pb-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
