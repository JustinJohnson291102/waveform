import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen, Award, MapPin, Calendar, Linkedin, Twitter } from "lucide-react";

export default function Instructors() {
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

  const instructors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Senior Full Stack Developer",
      company: "Google",
      specialization: "Web Development",
      image: "👨‍💻",
      rating: 4.9,
      students: 12500,
      courses: 8,
      experience: "15+ years",
      location: "Bangalore, India",
      bio: "Former Google senior engineer with expertise in React, Node.js, and cloud architecture. Passionate about teaching modern web development.",
      skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      achievements: [
        "Google Developer Expert",
        "Author of 3 technical books",
        "Speaker at 50+ conferences"
      ]
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Digital Marketing Director",
      company: "Facebook",
      specialization: "Digital Marketing",
      image: "👩‍💼",
      rating: 4.8,
      students: 8900,
      courses: 6,
      experience: "12+ years",
      location: "Mumbai, India",
      bio: "Digital marketing strategist who has helped brands achieve 10x growth through data-driven marketing campaigns and social media strategies.",
      skills: ["SEO", "SEM", "Social Media", "Analytics", "Content Strategy"],
      achievements: [
        "Marketing Week Award Winner",
        "Helped 100+ startups scale",
        "Featured in Forbes 30 Under 30"
      ]
    },
    {
      id: 3,
      name: "Aman Singh",
      title: "Lead UX Designer",
      company: "Apple",
      specialization: "UI/UX Design",
      image: "👨‍🎨",
      rating: 4.9,
      students: 6700,
      courses: 5,
      experience: "10+ years",
      location: "Delhi, India",
      bio: "Award-winning designer who has created user experiences for millions of users. Expert in design thinking and user-centered design.",
      skills: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"],
      achievements: [
        "Red Dot Design Award",
        "Design patents holder",
        "Mentor to 500+ designers"
      ]
    },
    {
      id: 4,
      name: "Dr. Sneha Gupta",
      title: "Data Science Lead",
      company: "Microsoft",
      specialization: "Data Science",
      image: "👩‍🔬",
      rating: 4.9,
      students: 5400,
      courses: 7,
      experience: "14+ years",
      location: "Hyderabad, India",
      bio: "PhD in Machine Learning with extensive industry experience in building ML models that drive business decisions at scale.",
      skills: ["Python", "R", "TensorFlow", "SQL", "Big Data"],
      achievements: [
        "AI Research Paper Citations: 2000+",
        "IBM Watson AI Challenge Winner",
        "TEDx Speaker on AI Ethics"
      ]
    },
    {
      id: 5,
      name: "Vikash Agarwal",
      title: "Business Strategy Consultant",
      company: "McKinsey & Company",
      specialization: "Business Strategy",
      image: "👔",
      rating: 4.7,
      students: 4200,
      courses: 4,
      experience: "16+ years",
      location: "Gurgaon, India",
      bio: "Former McKinsey partner specializing in digital transformation and growth strategies for Fortune 500 companies.",
      skills: ["Strategy", "Leadership", "Operations", "Finance", "Analytics"],
      achievements: [
        "Advised 200+ C-suite executives",
        "Harvard Business Review Contributor",
        "Startup Board Member"
      ]
    },
    {
      id: 6,
      name: "Arjun Kapoor",
      title: "Creative Director",
      company: "Adobe",
      specialization: "Photography & Design",
      image: "📸",
      rating: 4.8,
      students: 7800,
      courses: 6,
      experience: "11+ years",
      location: "Chennai, India",
      bio: "Award-winning photographer and creative director known for innovative visual storytelling and brand photography.",
      skills: ["Photography", "Photoshop", "Lightroom", "Creative Direction", "Brand Design"],
      achievements: [
        "International Photography Awards",
        "Worked with 50+ global brands",
        "Photography exhibition in 15 countries"
      ]
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
              Meet Our Instructors
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn from Industry
              <span className="text-blue-600 block">Experts & Leaders</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our world-class instructors bring real-world experience from top companies 
              and are passionate about sharing their knowledge with the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Expert Instructors", value: "200+", icon: Users },
              { label: "Years Experience", value: "2,000+", icon: Award },
              { label: "Students Taught", value: "50,000+", icon: BookOpen },
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

      {/* Instructors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Instructors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts who will guide your learning journey with their industry experience and teaching excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={instructor.id}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 border-0 shadow-lg bg-white"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{instructor.image}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{instructor.title}</p>
                    <p className="text-gray-500 text-sm">@ {instructor.company}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center space-x-6 mb-6 text-sm">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="font-semibold">{instructor.rating}</span>
                      </div>
                      <span className="text-gray-500">Rating</span>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold mb-1">{instructor.students.toLocaleString()}</div>
                      <span className="text-gray-500">Students</span>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold mb-1">{instructor.courses}</div>
                      <span className="text-gray-500">Courses</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{instructor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{instructor.experience} experience</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {instructor.specialization}
                    </Badge>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {instructor.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="text-xs bg-gray-100 text-gray-700">
                          {skill}
                        </Badge>
                      ))}
                      {instructor.skills.length > 3 && (
                        <Badge className="text-xs bg-gray-100 text-gray-700">
                          +{instructor.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {instructor.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-600 flex items-start">
                          <Award className="w-3 h-3 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Courses
                    </Button>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Become an Instructor</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Share your expertise with thousands of eager learners. Join our community of 
              world-class instructors and make a global impact through education.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Teach Global Audience</h3>
                <p className="text-gray-600 text-sm">Reach students from 45+ countries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Earn Recognition</h3>
                <p className="text-gray-600 text-sm">Build your personal brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
                <p className="text-gray-600 text-sm">Teach at your own pace</p>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Apply to Teach
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}