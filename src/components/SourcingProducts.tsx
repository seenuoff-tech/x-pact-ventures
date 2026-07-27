import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SourcingProducts.css";

gsap.registerPlugin(ScrollTrigger);

type Card = {
  tag: string;
  title: string;
  content: string;
  video: string;
  link: string;
};

const cards: Card[] = [
  {
    tag: "Power Grains",
    title: "Millets",
    content:
      "High-quality, nutrient-rich millets sourced directly from sustainable farms for global export.",
    video: "/videos/Millets.mp4",
    link: "millets-and-ancient-grains",
  },
  {
    tag: "Heritage Grains",
    title: "Rice",
    content:
      "Premium varieties of rice, carefully processed and packaged to meet international quality standards.",
    video: "/videos/Rice.mp4",
    link: "rice-varieties",
  },

  {
    tag: "Flavour Craft",
    title: "Spices",
    content:
      "Authentic, aromatic spices handpicked and processed to preserve their natural flavor, color, and quality.",
    video: "/videos/spices.mp4",
    link: "spices-and-aromatics",
  },
  {
    tag: "Tree of Life",
    title: "Coconut Products",
    content:
      "Finest coconut derivatives including oil, water, and desiccated coconut, ethically sourced and processed.",
    video: "/videos/_coconut products.mp4",
    link: "coconut-and-coir-commodities",
  },
  {
    tag: "Earth Care",
    title: "Eco- Friendly Products",
    content:
      "Sustainable and biodegradable disposable products designed for environmentally conscious consumers globally.",
    video: "/videos/Eco Friendly.mp4",
    link: "eco-friendly-and-compostable-tableware",
  },
  {
    tag: "Biofuel",
    title: "Briquette Products",
    content:
      "High-efficiency, eco-friendly briquettes serving as a sustainable alternative energy source for industries.",
    video: "/videos/Briquettes.mp4",
    link: "sustainable-fuel-briquetting",
  },
];

import { useNavigate } from "react-router-dom";

export default function SourcingProducts() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isMutedRef = useRef(true);
  const activeIndexRef = useRef(0);
  
  const [isMuted, setIsMuted] = useState(true);

  // Sync state with ref for event handlers and callbacks
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Helper to control video playback and audio dynamically
  const updateVideos = (activeIndex: number, muted: boolean) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        // Active video: unmute/mute based on user settings, and ensure it plays
        video.muted = muted;
        if (video.paused) {
          video.play().catch(() => {
            // Browser autoplay restrictions may catch here, which is expected
          });
        }
      } else {
        // Inactive videos: force mute and pause to save CPU/GPU resources
        video.muted = true;
        if (!video.paused) {
          video.pause();
        }
      }
    });
  };

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Safely get only the actual DOM nodes (protects against React Strict Mode duplicate refs)
    const cardEls = cardsRef.current.slice(0, cards.length).filter(Boolean);
    const total = cardEls.length;

    // Initialize video playback states
    updateVideos(0, isMutedRef.current);

    const ctx = gsap.context(() => {
      // Initial state — card 0 visible, rest stacked below
      cardEls.forEach((card, i) => {
        gsap.set(card, {
          y: i === 0 ? 0 : "100%",
          scale: i === 0 ? 1 : 0.92,
          opacity: i === 0 ? 1 : 0,
          zIndex: i + 1,   // each card sits ON TOP of the previous
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 50}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const active = Math.min(
              Math.round(progress * (total - 1)),
              total - 1
            );
            if (activeIndexRef.current !== active) {
              activeIndexRef.current = active;
              // Always reset to muted by default when scrolling to a new card
              setIsMuted(true);
              isMutedRef.current = true;
              updateVideos(active, true);
            }
          }
        },
      });

      cardEls.forEach((card, i) => {
        if (i === 0) return;
        const prev = cardEls[i - 1];
        const offset = i - 1;

        // Push previous card back and fade it out, bring new card up
        tl.to(prev, { scale: 0.88, opacity: 0, duration: 1 }, offset);
        tl.to(card, { y: "0%", scale: 1, opacity: 1, duration: 1 }, offset);
      });
    }, sectionRef);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="sourcing-section">
      <div className="sourcing-left">
        <div className="stack-wrapper">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="stack-card"
            >
              {/* Floating Sound Toggle Button */}
              <button
                className="sound-toggle-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  const newMuted = !isMuted;
                  setIsMuted(newMuted);
                  isMutedRef.current = newMuted;
                  updateVideos(activeIndexRef.current, newMuted);
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              {/* Background Video */}
              <div className="card-media">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  autoPlay
                  loop
                  muted={true}
                  playsInline
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              </div>

              {/* LEFT — content */}
              <div className="card-content">
                <div className="card-pill">{card.tag}</div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <button className="card-btn" onClick={() => navigate(`/products/${card.link}`)}>
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
