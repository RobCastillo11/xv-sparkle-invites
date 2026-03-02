import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const TARGET_DATE = new Date("2025-04-25T13:00:00-06:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CuentaRegresiva = () => {
  const [time, setTime] = useState(getTimeLeft);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Minutos", value: time.minutes },
    { label: "Segundos", value: time.seconds },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Cuenta Regresiva
        </h2>
        <OrnamentDivider />
        <div className="grid grid-cols-4 gap-3 mt-8">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center p-4 rounded-lg border border-gold/30 bg-cream"
            >
              <span className="font-display text-3xl sm:text-5xl text-gold">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CuentaRegresiva;
