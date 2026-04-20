import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import de l'image complète des logos
import partnersImage from "figma:asset/a8466c3f49c03b62820c2f696e5022cc98b840d7.png";

const partners = [
  "Coopération Allemande",
  "KfW", 
  "CFEF",
  "Banque Mondiale (World Bank)",
  "TRANSFORME",
  "Cordaid",
  "BIO",
  "Enabel",
  "CDF",
  "PNUD (UNDP)",
  "FMO",
  "Incofin",
  "SUEDE",
  "AFD",
  "La France en RD Congo",
  "VISA",
  "UNCDF",
  "Mr. Loïc De Cannière"
];

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute w-full flex justify-center"
          >
            <div className="bg-white rounded-2xl px-16 py-10 shadow-2xl border border-gray-100 hover:shadow-cyan-200/50 transition-all duration-300 hover:scale-105">
              <div className="text-center font-bold text-xl tracking-tight whitespace-nowrap" style={{ color: '#00467F' }}>
                {partners[currentIndex]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
        {partners.map((partner, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? "w-5 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Voir le logo de ${partner}`}
            title={partner}
          />
        ))}
      </div>
    </div>
  );
}