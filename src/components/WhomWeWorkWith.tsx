import React from 'react';
import { motion } from 'framer-motion';

const WhomWeWorkWith: React.FC = () => {
  return (
    <section className="pt-8 pb-0 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-black"
        >
          Whom we work with
        </motion.h2>

        <div className="flex justify-center items-center w-full">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/Whom we work with.png" 
            alt="Whom we work with" 
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhomWeWorkWith;
