import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import Glob from "../components/Glob";
import FeatureShowcase from "../components/FeatureShowcase";
import SourcingProducts from "../components/SourcingProducts";


gsap.registerPlugin(ScrollTrigger);

const COUNTRIES = ["US", "UAE", "China", "South Korea", "Germany", "UK", "Italy"];

const Home: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COUNTRIES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="overflow-x-hidden font-sans bg-white">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative flex flex-col lg:flex-row h-screen bg-black overflow-hidden">
        
        {/* Left Side: Globe */}
        <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen relative flex items-center justify-center z-0 order-1 pt-24 md:pt-32">
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(24,80,255,0.13) 0%, transparent 70%)"
            }}
          />
          <Glob />
        </div>

        <div className="hidden lg:block absolute left-[60%] top-[15%] h-[70%] w-[1px] z-10 bg-gradient-to-b from-transparent via-yellow-400/25 to-transparent" />

        {/* Right Side: WE EXPORT TO */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen flex flex-col justify-center items-center bg-transparent gap-4 pb-12 lg:pb-0 z-10 relative order-2">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c8a800] text-[13px] font-medium tracking-[6px] uppercase m-0 opacity-85"
          >
            WE EXPORT TO
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-10 h-[1.5px] bg-[#F3CD00] rounded-full"
          />

          <div className="relative h-24 md:h-32 flex items-center justify-center w-full px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={COUNTRIES[index]}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="absolute text-center text-white font-extrabold tracking-tighter m-0 whitespace-nowrap"
                style={{
                  fontSize: "clamp(48px, 10vw, 96px)",
                  textShadow: "0 0 40px rgba(243,205,0,0.3)"
                }}
              >
                {COUNTRIES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="w-32 md:w-48 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
            <motion.div
              key={index}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: "linear" }}
              className="h-full bg-[#F3CD00] origin-left"
            />
          </div>
        </div>
      </section>

      <FeatureShowcase />

      {/* Sourcing Products Heading */}
      <section className="bg-[#F3CD00] py-6 flex justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-black text-black text-center tracking-[4px] uppercase">
          Sourcing Products
        </h2>
      </section>

      <SourcingProducts />

    </div>
  );
};

export default Home;