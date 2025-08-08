import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Clock, ArrowRight } from "lucide-react";

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "tech", name: "Technology" },
    { id: "business", name: "Business" },
    { id: "creative", name: "Creative" },
    { id: "personal", name: "Personal Development" },
  ];

  const courses = [
    {
      id: 1,
      title: "10 Ways to Grow Your YouTube Channel",
      category: "business",
      price: 2499,
      originalPrice: 3999,
      lessons: 5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Business",
      badgeColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "Adobe Photoshop Mastery",
      category: "creative",
      price: 3499,
      originalPrice: 4999,
      lessons: 5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Creative",
      badgeColor: "bg-cyan-500",
    },
    {
      id: 3,
      title: "Python for Beginners",
      category: "tech",
      price: 4999,
      originalPrice: 6999,
      lessons: 5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Technology",
      badgeColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Public Speaking Mastery",
      category: "personal",
      price: 1999,
      originalPrice: 2999,
      lessons: 5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Personal",
      badgeColor: "bg-purple-500",
    },
    {
      id: 5,
      title: "Excel Advanced Course",
      category: "business",
      price: 2999,
      originalPrice: 4499,
      lessons: 10,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Business",
      badgeColor: "bg-blue-600",
    },
    {
      id: 6,
      title: "Digital Marketing Mastery",
      category: "business",
      price: 5999,
      originalPrice: 7999,
      lessons: 8,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Business",
      badgeColor: "bg-blue-600",
    },
    {
      id: 7,
      title: "Complete Web Development",
      category: "tech",
      price: 7999,
      originalPrice: 9999,
      lessons: 12,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Technology",
      badgeColor: "bg-green-500",
    },
    {
      id: 8,
      title: "Content Creation Mastery",
      category: "creative",
      price: 3999,
      originalPrice: 5499,
      lessons: 6,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badge: "Creative",
      badgeColor: "bg-cyan-500",
    },
  ];

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
            Trending Courses
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Top Courses We Have
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular and sought-after courses designed to elevate your skills and knowledge in today's competitive market.
          </p>
        </div>

        {/* Course Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-blue-600 shadow-sm"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${course.badgeColor} text-white`}>
                  {course.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">({course.rating})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300 cursor-pointer line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {course.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{course.price.toLocaleString()}
                    </span>
                  </div>
                  <Button className="bg-blue-600/10 hover:bg-blue-600 hover:text-white text-blue-600 transition-all duration-300">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <a href="#packages" className="flex items-center space-x-2">
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
