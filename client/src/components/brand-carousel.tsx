import { useEffect, useRef } from "react";

export default function BrandCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const brands = [
    { name: "Microsoft", icon: "🏢" },
    { name: "Google", icon: "🔍" },
    { name: "Amazon", icon: "📦" },
    { name: "Apple", icon: "🍎" },
    { name: "Meta", icon: "👥" },
    { name: "Netflix", icon: "🎬" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Trusted by Leading Organizations
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex items-center justify-center space-x-12 carousel-container"
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{brand.icon}</div>
                  <div className="text-xs text-gray-600 font-medium">{brand.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
