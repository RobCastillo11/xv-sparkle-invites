import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Heart } from "lucide-react";

const MencionesEspeciales = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Con la bendición de
        </h2>
        <OrnamentDivider />

        <div className="mt-8 space-y-8">
          {/* Padres */}
          <div className="border border-gold/30 rounded-lg p-6 bg-cream-dark/50">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-sky-accent mb-3">
              Mis Padres
            </p>
            <p className="font-elegant text-xl sm:text-2xl text-foreground">
              Francisco Ledezma Rocha
            </p>
            <Heart className="w-4 h-4 text-gold mx-auto my-2" />
            <p className="font-elegant text-xl sm:text-2xl text-foreground">
              Mariela Sánchez García
            </p>
          </div>

          {/* Padrinos */}
          <div className="border border-gold/30 rounded-lg p-6 bg-cream-dark/50">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-sky-accent mb-3">
              Mis Padrinos
            </p>
            <p className="font-elegant text-xl sm:text-2xl text-foreground">
              Maribel Molina Molina
            </p>
            <Heart className="w-4 h-4 text-gold mx-auto my-2" />
            <p className="font-elegant text-xl sm:text-2xl text-foreground">
              Nicolás Ledezma Campos
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MencionesEspeciales;
