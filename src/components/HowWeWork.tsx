import React from 'react';
import { motion } from 'framer-motion';

const HowWeWork: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <section className="py-24 bg-white px-6 overflow-hidden relative">
      {/* Vertical Yellow Stripe Background with Parallax */}
      <motion.div 
        initial={{ y: -50 }}
        whileInView={{ y: 50 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[120%] bg-[#FADE3F] opacity-100 z-0 hidden md:block"
      />
      
      {/* Mobile Yellow Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FADE3F] z-0 md:hidden" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-40 text-black tracking-tight"
        >
          How we work
        </motion.h2>

        {/* --- DEMAND DRIVEN SECTION --- */}
        <div className="relative mb-80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            <div className="lg:col-span-8 relative">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[50px] md:text-[80px] font-normal text-black leading-none mb-6 absolute -top-16 left-0 z-30" 
                style={{ fontFamily: "'Playball', cursive" }}>
                Demand Driven
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-[#FAD02C] p-10 md:p-14 pt-16 md:pt-20 mt-12 md:mt-16"
              >
                <div className="flex items-start gap-6">
                  <div className="pt-2">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <motion.path 
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        d="M10 10V60H80" stroke="black" strokeWidth="3" strokeLinecap="round"
                      />
                      <motion.path 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        d="M70 50L80 60L70 70" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-xl md:text-3xl font-medium text-black max-w-lg leading-snug" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                    We cultivate and source products based on buyer requirements:
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ animate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="lg:col-span-4 flex justify-end -mt-16 lg:-mt-24 relative z-20"
            >
              <img src="/top-right.png" alt="Demand Illustration" className="w-full max-w-[400px] h-auto object-contain" />
            </motion.div>
          </div>

          {/* Steps for Demand Driven */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="mt-20 flex flex-col items-center gap-6 relative"
          >
             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#FFF9E5] px-12 py-5 rounded-full border border-yellow-200 shadow-md min-w-[350px] text-center transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Specific soil selection</span>
                </div>
                <div className="absolute -left-20 top-1/2 -translate-y-1/2">
                   <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                      <motion.path variants={draw} d="M70 10C70 10 10 10 10 80" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} d="M2 72L10 82L18 72" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
             </motion.div>

             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#4A4A4A] text-white px-12 py-5 rounded-full shadow-xl min-w-[350px] text-center border-4 border-white/10 transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Organic / Conventional farming</span>
                </div>
                <div className="absolute -right-20 top-1/2 -translate-y-1/2">
                   <svg width="80" height="100" viewBox="0 0 80 100" fill="none" className="rotate-180">
                      <motion.path variants={draw} d="M70 10C70 10 10 10 10 80" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} d="M2 72L10 82L18 72" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
             </motion.div>

             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#FFF9E5] px-12 py-5 rounded-full border border-yellow-200 shadow-md min-w-[350px] text-center transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Custom quality standards</span>
                </div>
             </motion.div>
          </motion.div>
        </div>

        {/* --- SUPPLY DRIVEN SECTION --- */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            <div className="lg:col-span-8 lg:col-start-5 relative">
              <motion.h3 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[50px] md:text-[80px] font-normal text-black leading-none mb-6 absolute -top-16 left-0 z-30" 
                style={{ fontFamily: "'Playball', cursive" }}>
                Supply Driven
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-[#FAD02C] p-10 md:p-14 pt-16 md:pt-20 mt-12 md:mt-16"
              >
                <div className="flex items-start gap-6">
                  <div className="pt-2">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <motion.path variants={draw} initial="hidden" whileInView="visible" d="M10 10V60H80" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} d="M70 50L80 60L70 70" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-xl md:text-3xl font-medium text-black max-w-lg leading-snug" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                    We leverage our wide farmer network to provide:
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ animate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="lg:col-span-4 lg:col-start-1 row-start-1 flex justify-start -mt-16 lg:-mt-24 relative z-20"
            >
              <div className="w-full max-w-[400px] aspect-[4/3] bg-white border-8 border-[#FAD02C] shadow-2xl flex items-center justify-center rounded-2xl overflow-hidden">
                 <img src="/left-bot.jpeg" alt="Supply Illustration" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Steps for Supply Driven */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="mt-20 flex flex-col items-center gap-6 relative"
          >
             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#FFF9E5] px-12 py-5 rounded-full border border-yellow-200 shadow-md min-w-[350px] text-center transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Export Quality Products</span>
                </div>
                <div className="absolute -left-20 top-1/2 -translate-y-1/2">
                   <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                      <motion.path variants={draw} d="M70 10C70 10 10 10 10 80" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} d="M2 72L10 82L18 72" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
             </motion.div>

             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#7B7B7B] text-white px-12 py-5 rounded-full shadow-xl min-w-[350px] text-center border-4 border-white/10 transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Competitive pricing</span>
                </div>
                <div className="absolute -right-20 top-1/2 -translate-y-1/2">
                   <svg width="80" height="100" viewBox="0 0 80 100" fill="none" className="rotate-180">
                      <motion.path variants={draw} d="M70 10C70 10 10 10 10 80" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} d="M2 72L10 82L18 72" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
             </motion.div>

             <motion.div variants={itemVariants} className="relative">
                <div className="bg-[#FFF9E5] px-12 py-5 rounded-full border border-yellow-200 shadow-md min-w-[350px] text-center transition-transform hover:scale-105 cursor-default">
                   <span className="text-xl font-bold" style={{ fontFamily: "'Architects Daughter', cursive" }}>Faster turnaround</span>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playball&family=Architects+Daughter&display=swap');
      `}} />
    </section>
  );
};

export default HowWeWork;
