import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageBoxRef.current || !leftContentRef.current || !rightContentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      });

      // 🚤 Boat/Image zoom out to specific size
      tl.to(imageBoxRef.current, {
        width: '539px',
        height: '565px',
        borderRadius: '20px',
        ease: 'none',
      }, 0);

      // 📝 Text fade out
      tl.to(textRef.current, {
        opacity: 0,
        ease: 'none',
        duration: 0.2 // Fades out relatively quickly during the scroll
      }, 0);

      // ⬅️ Left content
      tl.to(leftContentRef.current, {
        x: 100,
        opacity: 1,
        ease: 'none',
      }, 0.3);

      // ➡️ Right content
      tl.to(rightContentRef.current, {
        x: -100,
        opacity: 1,
        ease: 'none',
      }, 0.3);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full h-screen flex items-center justify-center">
        
        {/* LEFT CONTENT */}
        <div 
          ref={leftContentRef}
          className="absolute left-[5%] top-1/2 -translate-y-1/2 -translate-x-[100px] w-1/4 opacity-0 z-10"
        >
          <ul className="space-y-6">
            {["Extensive Market Knowledge", "Commitment to Quality", "Streamlined Process", "24/7 Support"].map((item) => (
              <li key={item}>
                <h3 className="text-lg font-black text-black tracking-tighter uppercase leading-none mb-1">{item}</h3>
                <div className="w-12 h-1 bg-[#F3CD00]" />
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE BOX */}
        <div 
          ref={imageBoxRef}
          className="absolute w-full h-full flex items-center justify-center z-0 overflow-hidden shadow-2xl"
        >
          <img 
            src="/Ship.png" 
            alt="Global Trade"
            className="w-full h-full object-cover"
          />
          <h2 
            ref={textRef}
            className="absolute text-white text-6xl md:text-[100px] font-black uppercase tracking-tighter z-10 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
          >
            Why Us
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div 
          ref={rightContentRef}
          className="absolute right-[5%] top-1/2 -translate-y-1/2 translate-x-[100px] w-1/4 opacity-0 z-10 text-right"
        >
          <ul className="space-y-6 flex flex-col items-end">
            {["Strong Network", "Competitive Pricing", "Personalized Services"].map((item) => (
              <li key={item} className="flex flex-col items-end">
                <h3 className="text-lg font-black text-black tracking-tighter uppercase leading-none mb-1 text-right">{item}</h3>
                <div className="w-12 h-1 bg-[#F3CD00]" />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;
