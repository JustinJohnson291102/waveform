import { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

export default function StatisticsSection() {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    trainers: 0,
    successRate: 0
  });

  const stats = [
    {
      icon: GraduationCap,
      value: 80000,
      suffix: "K+",
      label: "Enrolled Students",
      description: "Students learning across all our platforms"
    },
    {
      icon: BookOpen,
      value: 80,
      suffix: "+",
      label: "Live Courses",
      description: "Active courses across multiple disciplines"
    },
    {
      icon: Users,
      value: 80,
      suffix: "+",
      label: "Best Trainers",
      description: "Expert instructors from industry leaders"
    },
    {
      icon: Trophy,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Student satisfaction and completion rate"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const increment = stat.value / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }

          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'students' : index === 1 ? 'courses' : index === 2 ? 'trainers' : 'successRate']: Math.floor(current)
          }));
        }, 16);
      });
    };

    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('statistics-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const formatValue = (value: number, suffix: string) => {
    if (suffix === "K+") {
      return value >= 1000 ? `${Math.floor(value / 1000)}K+` : `${value}+`;
    }
    return `${value}${suffix}`;
  };

  return (
    <section id="statistics-section" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Success in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with our expert-led courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const counterValue = index === 0 ? counters.students : 
                               index === 1 ? counters.courses : 
                               index === 2 ? counters.trainers : 
                               counters.successRate;

            return (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  {formatValue(counterValue, stat.suffix)}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/80">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
