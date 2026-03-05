import { motion } from "framer-motion";
import portadaImg from "@/assets/portada.jpeg";

const Portada = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 sm:justify-center sm:pt-0 px-6 py-20 overflow-hidden">

      {/* Imagen de fondo animada */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${portadaImg})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Overlay elegante para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-cream/45 to-cream/65 backdrop-blur-[1px]" />

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-gold opacity-60" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold opacity-60" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-gold opacity-60" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-gold opacity-60" />

      {/* Contenido */}
      <div className="relative z-10 text-center">

        <motion.p
          className="text-sky-accent font-body text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          className="font-display text-6xl sm:text-8xl md:text-9xl gold-text-gradient leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Rebecca
        </motion.h1>

        <motion.p
          className="mt-6 font-elegant text-xl sm:text-2xl text-foreground/90 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Sábado 25 de Abril, 2026
        </motion.p>

      </div>
    </section>
  );
};

export default Portada;