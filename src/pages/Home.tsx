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
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);
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

    // Set initial centered state — GSAP owns the transform, no CSS conflict
    gsap.set(boat, { xPercent: -50, y: 0 });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        // Keep xPercent locked at -50 always, only move y
        gsap.set(boat, {
          y: -self.progress * window.innerHeight * 1.2,
          xPercent: -50,
        });
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const leftPoints = leftListRef.current?.querySelectorAll("li");
    const rightPoints = rightListRef.current?.querySelectorAll("li");

    if (leftPoints && rightPoints) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boatSectionRef.current,
          start: "top 30%",
          end: "bottom 80%", // Tightened end to make points appear sooner
          scrub: 1,
        }
      });

      // Animate points one by one quickly as we scroll
      [...leftPoints, ...rightPoints].forEach((point, i) => {
        tl.from(point, {
          opacity: 0,
          y: -50,
          duration: 0.3, // Faster individual duration
          ease: "power2.out"
        }, i * 0.1); // Closer intervals so all 8 show up earlier
      });
    }
  }, []);

  return (
    <div className="overflow-x-hidden font-sans bg-white">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative flex flex-col lg:flex-row h-screen bg-black overflow-hidden">
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

      {/* ── BOAT SECTION (RESTORED TO YESTERDAY MORNING STATE) ──── */}
      <section
        ref={boatSectionRef}
        style={{
          height: "110vh",
          background: "#fff",
          position: "relative",
          overflow: "hidden",
          width: "100%"
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "60px",
          }}
        >
          {/* Left Side */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", paddingRight: "clamp(40px, 8vw, 120px)", gap: "24px" }}>
            <span style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 800, color: "#F3CD00", lineHeight: 1, letterSpacing: "1px", margin: 0 }}>
              Why
            </span>
            <ul ref={leftListRef} style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "right" }}>
              {["Extensive Marketing Language", "Commitment to Quality", "Streamlined Processes", "24/7 Support"].map((point) => (
                <li key={point} style={{ fontSize: "clamp(12px, 2vw, 24px)", fontWeight: 900, color: "#000", lineHeight: 1.8, textTransform: "uppercase", marginBottom: "24px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "clamp(40px, 8vw, 120px)", gap: "24px" }}>
            <span style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 800, color: "#F3CD00", lineHeight: 1, letterSpacing: "1px", margin: 0 }}>
              Us !
            </span>
            <ul ref={rightListRef} style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "left" }}>
              {["Strong Network", "Competitive Pricing", "Personalized Service", "End-to-End Solutions"].map((point) => (
                <li key={point} style={{ fontSize: "clamp(12px, 2vw, 24px)", fontWeight: 900, color: "#000", lineHeight: 1.8, textTransform: "uppercase", marginBottom: "24px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img
          ref={boatRef}
          src="/boat.png"
          alt="boat"
          onLoad={() => ScrollTrigger.refresh()}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-10%",
            height: "95vh",
            width: "auto",
            willChange: "transform",
            zIndex: 5,
          }}
        />
      </section>

      {/* Sourcing Products Divider */}
      <section className="bg-[#F3CD00] py-6 flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-black text-black text-center tracking-[4px] uppercase">
          Sourcing Products
        </h1>
      </section>

      <ProductCarousel />
    </div>
  );
};

export default Home;