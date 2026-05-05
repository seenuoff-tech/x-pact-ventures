import React from 'react';
import { motion } from 'framer-motion';

const OurStrength: React.FC = () => {
  return (
    <section className="py-24 bg-[#FADE3F] px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24 text-black tracking-tight"
        >
          OUR STRENGTH
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex justify-center"
          >
            <img 
              src="/strength-bg.png" 
              alt="Our Strength" 
              className="w-full max-w-[750px] h-auto object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start"
          >
            <h3 className="text-[60px] md:text-[90px] font-normal text-black leading-none mb-12 lg:-ml-20" 
                style={{ fontFamily: "'Playball', cursive" }}>
              Built on Ground Reality
            </h3>

            <p className="text-2xl md:text-3xl font-medium text-black mb-10 leading-tight text-center lg:text-left" 
               style={{ fontFamily: "'Architects Daughter', cursive" }}>
              We are directly connected with multiple farmers, enabling:
            </p>

            {/* Strength Pills */}
            <div className="flex flex-col gap-4 mb-12 w-full max-w-md">
              <div className="bg-[#FFF9E5] px-10 py-4 rounded-full border border-yellow-300 shadow-sm text-center">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Better pricing control</span>
              </div>
              <div className="bg-[#7B7B7B] text-white px-10 py-4 rounded-full shadow-lg text-center border-4 border-white/10">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Quality consistency</span>
              </div>
              <div className="bg-[#FFF9E5] px-10 py-4 rounded-full border border-yellow-300 shadow-sm text-center">
                <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Reliable sourcing</span>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-black leading-tight max-w-xl italic text-center lg:text-left" 
               style={{ fontFamily: "'Architects Daughter', cursive" }}>
              We don't depend on middle layers, <br /> we work close to the source.
            </p>
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
