import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function PackagesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const packages = [
    {
      id: 1,
      name: "Grow Wave",
      description: "Perfect for beginners starting their learning journey",
      price: 2000,
      originalPrice: 3000,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Basic Business Courses",
        "Email Support",
        "Basic Certificate"
      ],
      popular: false,
      badge: "Popular",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Expert Wave",
      description: "Most comprehensive package for serious learners",
      price: 4000,
      originalPrice: 4500,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Advanced Courses",
        "Priority Support",
        "Expert Certificate",
        "1-on-1 Mentoring"
      ],
      popular: true,
      badge: "Recommended",
      badgeColor: "bg-blue-600"
    },
    {
      id: 3,
      name: "Finance Wave",
      description: "Financial literacy and investment courses",
      price: 6700,
      originalPrice: 7500,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Finance Courses",
        "Investment Guidance",
        "Financial Certificate",
        "Portfolio Support"
      ],
      popular: false,
      badge: "Finance",
      badgeColor: "bg-green-600"
    },
    {
      id: 4,
      name: "Creator Wave",
      description: "Content creation and digital marketing focused",
      price: 13500,
      originalPrice: 15800,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Content Creation",
        "Social Media Marketing",
        "Creator Certificate",
        "Brand Building Support"
      ],
      popular: false,
      badge: "Creative",
      badgeColor: "bg-purple-600"
    },
    {
      id: 5,
      name: "Tech Wave",
      description: "Specialized technology and programming courses",
      price: 20000,
      originalPrice: 23000,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "All Tech Courses",
        "24/7 Premium Support",
        "Professional Certificate",
        "Career Guidance",
        "Job Placement Support"
      ],
      popular: false,
      badge: "Premium",
      badgeColor: "bg-blue-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
            Top Class Packages
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Explore Our World's Best Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world's best learning packages with KnowledgeWaveIndia, offering top-notch courses in various fields designed for professional growth.
          </p>
        </div>

        {/* Packages Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex space-x-6 carousel-container animate-on-scroll"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    pkg.popular ? 'border-2 border-blue-600 relative' : ''
                  }`}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={`${pkg.name} package`}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${pkg.badgeColor} text-white`}>
                      {pkg.badge}
                    </Badge>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-600/10 text-blue-600">Development</Badge>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-gray-600 text-sm">(4.8 Reviews)</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>

                    <div className="flex items-baseline space-x-2 mb-6">
                      <span className="text-3xl font-bold text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-4xl font-bold text-blue-600">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300"
            onClick={() => scrollCarousel('left')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300"
            onClick={() => scrollCarousel('right')}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
