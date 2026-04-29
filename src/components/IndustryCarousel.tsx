import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "AUTOMOTIVE",
    image: "/img1.jpg",
  },
  {
    title: "WAREHOUSING",
    image: "/img2.jpg",
  },
  {
    title: "OIL AND GAS",
    image: "/img3.jpg",
  },
  {
    title: "FOOD & BEVERAGE",
    image: "/img4.jpg",
  },
  {
    title: "POWER PLANTS",
    image: "/img5.jpg",
  },
];

const IndustryCarousel = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        background: "#000",
        height: "100vh",
        display: "flex",
        gap: "14px",
        padding: "40px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setActive(i)}
          animate={{
            width: active === i ? 380 : 110,
          }}
          transition={{
            duration: 0.6,
          }}
          style={{
            height: "80vh",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
            }}
          />

          <h2
            style={{
              position: "absolute",
              bottom: "40px",
              left: "20px",
              color: "#fff",
              fontWeight: 700,
              fontSize: "32px",
              transform:
                active === i ? "rotate(0deg)" : "rotate(-90deg)",
              transformOrigin: "left bottom",
              whiteSpace: "nowrap",
            }}
          >
            {card.title}
          </h2>
        </motion.div>
      ))}
    </section>
  );
};

export default IndustryCarousel;