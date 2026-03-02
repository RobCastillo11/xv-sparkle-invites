import { motion } from "framer-motion";

const Portada = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-cream">
      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-gold opacity-60" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold opacity-60" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-gold opacity-60" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-gold opacity-60" />

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <motion.p
        className="text-sky-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Mis XV Años
      </motion.p>

      <motion.h1
        className="font-display text-6xl sm:text-8xl md:text-9xl gold-text-gradient leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        Rebecca
      </motion.h1>

      <motion.div
        className="flex items-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
        <span className="text-gold text-xl font-elegant">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
      </motion.div>

      <motion.p
        className="mt-6 font-elegant text-xl sm:text-2xl text-foreground/80 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        Sábado 25 de Abril, 2025
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Portada;
