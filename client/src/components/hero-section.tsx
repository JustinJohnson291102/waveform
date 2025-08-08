import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Palette } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-600/5 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-semibold">
                🚀 Professional Learning Platform
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Never Stop
              <span className="text-blue-600 block">Learning</span>
              <span className="text-gray-600">Life Never Stop</span>
              <span className="text-cyan-500">Teaching</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every teaching and learning journey is unique. We'll help guide your way with world-class instructors and comprehensive courses designed for professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <a href="#packages" className="flex items-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <a href="#about" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </Button>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Tech Wave</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Palette className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-600">Creator Wave</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional business team collaborating in modern office"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-gentle">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">80K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-500">80+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
