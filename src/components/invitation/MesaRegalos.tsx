import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Gift, Mail } from "lucide-react";

const MesaRegalos = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Mesa de Regalos
        </h2>
        <OrnamentDivider />

        <p className="font-elegant text-lg text-foreground/80 mt-6">
          Tu presencia es el mejor regalo, pero si deseas obsequiarme algo...
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          
          {/* Regalos */}
          <div className="flex flex-col items-center p-6 border border-gold/30 rounded-lg bg-cream-dark/50">
            <motion.div
              animate={
                isVisible
                  ? { y: [0, -6, 0], scale: [1, 1.05, 1] }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gift className="w-8 h-8 text-gold mb-3" />
            </motion.div>

            <p className="font-display text-lg text-foreground">Regalos</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              Opcionales
            </p>
          </div>

          {/* Lluvia de sobres */}
          <div className="flex flex-col items-center p-6 border border-gold/30 rounded-lg bg-cream-dark/50">
            <motion.div
              animate={
                isVisible
                  ? { y: [0, -6, 0], scale: [1, 1.05, 1] }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5, // intercalado
              }}
            >
              <Mail className="w-8 h-8 text-gold mb-3" />
            </motion.div>

            <p className="font-display text-lg text-foreground">
              Lluvia de
            </p>
            <p className="font-display text-lg text-foreground">
              Sobres
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default MesaRegalos;