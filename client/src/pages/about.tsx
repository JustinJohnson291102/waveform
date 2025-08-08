import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Lightbulb, Globe, BookOpen } from "lucide-react";

export default function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "50,000+" },
    { icon: BookOpen, label: "Courses Available", value: "500+" },
    { icon: Award, label: "Expert Instructors", value: "200+" },
    { icon: Globe, label: "Countries Served", value: "45+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in education and student experience."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge learning methods and technologies to enhance education."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning community for students worldwide."
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Empowering students to achieve their personal and professional goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              About Knowledge Wave India
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Lives Through
              <span className="text-blue-600 block">Quality Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to providing world-class online education that empowers individuals 
              to achieve their dreams and build successful careers in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Knowledge Wave India, we believe that quality education should be accessible to everyone, 
                everywhere. Our mission is to democratize learning by providing comprehensive, practical, 
                and industry-relevant courses that prepare students for the challenges of tomorrow.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge technology with expert instruction to create an immersive 
                learning experience that goes beyond traditional education methods.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">Industry-expert instructors with real-world experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">Hands-on projects and practical assignments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">Flexible learning schedules to fit your lifestyle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">Career support and job placement assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind Knowledge Wave India's success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Rajesh Kumar", role: "CEO & Founder", expertise: "Educational Leadership" },
              { name: "Priya Sharma", role: "Chief Technology Officer", expertise: "EdTech Innovation" },
              { name: "Amit Patel", role: "Head of Curriculum", expertise: "Learning Design" }
            ].map((member, index) => (
              <Card
                key={member.name}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}