import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBanner1 from "figma:asset/7c959db543aad1f14e540b341d9823681bfe4b85.png";
import heroBanner2 from "figma:asset/63321f94c50db0eb27e38c5361b2a4869920fb01.png";

const slides = [
  {
    id: 1,
    title: "Leader de l'inclusion financière en RDC",
    subtitle: "Renforcer les institutions financières de proximité pour un développement économique inclusif et durable",
    image: heroBanner1,
    cta1: { text: "Découvrir FPM SA", link: "/fpm-sa" },
    cta2: { text: "Découvrir nos services", link: "/services" },
    gradient: "from-[#00467F]/70 via-[#00467F]/60 to-transparent"
  },
  {
    id: 2,
    title: "Plus de 177 000 crédits accordés à travers la RDC",
    subtitle: "Plus de 10 ans d'expertise au service de l'inclusion financière et du développement des institutions de proximité",
    image: heroBanner2,
    cta1: { text: "Voir notre impact", link: "/impact" },
    cta2: { text: "Nos réalisations", link: "/publications" },
    gradient: "from-[#00AFEF]/70 via-[#00AFEF]/60 to-transparent"
  },
  {
    id: 3,
    title: "Présente partout en RDC grâce à notre vaste réseau d'institutions partenaires",
    subtitle: "Un réseau national d'experts pour accompagner les institutions financières dans leur développement",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzJTIwb2ZmaWNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNzc1NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    cta1: { text: "Devenir partenaire", link: "/contact" },
    cta2: { text: "À propos de nous", link: "/about" },
    gradient: "from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
        </motion.div>
      </AnimatePresence>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            >
              {slide.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed drop-shadow-lg"
            >
              {slide.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={slide.cta1.link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:gap-3 shadow-lg"
              >
                {slide.cta1.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={slide.cta2.link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                {slide.cta2.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-white border border-white/20 hover:scale-110"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-white border border-white/20 hover:scale-110"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/20">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}