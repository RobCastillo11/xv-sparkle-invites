import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Shirt } from "lucide-react";

const DressCode = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Shirt className="w-10 h-10 text-gold mx-auto mb-4" />

        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Código de Vestimenta
        </h2>

        <OrnamentDivider />

        <p className="font-elegant text-lg text-foreground mt-6">
          Formal
        </p>

        <p className="font-body text-sm text-muted-foreground mt-2">
          Te invitamos a vestir elegante para esta ocasión especial
        </p>

        {/* Color reservado */}
        <div className="mt-10 max-w-xs mx-auto border border-gold/30 rounded-xl p-6 bg-cream-dark/60 backdrop-blur-sm shadow-sm">

          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Color reservado
          </p>

          {/* Muestra del color */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#87CEEB] border-2 border-gold/40 shadow-md"></div>

            <p className="font-elegant text-lg text-foreground mt-3">
              Azul cielo
            </p>
          </div>

          <p className="font-body text-xs text-muted-foreground mt-4">
            Este color está reservado para el vestido de la quinceañera.
          </p>

        </div>

      </motion.div>
    </section>
  );
};

export default DressCode;