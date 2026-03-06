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

        <p className="font-body text-sm text-muted-foreground mt-2">
          Color Azul reservado
        </p>

        {/* Aviso color reservado */}
        <div className="mt-10 max-w-sm mx-auto border border-gold/30 rounded-xl p-6 bg-cream-dark/60 backdrop-blur-sm shadow-sm">

          {/* muestra del color */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#87CEEB] border-2 border-gold/40 shadow-md"></div>
          </div>

          <p className="font-body text-sm text-muted-foreground mt-3">
            Agradecemos a nuestras invitadas elegir otro color
          </p>

        </div>

      </motion.div>
    </section>
  );
};

export default DressCode;