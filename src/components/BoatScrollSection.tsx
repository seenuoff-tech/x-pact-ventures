import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BoatScrollSection() {
  const sectionRef = useRef(null);
  const boatRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      boatRef.current,
      { y: 300 },
      { y: -400, ease: "none" },
      0
    );

    tl.fromTo(
      textRefs.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
      },
      0.2
    );
  }, []);

  const texts = [
    "Extensive Market Knowledge",
    "Commitment to Quality",
    "Streamlined Processes",
    "24/7 Support",
    "Strong Network",
    "Competitive Pricing",
    "Personalized Service",
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        ref={boatRef}
        src="/boat.png"
        style={{
          position: "absolute",
          width: "180px",
        }}
      />

      <div style={{ textAlign: "center", zIndex: 2 }}>
        {texts.map((t, i) => (
          <h2
            key={i}
            ref={(el) => { textRefs.current[i] = el; }}
          >
            {t}
          </h2>
        ))}
      </div>
    </section>
  );
}