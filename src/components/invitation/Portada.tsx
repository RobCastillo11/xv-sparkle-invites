import { motion } from "framer-motion";
import portadaImg from "@/assets/portada.jpeg";

const Portada = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-40 sm:pt-32 px-6 py-20 overflow-hidden">

      {/* Imagen de fondo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${portadaImg})` }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Capa oscura muy sutil */}
      <div className="absolute inset-0 bg-black/15 z-[1]" />

      {/* Gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/40 z-[2]" />

      {/* Esquinas decorativas */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-gold/70 z-[3]" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-gold/70 z-[3]" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-gold/70 z-[3]" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-gold/70 z-[3]" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 py-6 backdrop-blur-[2px] bg-white/10 rounded-xl">

        <motion.p
          className="text-sky-900 font-body text-sm font-bold tracking-[0.35em] uppercase mb-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          MIS XV AÑOS
        </motion.p>

        <motion.h1
          className="font-display text-6xl sm:text-8xl md:text-9xl gold-text-gradient leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Rebecca
        </motion.h1>

        <motion.p
          className="mt-6 font-elegant text-xl sm:text-2xl text-slate-900 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Sábado 25 de Abril, 2026
        </motion.p>

      </div>

    </section>
  );
};

export default Portada;