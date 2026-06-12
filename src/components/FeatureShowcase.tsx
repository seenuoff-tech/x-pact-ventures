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
  const whyRef = useRef<HTMLSpanElement>(null);
  const usRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageBoxRef.current || !leftContentRef.current || !rightContentRef.current) return;

    const mm = gsap.matchMedia();

    // 🖥️ Desktop / Large Screen Layout (1024px and above)
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // 🚤 Boat/Image zooms out and centers
      tl.to(imageBoxRef.current, {
        width: () => window.innerWidth >= 1280 ? '539px' : '35vw',
        height: () => window.innerHeight >= 940 ? '565px' : '60vh',
        borderRadius: '20px',
        ease: 'none',
      }, 0);

      // 📝 Text animation: Why from left, Us from right
      tl.fromTo(whyRef.current, 
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
        0
      );
      
      tl.fromTo(usRef.current, 
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
        0
      );

      // 📝 Text fade out (happens after they come together)
      tl.to(textRef.current, {
        opacity: 0,
        ease: 'none',
        duration: 0.2 
      }, 0.2);

      // ⬅️ Left content slides in from left
      tl.fromTo(leftContentRef.current, 
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.3
      );

      // ➡️ Right content slides in from right
      tl.fromTo(rightContentRef.current, 
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.3
      );
    });

    // 📱 Mobile / Tablet Layout (below 1024px)
    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // 🚤 Boat/Image zooms out to a smaller centered block
      tl.to(imageBoxRef.current, {
        width: '80vw',
        height: '30vh',
        borderRadius: '15px',
        ease: 'none',
      }, 0);

      // 📝 Text animation: Why from left, Us from right
      tl.fromTo(whyRef.current, 
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
        0
      );
      
      tl.fromTo(usRef.current, 
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
        0
      );

      // 📝 Text fade out
      tl.to(textRef.current, {
        opacity: 0,
        ease: 'none',
        duration: 0.2 
      }, 0.2);

      // ⬅️ Left content slides down from top
      tl.fromTo(leftContentRef.current, 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.3
      );

      // ➡️ Right content slides up from bottom
      tl.fromTo(rightContentRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.3
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full h-screen flex items-center justify-center">
        
        {/* IMAGE BOX */}
        <div 
          ref={imageBoxRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0 overflow-hidden shadow-2xl"
        >
          <img 
            src="/Ship.png" 
            alt="Global Trade"
            className="w-full h-full object-cover"
          />
          <h2 
            ref={textRef}
            className="absolute text-white text-6xl md:text-[100px] font-black uppercase tracking-[0.2em] z-10 drop-shadow-2xl flex items-center"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
          >
            <span ref={whyRef} className="inline-block">Why</span>
            <span className="inline-block w-[0.3em]" /> {/* Custom space */}
            <span ref={usRef} className="inline-block">Us</span>
          </h2>
        </div>

        {/* CONTENT CONTAINER WRAPPER */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-0 pointer-events-none z-10">
          
          {/* LEFT CONTENT */}
          <div 
            ref={leftContentRef}
            className="w-full lg:w-[280px] xl:w-[320px] max-w-[340px] lg:max-w-none opacity-0 pointer-events-auto"
          >
            <ul className="space-y-3 lg:space-y-6 flex flex-col items-center lg:items-start">
              {["Extensive Market Knowledge", "Commitment to Quality", "Streamlined Process", "24/7 Support"].map((item) => (
                <li key={item} className="flex flex-col items-center lg:items-start">
                  <h3 className="text-sm md:text-lg font-black text-black tracking-tighter uppercase leading-none mb-1 text-center lg:text-left">{item}</h3>
                  <div className="w-12 h-1 bg-[#F3CD00] mx-auto lg:mx-0" />
                </li>
              ))}
            </ul>
          </div>

          {/* SPACER FOR IMAGE BOX */}
          <div className="hidden lg:block lg:w-[42vw] xl:w-[600px] shrink-0 pointer-events-none" />

          {/* RIGHT CONTENT */}
          <div 
            ref={rightContentRef}
            className="w-full lg:w-[280px] xl:w-[320px] max-w-[340px] lg:max-w-none opacity-0 pointer-events-auto"
          >
            <ul className="space-y-3 lg:space-y-6 flex flex-col items-center lg:items-end">
              {["Strong Network", "Competitive Pricing", "Personalized Services"].map((item) => (
                <li key={item} className="flex flex-col items-center lg:items-end">
                  <h3 className="text-sm md:text-lg font-black text-black tracking-tighter uppercase leading-none mb-1 text-center lg:text-right">{item}</h3>
                  <div className="w-12 h-1 bg-[#F3CD00] mx-auto lg:ml-auto lg:mr-0" />
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;
