import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Shirt } from "lucide-react";

const CodigoVestimenta = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
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

        <div className="mt-8">
          <p className="font-display text-3xl text-foreground">Semi-formal</p>
          <p className="font-body text-sm text-muted-foreground mt-3">
            Te invitamos a vestir elegante para esta ocasión especial
          </p>

          {/* Color palette hint */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-8 rounded-full border-2 border-gold/30" style={{ background: "hsl(204, 70%, 72%)" }} title="Azul cielo" />
            <div className="w-8 h-8 rounded-full border-2 border-gold/30" style={{ background: "hsl(43, 72%, 52%)" }} title="Dorado" />
            <div className="w-8 h-8 rounded-full border-2 border-gold/30 bg-foreground/80" title="Oscuro" />
            <div className="w-8 h-8 rounded-full border-2 border-gold/30 bg-cream" title="Claro" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CodigoVestimenta;
