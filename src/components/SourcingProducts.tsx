import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SourcingProducts.css";

gsap.registerPlugin(ScrollTrigger);

type Card = {
  tag: string;
  title: string;
  content: string;
  video: string;
};

const cards: Card[] = [
  {
    tag: "Agro Exports",
    title: "Millets",
    content:
      "High-quality, nutrient-rich millets sourced directly from sustainable farms for global export.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Agro Exports",
    title: "Rice",
    content:
      "Premium varieties of rice, carefully processed and packaged to meet international quality standards.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Agro Exports",
    title: "Cereals",
    content:
      "A wide range of wholesome cereals, ensuring freshness and maximum nutritional value for international markets.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Agro Exports",
    title: "Spices",
    content:
      "Authentic, aromatic spices handpicked and processed to preserve their natural flavor, color, and quality.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Agro Exports",
    title: "Coconut Products",
    content:
      "Finest coconut derivatives including oil, water, and desiccated coconut, ethically sourced and processed.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Eco-Friendly",
    title: "Disposable Products",
    content:
      "Sustainable and biodegradable disposable products designed for environmentally conscious consumers globally.",
    video: "/videos/service.mp4",
  },
  {
    tag: "Biofuel",
    title: "Briquette Products",
    content:
      "High-efficiency, eco-friendly briquettes serving as a sustainable alternative energy source for industries.",
    video: "/videos/service.mp4",
  },
];

export default function SourcingProducts() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const lenis = new Lenis();

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const cardEls = cardsRef.current;
    const total = cardEls.length;

    // Initial state — card 0 visible, rest stacked below
    cardEls.forEach((card, i) => {
      gsap.set(card, {
        y: i === 0 ? 0 : "100%",
        scale: i === 0 ? 1 : 0.92,
        opacity: 1,
        zIndex: i + 1,   // each card sits ON TOP of the previous
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${total * 100}%`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    cardEls.forEach((card, i) => {
      if (i === 0) return;
      const prev = cardEls[i - 1];
      const offset = i - 1;

      // Push previous card back, bring new card up
      tl.to(prev, { scale: 0.88, duration: 1 }, offset);
      tl.to(card, { y: "0%", scale: 1, duration: 1 }, offset);
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
              {/* LEFT — content */}
              <div className="card-content">
                <div className="card-pill">{card.tag}</div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <button className="card-btn">Know More →</button>
              </div>

              {/* RIGHT — video */}
              <div className="card-media">
                <video autoPlay loop muted playsInline>
                  <source src={card.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
