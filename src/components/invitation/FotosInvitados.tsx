import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Camera, ExternalLink } from "lucide-react";

const FotosInvitados = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Camera className="w-10 h-10 text-gold mx-auto mb-4" />
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Comparte tus Fotos
        </h2>
        <OrnamentDivider />

        <p className="font-elegant text-lg text-foreground/80 mt-6">
          ¡Sube las fotos que tomes en el evento para que juntos guardemos los
          mejores recuerdos!
        </p>

        <a
          href="https://drive.google.com/drive/folders/1bbwT6Tej8n7c9gUldokgPqn9DTHJvR25?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-gold/50 rounded-full text-gold font-body text-sm uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Subir Fotos
        </a>
      </motion.div>
    </section>
  );
};

export default FotosInvitados;
