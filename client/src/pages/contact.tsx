import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare, HeadphonesIcon, Users, Award } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Knowledge Wave India Pvt Ltd", "Tech Park, Electronic City", "Bangalore, Karnataka 560100"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 80 1234 5678", "+91 80 1234 5679"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@knowledgewaveindia.com", "support@knowledgewaveindia.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-orange-600"
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about courses, pricing, or enrollment",
      response: "Within 4 hours"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Help with platform issues or course access",
      response: "Within 2 hours"
    },
    {
      icon: Users,
      title: "Student Services",
      description: "Academic guidance and learning support",
      response: "Within 6 hours"
    },
    {
      icon: Award,
      title: "Corporate Training",
      description: "Custom training solutions for organizations",
      response: "Within 24 hours"
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We're Here to
              <span className="text-blue-600 block">Help You Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our courses or need support? Our dedicated team is ready 
              to assist you on your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-0 shadow-md"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="border-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Select onValueChange={handleSubjectChange}>
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="enrollment">Course Enrollment</SelectItem>
                            <SelectItem value="corporate">Corporate Training</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        required
                        rows={6}
                        className="border-gray-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Support Options */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
                <p className="text-lg text-gray-600">
                  Choose the support option that best fits your needs. Our team is committed 
                  to providing you with the assistance you deserve.
                </p>
              </div>

              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <Card
                    key={option.title}
                    className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-md"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <option.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {option.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{option.description}</p>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">
                              Response {option.response}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Link */}
              <Card className="mt-8 border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Looking for Quick Answers?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Check our FAQ section for instant answers to common questions.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our offices across India for in-person consultations and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Bangalore",
                address: "Tech Park, Electronic City",
                postal: "Karnataka 560100",
                phone: "+91 80 1234 5678",
                type: "Headquarters"
              },
              {
                city: "Mumbai",
                address: "Business District, Bandra East",
                postal: "Maharashtra 400051",
                phone: "+91 22 1234 5678",
                type: "Regional Office"
              },
              {
                city: "Delhi",
                address: "Cyber Hub, Gurgaon",
                postal: "Haryana 122002",
                phone: "+91 11 1234 5678",
                type: "Branch Office"
              }
            ].map((location, index) => (
              <Card
                key={location.city}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-0 shadow-md"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">
                      {location.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                  </div>
                  <div className="space-y-3 text-center">
                    <p className="text-gray-600">{location.address}</p>
                    <p className="text-gray-600">{location.postal}</p>
                    <p className="text-blue-600 font-semibold">{location.phone}</p>
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