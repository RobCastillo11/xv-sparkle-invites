import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Church, PartyPopper, Music } from "lucide-react";

const events = [
  { time: "1:00 PM", title: "Misa", desc: "Templo de Ntra. Sra. de Guadalupe", icon: Church },
  { time: "3:00 PM", title: "Recepción", desc: "Salón Casa Blanca", icon: PartyPopper },
  { time: "9:00 PM", title: "Baile", desc: "¡A celebrar!", icon: Music },
];

const Itinerario = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 px-6 bg-cream">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
          Itinerario
        </h2>
        <OrnamentDivider />

        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold to-gold/0" />

          <div className="space-y-12">
            {events.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <motion.div
                  key={ev.title}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-cream flex items-center justify-center z-10">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-display text-lg text-gold mt-3">{ev.time}</p>
                  <p className="font-elegant text-xl text-foreground">{ev.title}</p>
                  <p className="font-body text-sm text-muted-foreground">{ev.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Itinerario;
