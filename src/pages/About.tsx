import React from 'react';
import AboutUs from '../components/AboutUs';
import WhomWeWorkWith from '../components/WhomWeWorkWith';
import HowWeWork from '../components/HowWeWork';
import SupplyDriven from '../components/SupplyDriven';
import OurStrength from '../components/OurStrength';
import OurTeam from '../components/OurTeam';
import { useIsMobile } from '../hooks/useIsMobile';

import { motion } from 'framer-motion';

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const About: React.FC = () => {
  const isMobile = useIsMobile();
  const sideMargin = isMobile ? '0 12px' : '0 100px';

  return (
    <div className="min-h-screen bg-white pt-24 pb-0 overflow-hidden">
      <div style={{ margin: sideMargin }}>
        <ScrollReveal><AboutUs /></ScrollReveal>
        <ScrollReveal><WhomWeWorkWith /></ScrollReveal>
      </div>
      <HowWeWork />
      <SupplyDriven />
      <OurStrength />
      <ScrollReveal><OurTeam /></ScrollReveal>
    </div>
  );
};

export default About;
