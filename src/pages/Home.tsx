import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import ExtrudedGlobe from "../components/ExtrudedGlobe";
import ProductCarousel from "../components/ProductCarousel";

gsap.registerPlugin(ScrollTrigger);

const COUNTRIES = ["US", "UAE", "China", "South Korea", "Germany", "UK", "Italy"];

const Home: React.FC = () => {
  const boatRef = useRef<HTMLImageElement | null>(null);
  const boatSectionRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COUNTRIES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const boat = boatRef.current;
    const section = boatSectionRef.current;
    if (!boat || !section) return;

    // PINNED BOAT ANIMATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%", // Pins for 1.5x the height
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      boat,
      { y: "50vh", xPercent: -50 },
      { y: "-60vh", xPercent: -50, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const leftPoints = [
    "Extensive Marketing Language",
    "Commitment to Quality",
    "Streamlined Processes",
    "24/7 Support"
  ];

  const rightPoints = [
    "Strong Network",
    "Competitive Pricing",
    "Personalized Service",
    "End-to-End Solutions"
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative flex flex-col lg:flex-row min-h-screen bg-black overflow-hidden">
        <div className="w-full lg:w-[70%] h-[50vh] lg:h-screen relative order-1">
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(24,80,255,0.13) 0%, transparent 70%)"
            }}
          />
          <Canvas camera={{ position: [0, 0, 6], fov: 42 }} className="w-full h-full">
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 3, 5]} intensity={2.2} />
            <pointLight position={[-6, -3, -4]} intensity={1.0} color="#2255ff" />
            <pointLight position={[4, 4, 2]} intensity={0.6} color="#ffffff" />
            <Stars radius={120} depth={60} count={3500} factor={3} fade speed={0.5} />
            <ExtrudedGlobe />
          </Canvas>
        </div>

        <div className="hidden lg:block absolute left-[70%] top-[15%] h-[70%] w-[1px] z-10 bg-gradient-to-b from-transparent via-yellow-400/25 to-transparent" />

        <div className="w-full lg:w-[30%] h-[40vh] lg:h-screen flex flex-col justify-center items-center bg-transparent gap-4 order-2 pb-12 lg:pb-0">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c8a800] text-[10px] md:text-[13px] font-medium tracking-[4px] md:tracking-[8px] uppercase m-0 opacity-85"
          >
            WE EXPORT TO
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-8 md:w-12 h-[1.5px] bg-[#F3CD00] rounded-full"
          />

          <div className="relative h-20 md:h-32 flex items-center justify-center w-full px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={COUNTRIES[index]}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="absolute text-center text-white font-extrabold tracking-tighter m-0 whitespace-nowrap"
                style={{
                  fontSize: "clamp(32px, 8vw, 64px)",
                  textShadow: "0 0 30px rgba(243,205,0,0.3)"
                }}
              >
                {COUNTRIES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="w-24 md:w-32 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
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

      {/* ── WHY US SECTION (PINNED & MATCHING SCREENSHOT) ───────── */}
      <section
        ref={boatSectionRef}
        className="relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="z-30 w-full flex flex-col items-center">
          {/* Main Titles */}
          <div className="flex justify-between items-center w-full max-w-7xl px-4 md:px-12 mb-12">
            <h2 className="text-4xl md:text-8xl lg:text-[110px] font-black text-[#F3CD00] leading-none tracking-tight uppercase">
              Why
            </h2>
            <h2 className="text-4xl md:text-8xl lg:text-[110px] font-black text-[#F3CD00] leading-none tracking-tight uppercase">
              Us !
            </h2>
          </div>

          {/* Points Layout */}
          <div className="grid grid-cols-2 w-full max-w-7xl px-2 md:px-12 gap-4 md:gap-32">
            <ul className="space-y-4 md:space-y-12 text-right">
              {leftPoints.map((point, i) => (
                <li key={i} className="text-black text-[9px] sm:text-xs md:text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight">
                  {point}
                </li>
              ))}
            </ul>
            <ul className="space-y-4 md:space-y-12 text-left">
              {rightPoints.map((point, i) => (
                <li key={i} className="text-black text-[9px] sm:text-xs md:text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated Boat - Central Column */}
        <img
          ref={boatRef}
          src="/boat.png"
          alt="Cargo Boat"
          className="absolute left-1/2 -translate-x-1/2 w-[80vw] md:w-[60vw] lg:w-[40vw] max-w-3xl h-auto z-20 pointer-events-none"
          style={{ bottom: "0%" }}
        />
      </section>

      {/* ── PRODUCT CAROUSEL ────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tighter">
            Our <span className="text-[#F3CD00]">Premium</span> Range
          </h2>
        </div>
        <ProductCarousel />
      </section>
    </div>
  );
};

export default Home;