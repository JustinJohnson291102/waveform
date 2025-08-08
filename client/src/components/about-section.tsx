import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, GraduationCap, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const features = [
    "The Most World Class Instructors",
    "Access Your Class Anywhere",
    "Flexible Course Plan"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional corporate training session in modern office"
                className="rounded-2xl shadow-2xl w-full"
              />

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">25+</div>
                    <div className="text-sm text-gray-600">Top Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              About Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">25 Of Top</span> Courses<br />
              Now in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover a curated selection of the 25 best courses offered by KnowledgeWaveIndia, covering a diverse range of subjects. Whether you're looking to enhance your skills in technology, business, arts, or personal development, these top-rated courses provide comprehensive content and expert instruction.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <a href="#packages" className="flex items-center space-x-2">
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
