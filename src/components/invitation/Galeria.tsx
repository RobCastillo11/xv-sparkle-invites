import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import OrnamentDivider from "./OrnamentDivider";
import type { TargetAndTransition } from "framer-motion";

import img1 from "@/assets/gallery/1.jpeg";
import img2 from "@/assets/gallery/2.jpeg";
import img3 from "@/assets/gallery/3.jpeg";
import img4 from "@/assets/gallery/4.jpeg";
import img5 from "@/assets/gallery/5.jpeg";
import img6 from "@/assets/gallery/6.jpeg";
import img7 from "@/assets/gallery/7.jpeg";
import img8 from "@/assets/gallery/8.jpeg";
import img9 from "@/assets/gallery/9.jpeg";
import img10 from "@/assets/gallery/10.jpeg";
import img11 from "@/assets/gallery/11.jpeg";
import img12 from "@/assets/gallery/12.jpeg";
import img13 from "@/assets/gallery/13.jpeg";
import img14 from "@/assets/gallery/14.jpeg";

const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
];

const Galeria = () => {
    const { ref, isVisible } = useScrollReveal();
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const total = images.length;

    const next = () => setIndex((prev) => (prev + 1) % total);
    const prev = () => setIndex((prev) => (prev - 1 + total) % total);

    useEffect(() => {
        if (!isVisible || isPaused) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, 3000);

        return () => clearInterval(interval);
    }, [isVisible, isPaused, total]);

    const handleInteraction = (direction: "next" | "prev") => {
        setIsPaused(true);

        if (direction === "next") next();
        else prev();

        setTimeout(() => setIsPaused(false), 6000);
    };

    return (
        <section ref={ref} className="py-20 px-6 bg-cream-dark overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="font-display text-2xl sm:text-3xl text-gold mb-2">
                    Momentos Especiales
                </h2>

                <OrnamentDivider />

                <div className="relative mt-16 flex items-center justify-center h-[440px] perspective-[1200px]">
                    {images.map((img, i) => {
                        const rawOffset = i - index;

                        const offset =
                            rawOffset > total / 2
                                ? rawOffset - total
                                : rawOffset < -total / 2
                                    ? rawOffset + total
                                    : rawOffset;

                        const distance = Math.abs(offset);

                        // -------- MOVIMIENTO PROGRESIVO REAL --------
                        const scale = Math.max(0.5, 1 - distance * 0.2);
                        const opacity = Math.max(0, 1 - distance * 0.5);
                        const blur = distance * 2;
                        const rotateY = offset * -20;
                        const x = offset * 240;

                        const style: TargetAndTransition = {
                            scale,
                            x,
                            rotateY,
                            opacity,
                            zIndex: total - distance,
                            filter: `blur(${blur}px)`
                        };

                        return (
                            <motion.img
                                key={i}
                                src={img}
                                className="absolute w-[300px] sm:w-[380px] h-[380px] object-cover rounded-xl shadow-2xl"
                                animate={style}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                drag={offset === 0 ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x < -50) handleInteraction("next");
                                    if (info.offset.x > 50) handleInteraction("prev");
                                }}
                                onClick={() => {
                                    if (offset === 1) handleInteraction("next");
                                    if (offset === -1) handleInteraction("prev");
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Galeria;