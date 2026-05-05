import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Marine Equipment",
    category: "Nautical & Marine",
    emoji: "⚓",
    description: "High-grade marine hardware, navigation systems & vessel components sourced globally.",
  },
  {
    name: "Industrial Machinery",
    category: "Manufacturing",
    emoji: "⚙️",
    description: "Heavy-duty machinery & precision equipment from top-tier global manufacturers.",
  },
  {
    name: "Electronics & Tech",
    category: "Technology",
    emoji: "🔌",
    description: "Consumer & industrial electronics sourced from leading Asian markets.",
  },
  {
    name: "Automotive Parts",
    category: "Automotive",
    emoji: "🚗",
    description: "OEM & aftermarket auto components with certified quality standards.",
  },
  {
    name: "Fashion & Apparel",
    category: "Textile",
    emoji: "👔",
    description: "Premium fabrics, garments & accessories from established textile hubs.",
  },
  {
    name: "Food & Agriculture",
    category: "Agro Exports",
    emoji: "🌾",
    description: "Certified agro-products, spices & processed foods meeting international standards.",
  },
  {
    name: "Chemicals & Materials",
    category: "Industrial",
    emoji: "🧪",
    description: "Raw materials & specialty chemicals with full regulatory compliance.",
  },
  {
    name: "Luxury Goods",
    category: "Premium",
    emoji: "💎",
    description: "Curated luxury items, fine goods & artisan products for discerning markets.",
  },
];

const ProductCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLDivElement>(".product-card");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = scrollStart.current - (e.clientX - dragStart.current);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "80px 0 60px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #F3CD00, transparent)",
        }}
      />

      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: "#F3CD00",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          What We Source
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Our Product Categories
        </motion.h2>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(24px, 8vw, 120px)",
          paddingRight: "clamp(24px, 8vw, 120px)",
          paddingBottom: "16px",
          cursor: isDragging ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => setActiveIndex(i)}
            style={{
              minWidth: "280px",
              maxWidth: "280px",
              scrollSnapAlign: "center",
              background: activeIndex === i
                ? "linear-gradient(135deg, #1a1400 0%, #2a1f00 100%)"
                : "linear-gradient(135deg, #141414 0%, #1c1c1c 100%)",
              border: activeIndex === i ? "1.5px solid #F3CD00" : "1.5px solid #2a2a2a",
              borderRadius: "20px",
              padding: "32px 28px",
              cursor: "pointer",
              transition: "border-color 0.3s, background 0.3s",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: activeIndex === i ? "#F3CD00" : "#1f1f1f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                marginBottom: "20px",
                transition: "background 0.3s",
              }}
            >
              {product.emoji}
            </div>

            <p
              style={{
                color: "#F3CD00",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                margin: "0 0 8px",
                opacity: 0.8,
              }}
            >
              {product.category}
            </p>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: 800,
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              {product.name}
            </h3>

            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {product.description}
            </p>

            {activeIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#F3CD00",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                Learn More →
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            style={{
              width: activeIndex === i ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: activeIndex === i ? "#F3CD00" : "#333",
              border: "none",
              cursor: "pointer",
              transition: "width 0.3s, background 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
