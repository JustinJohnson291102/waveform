import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Clock, Award, Zap, Crown, Rocket } from "lucide-react";

export default function Packages() {
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

  const packages = [
    {
      id: 1,
      name: "Grow Wave",
      icon: Zap,
      price: "₹4,999",
      originalPrice: "₹7,999",
      duration: "3 months",
      students: 1500,
      rating: 4.7,
      popular: false,
      courses: 15,
      features: [
        "15 Professional Courses",
        "Lifetime Access to Materials",
        "Basic Support via Email",
        "Course Completion Certificates",
        "Mobile & Desktop Access",
        "Downloadable Resources"
      ],
      description: "Perfect for beginners starting their learning journey"
    },
    {
      id: 2,
      name: "Expert Wave",
      icon: Crown,
      price: "₹8,999",
      originalPrice: "₹12,999",
      duration: "6 months",
      students: 2200,
      rating: 4.8,
      popular: true,
      courses: 30,
      features: [
        "30 Advanced Courses",
        "Lifetime Access to Materials",
        "Priority Support (24/7)",
        "Verified Certificates",
        "1-on-1 Mentorship Sessions",
        "Live Q&A Sessions",
        "Industry Project Access",
        "Career Guidance"
      ],
      description: "Most popular choice for serious learners and professionals"
    },
    {
      id: 3,
      name: "Finance Wave",
      icon: Award,
      price: "₹6,999",
      originalPrice: "₹9,999",
      duration: "4 months",
      students: 1800,
      rating: 4.6,
      popular: false,
      courses: 20,
      features: [
        "20 Finance-Focused Courses",
        "Lifetime Access to Materials",
        "Expert Financial Mentors",
        "Industry Certificates",
        "Stock Market Simulations",
        "Investment Portfolio Reviews",
        "Tax Planning Guidance"
      ],
      description: "Specialized package for finance and investment enthusiasts"
    },
    {
      id: 4,
      name: "Creator Wave",
      icon: Star,
      price: "₹5,999",
      originalPrice: "₹8,999",
      duration: "4 months",
      students: 1300,
      rating: 4.7,
      popular: false,
      courses: 18,
      features: [
        "18 Creative Courses",
        "Lifetime Access to Materials",
        "Creative Tools & Software",
        "Portfolio Development",
        "Brand Building Strategies",
        "Social Media Growth",
        "Monetization Techniques"
      ],
      description: "Designed for content creators and creative professionals"
    },
    {
      id: 5,
      name: "Tech Wave",
      icon: Rocket,
      price: "₹12,999",
      originalPrice: "₹18,999",
      duration: "12 months",
      students: 3000,
      rating: 4.9,
      popular: false,
      courses: 50,
      features: [
        "50 Technical Courses",
        "Lifetime Access to Materials",
        "Code Review Sessions",
        "Industry Certifications",
        "Real-world Projects",
        "Job Placement Assistance",
        "Technical Interview Prep",
        "GitHub Portfolio Building",
        "Open Source Contributions"
      ],
      description: "Complete tech education package for aspiring developers"
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
              Learning Packages
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your Perfect
              <span className="text-blue-600 block">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select from our carefully curated learning packages designed to accelerate your career 
              growth and help you master new skills efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Learners", value: "10,000+", icon: Users },
              { label: "Course Hours", value: "2,500+", icon: Clock },
              { label: "Completion Rate", value: "94%", icon: Award },
              { label: "Average Rating", value: "4.8/5", icon: Star }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each package is designed with specific learning goals and career outcomes in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 border-0 shadow-lg relative ${
                  pkg.popular 
                    ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' 
                    : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pkg.duration} access</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>
                    <Badge className="w-full justify-center bg-gray-100 text-gray-800">
                      {pkg.courses} Courses Included
                    </Badge>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Package FAQs</h2>
            <p className="text-xl text-gray-600">
              Common questions about our learning packages
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: "Can I switch between packages?",
                answer: "Yes, you can upgrade your package at any time. The price difference will be calculated and you'll get immediate access to additional features."
              },
              {
                question: "Do packages include lifetime access?",
                answer: "All packages include lifetime access to course materials, but premium support and live sessions are available for the specified package duration."
              },
              {
                question: "What's included in mentorship sessions?",
                answer: "1-on-1 mentorship includes career guidance, skill assessment, project reviews, and personalized learning path recommendations."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No, the displayed prices are all-inclusive. There are no hidden fees or additional charges for any package features."
              }
            ].map((faq, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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