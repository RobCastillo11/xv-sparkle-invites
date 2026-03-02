import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Church, MapPin, Clock } from "lucide-react";

const CeremoniaReligiosa = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Church className="w-10 h-10 text-gold mx-auto mb-4" />
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Ceremonia Religiosa
        </h2>
        <OrnamentDivider />

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-elegant text-lg">1:00 PM</span>
          </div>

          <p className="font-elegant text-lg text-foreground">
            Templo de Nuestra Señora de Guadalupe
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Guadalupe, San Felipe, Guanajuato
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 border border-gold/50 rounded-full text-gold font-body text-sm uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Ver Ubicación
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CeremoniaReligiosa;
