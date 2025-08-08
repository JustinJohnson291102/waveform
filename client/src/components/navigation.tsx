import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, AudioWaveform } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courseCategories = [
    { name: "Tech Courses", href: "#courses", icon: "💻" },
    { name: "Business & Marketing", href: "#courses", icon: "📈" },
    { name: "Creative Arts", href: "#courses", icon: "🎨" },
    { name: "Personal Development", href: "#courses", icon: "👤" },
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
              Knowledge<span className="text-blue-600">AudioWaveform</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4">
                    {courseCategories.map((category) => (
                      <NavigationMenuLink
                        key={category.name}
                        href={category.href}
                        className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        <span className="mr-3 text-lg">{category.icon}</span>
                        <span>{category.name}</span>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#packages"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Packages
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#instructors"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Instructors
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <a href="#packages">Enroll Now</a>
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
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Courses</h3>
                    <div className="space-y-2">
                      {courseCategories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="mr-3">{category.icon}</span>
                          <span>{category.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#packages"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Packages
                  </a>

                  <a
                    href="#instructors"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instructors
                  </a>

                  <a
                    href="#about"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>

                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
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
