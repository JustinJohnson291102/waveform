import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, Search, Filter, BookOpen, Code, PieChart, Palette, Lightbulb, TrendingUp } from "lucide-react";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

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

  const categories = [
    { id: "tech", name: "Technology", icon: Code, color: "bg-blue-100 text-blue-800" },
    { id: "business", name: "Business", icon: TrendingUp, color: "bg-green-100 text-green-800" },
    { id: "design", name: "Design", icon: Palette, color: "bg-purple-100 text-purple-800" },
    { id: "marketing", name: "Marketing", icon: PieChart, color: "bg-orange-100 text-orange-800" },
    { id: "development", name: "Personal Development", icon: Lightbulb, color: "bg-yellow-100 text-yellow-800" },
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "tech",
      level: "intermediate",
      duration: "12 weeks",
      students: 2500,
      rating: 4.9,
      price: "₹12,999",
      image: "💻",
      description: "Master modern web development with React, Node.js, and MongoDB.",
      instructor: "Rahul Sharma",
      lessons: 45
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      category: "marketing",
      level: "beginner",
      duration: "8 weeks",
      students: 1800,
      rating: 4.8,
      price: "₹8,999",
      image: "📈",
      description: "Learn SEO, SEM, social media marketing, and content strategy.",
      instructor: "Priya Patel",
      lessons: 32
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      category: "design",
      level: "beginner",
      duration: "10 weeks",
      students: 2200,
      rating: 4.7,
      price: "₹10,999",
      image: "🎨",
      description: "Create beautiful and functional user interfaces and experiences.",
      instructor: "Aman Singh",
      lessons: 38
    },
    {
      id: 4,
      title: "Data Science with Python",
      category: "tech",
      level: "advanced",
      duration: "16 weeks",
      students: 1500,
      rating: 4.9,
      price: "₹15,999",
      image: "📊",
      description: "Analyze data and build machine learning models with Python.",
      instructor: "Dr. Sneha Gupta",
      lessons: 52
    },
    {
      id: 5,
      title: "Business Strategy & Leadership",
      category: "business",
      level: "intermediate",
      duration: "6 weeks",
      students: 900,
      rating: 4.6,
      price: "₹9,999",
      image: "👔",
      description: "Develop strategic thinking and leadership skills for business success.",
      instructor: "Vikash Agarwal",
      lessons: 24
    },
    {
      id: 6,
      title: "Creative Photography",
      category: "design",
      level: "beginner",
      duration: "8 weeks",
      students: 1200,
      rating: 4.8,
      price: "₹7,999",
      image: "📸",
      description: "Master photography techniques and post-processing skills.",
      instructor: "Arjun Kapoor",
      lessons: 30
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Explore Our Courses
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn New Skills &
              <span className="text-blue-600 block">Advance Your Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive collection of expert-led courses designed to help you 
              master in-demand skills and achieve your professional goals.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Categories</h2>
            <p className="text-lg text-gray-600">Explore courses across various domains</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-0 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <Badge className={`text-xs ${category.color}`}>
                    {courses.filter(c => c.category === category.id).length} courses
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                      <span className="text-6xl">{course.image}</span>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-white text-gray-800">
                      {course.level}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="text-xs bg-gray-100 text-gray-700">
                        {categories.find(c => c.id === course.category)?.name}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                        <div className="text-sm text-gray-500">by {course.instructor}</div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
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