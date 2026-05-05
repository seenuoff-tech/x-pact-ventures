import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BoatScroll.css";

gsap.registerPlugin(ScrollTrigger);

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

const BoatScroll: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const boatRef = useRef<HTMLImageElement>(null);
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const boat = boatRef.current;
    const container = containerRef.current;
    if (!boat || !container) return;

    // 1. Initial Position Setup
    // Center horizontally using GSAP xPercent. 
    // This allows us to use x/y transforms without overriding the CSS centering.
    gsap.set(boat, { xPercent: -50, x: 0, y: 0, rotationZ: 0 });

    // 2. Realistic Bobbing & Swaying (Continuous animation independent of scroll)
    const swayTween = gsap.to(boat, {
      y: 20,              // subtle vertical bobbing
      rotationZ: 1.5,     // slight tilt
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // 3. Scroll-based Forward Movement
    const scrollTween = gsap.to(boat, {
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
      y: () => -window.innerHeight * 1.3, // Move up by 1.3x screen height
      ease: "none"
    });

    // 4. Premium Text Reveal
    const leftItems = leftListRef.current?.querySelectorAll("li");
    const rightItems = rightListRef.current?.querySelectorAll("li");

    if (leftItems && rightItems) {
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 40%",
          end: "bottom 70%",
          scrub: 1.5,
        }
      });

      const allItems = [...leftItems, ...rightItems];
      
      allItems.forEach((item, i) => {
        textTl.fromTo(item, {
          opacity: 0,
          y: 60,
          filter: "blur(12px)",
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }, i * 0.1); // Staggered reveal
      });
    }

    return () => {
      swayTween.kill();
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="boat-section">
      {/* Texture overlays for premium dark aesthetic */}
      <div className="boat-overlay"></div>
      <div className="boat-grid"></div>
      <div className="boat-reflection"></div>
      
      <div className="boat-content">
        {/* Left Side */}
        <div className="boat-text-col left-col">
          <h2 className="boat-title">Why</h2>
          <ul ref={leftListRef} className="boat-list">
            {leftPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="boat-text-col right-col">
          <h2 className="boat-title highlight">Us !</h2>
          <ul ref={rightListRef} className="boat-list">
            {rightPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <img
        ref={boatRef}
        src="/boat.png"
        alt="Premium Boat"
        className="boat-image"
        onLoad={() => ScrollTrigger.refresh()}
      />
    </section>
  );
};

export default BoatScroll;
