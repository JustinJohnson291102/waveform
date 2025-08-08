import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function InstructorsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const instructors = [
    {
      id: 1,
      name: "Kartik Kaushik",
      title: "Digital Marketing Expert",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 2,
      name: "Harsh Vikal",
      title: "Business Consultant",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 3,
      name: "Sumit Sengar",
      title: "Sales Coach",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 4,
      name: "Ujjawal Tilwani",
      title: "Life Coach",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 5,
      name: "Ayush Parmar",
      title: "Content Creator",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 6,
      name: "Sagar Poonia",
      title: "Public Speaker",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section className="py-20 bg-white" id="instructors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
            Skilled Introduce
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Top Class & Expert Instructors in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from top-class, expert instructors all in one place with KnowledgeWaveIndia.
          </p>
        </div>

        {/* Instructors Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex space-x-6 carousel-container animate-on-scroll"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {instructors.map((instructor) => (
                <Card
                  key={instructor.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative">
                    <img
                      src={instructor.image}
                      alt={`${instructor.name} - ${instructor.title}`}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{instructor.title}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">({instructor.rating} Ratings)</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-blue-600/10 hover:bg-blue-600 hover:text-white text-blue-600 transition-all duration-300"
                    >
                      View Profile
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
