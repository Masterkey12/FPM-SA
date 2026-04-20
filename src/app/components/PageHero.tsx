import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  gradient?: string;
  height?: "small" | "medium" | "large";
  imagePosition?: string;
}

export function PageHero({ 
  title, 
  subtitle, 
  image, 
  gradient = "from-[#00467F]/70 via-[#00467F]/60 to-transparent",
  height = "medium",
  imagePosition = "center"
}: PageHeroProps) {
  const heightClasses = {
    small: "h-[300px]",
    medium: "h-[400px]",
    large: "h-[500px]"
  };

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`}></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}