import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { CheckCircle2 } from "lucide-react";

const Confirmacion = () => {
  const { ref, isVisible } = useScrollReveal();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Confirmación de Asistencia
        </h2>
        <OrnamentDivider />

        <p className="font-elegant text-lg text-foreground/80 mt-6 mb-8">
          Tu presencia hará este día aún más especial
        </p>

        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.button
              key="btn"
              onClick={() => setConfirmed(true)}
              className="px-8 py-4 gold-gradient text-primary-foreground font-body text-sm uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              Confirmo mi Asistencia
            </motion.button>
          ) : (
            <motion.div
              key="confirmed"
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Confetti-like sparkles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 3 === 0 ? "hsl(43, 72%, 52%)" : i % 3 === 1 ? "hsl(204, 70%, 72%)" : "hsl(43, 60%, 70%)",
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    ease: "easeOut",
                  }}
                />
              ))}

              <CheckCircle2 className="w-16 h-16 text-gold" />
              <p className="font-display text-2xl text-gold">¡Gracias!</p>
              <p className="font-elegant text-lg text-foreground/80">
                Te esperamos con mucho cariño
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Confirmacion;
