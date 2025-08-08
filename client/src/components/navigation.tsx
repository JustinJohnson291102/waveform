import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, AudioWaveform } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courseCategories = [
    { name: "Tech Courses", href: "#courses", icon: "💻" },
    { name: "Business & Marketing", href: "#courses", icon: "📈" },
    { name: "Creative Arts", href: "#courses", icon: "🎨" },
    { name: "Personal Development", href: "#courses", icon: "👤" },
  ];

  const packages = [
    { name: "Grow Wave", href: "#packages" },
    { name: "Expert Wave", href: "#packages" },
    { name: "Finance Wave", href: "#packages" },
    { name: "Creator Wave", href: "#packages" },
    { name: "Tech Wave", href: "#packages" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <AudioWaveform className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Knowledge<span className="text-blue-600">Wave</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Home
            </a>
            
            {/* Packages Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                <span>Packages</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {packages.map((pkg) => (
                    <a
                      key={pkg.name}
                      href="/packages"
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {pkg.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {courseCategories.map((category) => (
                    <a
                      key={category.name}
                      href="/courses"
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              About Us
            </a>

            <a href="/instructors" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Instructors
            </a>

            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Contact Us
            </a>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <a href="#packages">Log In / SignUp</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>

                  <a
                    href="/packages"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Packages
                  </a>

                  <a
                    href="/courses"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </a>

                  <a
                    href="/about"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>

                  <a
                    href="/instructors"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instructors
                  </a>

                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
