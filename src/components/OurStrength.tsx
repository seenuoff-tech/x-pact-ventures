import React from 'react';
import { motion } from 'framer-motion';

const OurStrength: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 bg-[#FADE3F] px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-24 text-black tracking-tight"
        >
          OUR STRENGTH
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image with Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="lg:col-span-6 flex justify-center"
          >
            <img 
              src="/strength-bg.png" 
              alt="Our Strength" 
              className="w-full max-w-[750px] h-auto object-contain mix-blend-multiply drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start"
          >
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-[60px] md:text-[90px] font-normal text-black leading-none mb-12 lg:-ml-20" 
              style={{ fontFamily: "'Playball', cursive" }}>
              Built on Ground Reality
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium text-black mb-10 leading-tight text-center lg:text-left" 
              style={{ fontFamily: "'Architects Daughter', cursive" }}>
              We are directly connected with multiple farmers, enabling:
            </motion.p>

            {/* Strength Pills with Staggered Entrance */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col gap-4 mb-12 w-full max-w-md"
            >
              <motion.div variants={pillVariants} className="bg-[#FFF9E5] px-10 py-4 rounded-full border border-yellow-300 shadow-sm text-center hover:bg-white transition-colors cursor-default">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Better pricing control</span>
              </motion.div>
              <motion.div variants={pillVariants} className="bg-[#4A4A4A] text-white px-10 py-4 rounded-full shadow-lg text-center border-4 border-white/10 hover:bg-black transition-colors cursor-default">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Quality consistency</span>
              </motion.div>
              <motion.div variants={pillVariants} className="bg-[#FFF9E5] px-10 py-4 rounded-full border border-yellow-300 shadow-sm text-center hover:bg-white transition-colors cursor-default">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Reliable sourcing</span>
              </motion.div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl md:text-3xl font-bold text-black leading-tight max-w-xl italic text-center lg:text-left" 
              style={{ fontFamily: "'Architects Daughter', cursive" }}>
              "We don't depend on middle layers, <br /> we work close to the source."
            </motion.p>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playball&family=Architects+Daughter&display=swap');
      `}} />
    </section>
  );
};

export default OurStrength;
