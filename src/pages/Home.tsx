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

  return (
    <div>

      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          background: "#000000",
          overflow: "hidden",
          position: "relative",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* LEFT 70% — 3D Globe */}
        <div style={{ width: "70%", height: "100%", position: "relative" }}>
          {/* Subtle radial gradient spotlight behind globe */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(24,80,255,0.13) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <Canvas
            camera={{ position: [0, 0, 6], fov: 42 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 3, 5]} intensity={2.2} />
            <pointLight position={[-6, -3, -4]} intensity={1.0} color="#2255ff" />
            <pointLight position={[4, 4, 2]} intensity={0.6} color="#ffffff" />
            <Stars radius={120} depth={60} count={3500} factor={3} fade speed={0.5} />
            <ExtrudedGlobe />
          </Canvas>
        </div>

        {/* Vertical divider line */}
        <div
          style={{
            position: "absolute",
            left: "70%",
            top: "15%",
            height: "70%",
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, rgba(243,205,0,0.25) 30%, rgba(243,205,0,0.25) 70%, transparent)",
            zIndex: 10,
          }}
        />

        {/* RIGHT 30% — Export destination */}
        <div
          style={{
            width: "30%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            gap: "16px",
          }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              color: "#c8a800",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "6px",
              textTransform: "uppercase",
              margin: 0,
              opacity: 0.85,
            }}
          >
            WE EXPORT TO
          </motion.p>

          {/* Thin gold accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              width: "36px",
              height: "1.5px",
              background: "#F3CD00",
              borderRadius: "2px",
            }}
          />

          {/* Animated country name */}
          <div
            style={{
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={COUNTRIES[index]}
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -22, filter: "blur(4px)" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  color: "#FFD700",
                  fontSize: "clamp(38px, 4.5vw, 62px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {COUNTRIES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtle dot indicator */}
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {COUNTRIES.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === index ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === index ? "#FFD700" : "rgba(255,215,0,0.25)",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Boat Section */}
      <section
        ref={boatSectionRef}
        style={{
          height: "110vh", // Reduced from 200vh to move next section up
          background: "#fff",
          position: "relative",
          overflow: "hidden",
          width: "100%"
        }}
      >
        {/* Why Us Split Heading */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px", // Reduced from 80px/160px
          }}
        >
          {/* Left Side — Why + Points */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              paddingRight: "clamp(40px, 8vw, 120px)",
              gap: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "96px",
                fontWeight: 800,
                color: "#F3CD00",
                lineHeight: 1,
                letterSpacing: "1px",
                margin: 0,
                padding: 0,
              }}
            >
              Why
            </span>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "right",
                marginRight: "60px",
              }}
            >
              {[
                "Extensive Marketing Language",
                "Commitment to Quality",
                "Streamlined Processes",
                "24/7 Support",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "#000",
                    lineHeight: 1.8,
                    paddingRight: "120px",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side — Us + Points */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: "clamp(40px, 8vw, 120px)",
              gap: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "96px",
                fontWeight: 800,
                color: "#F3CD00",
                lineHeight: 1,
                letterSpacing: "1px",
                margin: 0,
                padding: 0,
              }}
            >
              Us !
            </span>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "left",
                marginLeft: "90px",
              }}
            >
              {[
                "Strong Network",
                "Competitive Pricing",
                "Personalized Service",
                "End-to-End Solutions",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "#000",
                    lineHeight: 1.8,
                    paddingLeft: "120px",
                  }}
                >
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
            /* No CSS transform here — GSAP owns xPercent & y entirely */
            height: "95vh",
            width: "auto",
            willChange: "transform",
            zIndex: 5,
          }}
        />
      </section>


      {/* Sourcing Products Section */}
      <section
        style={{
          background: "#F3CD00",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px 0",
        }}
      >
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "35px", // Adjusted size
          fontWeight: 800,
          color: "#000",
          textAlign: "center",
          letterSpacing: "4px", // Added spacing to match screenshot
          textTransform: "uppercase" // ALL CAPS
        }}>
          Sourcing Products
        </h1>
      </section>

      <ProductCarousel />

    </div>
  );
};

export default Home;