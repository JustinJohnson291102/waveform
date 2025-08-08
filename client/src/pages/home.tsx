import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BrandCarousel from "@/components/brand-carousel";
import FeaturedCourses from "@/components/featured-courses";
import AboutSection from "@/components/about-section";
import PackagesSection from "@/components/packages-section";
import InstructorsSection from "@/components/instructors-section";
import StatisticsSection from "@/components/statistics-section";
import NewsletterSection from "@/components/newsletter-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BrandCarousel />
      <FeaturedCourses />
      <AboutSection />
      <PackagesSection />
      <InstructorsSection />
      <StatisticsSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
