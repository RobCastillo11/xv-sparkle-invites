import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Music } from "lucide-react";

const SesionFotos = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Music className="w-10 h-10 text-gold mx-auto mb-4" />
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Mi Canción Favorita
        </h2>
        <OrnamentDivider />

        <p className="font-elegant text-lg text-foreground/80 mt-6 mb-8">
          Disfruta de esta canción especial mientras recuerdas este día
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://open.spotify.com/embed/track/0reBZSEtwbvqkXoWGtmV0k?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SesionFotos;
