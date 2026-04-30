import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 overflow-hidden">
      {/* Existing Top Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[56px] font-bold text-center mb-16 text-black tracking-tight">
            About Us
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            {/* Logo Section */}
            <div className="w-full max-w-[450px] flex justify-center">
               <img 
                 src="/About.png" 
                 alt="X Pact Ventures Logo" 
                 className="w-full h-auto object-contain"
               />
            </div>

            {/* Text Content Section */}
            <div className="w-full max-w-2xl">
              <div 
                className="p-10 md:p-14 rounded-[48px] shadow-sm border border-yellow-100/30 relative overflow-hidden"
                style={{ backgroundColor: '#FEF6D5' }}
              >
                <p 
                  className="text-xl md:text-2xl leading-[1.6] font-medium relative z-10 text-gray-900"
                >
                  <span className="text-[#F3CD00] font-extrabold italic mr-2">Pact Ventures</span> 
                  is a dynamic export-import company based in Tamil Nadu, South India. We specialize in exporting high-quality agricultural products by collaborating with local farmers and trusted international traders, delivering the richness of Indian products to global markets. At the same time, we import high-demand products from around the world to meet the evolving needs of the Indian market. Our mission is to build sustainable trade relationships that empower communities and ensure the seamless flow of quality goods across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Hero-style split */}
      <section className="relative px-6 py-24 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl font-bold leading-tight"
            >
              Excellence <br />
              built on <span className="text-[#F3CD00]">Trust</span>
            </motion.h2>
            <p className="text-gray-500 text-lg max-w-md">
              We've combined traditional values with modern logistics to create a seamless export-import experience.
            </p>
            <button className="bg-[#F3CD00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-all group">
              Read Our Vision <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              <img 
                src="/about-visual.png" 
                alt="Visual Card" 
                className="w-full max-w-xl rounded-[60px] shadow-2xl"
              />
            </motion.div>
            
            {/* Connecting Line to next section */}
            <div className="absolute top-1/2 -right-20 w-40 h-[2px] bg-[#F3CD00] hidden lg:block">
              <div className="absolute right-0 -top-1 w-3 h-3 rounded-full border-2 border-[#F3CD00] bg-white" />
            </div>

            {/* Vertical Arrow to Section 2 Content */}
            <div className="absolute top-[80%] right-[10%] w-[2px] h-[400px] bg-gray-200 hidden lg:block z-0">
               <div className="absolute bottom-0 -left-[9px] flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 bg-white mb-[-10px]" />
                  <div className="text-gray-300 text-3xl">↓</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Left, Content Right (Global Network) */}
      <section className="relative px-6 py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          {/* Image/Diagram Section (Left on Desktop) */}
          <div className="flex-1 relative order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <img 
                src="/about-network.png" 
                alt="Global Network Visual" 
                className="w-full max-w-xl rounded-[60px] shadow-2xl"
              />
            </motion.div>
            
            {/* Background Decoration */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F3CD00]/5 rounded-full blur-[100px]" />
          </div>

          {/* Content Section (Right on Desktop) */}
          <div className="flex-1 space-y-8 order-1 md:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold leading-tight text-black"
            >
              We're building <br />
              a <span className="text-[#F3CD00]">Global Network</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">
              Pact Ventures unites local producers with international buyers, fusing the best of both worlds. Our fair distribution and unparalleled logistics ignite a new frontier in global trade.
            </p>
            <button className="bg-[#F3CD00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-all group">
              Join Our Network <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>


      {/* New Section 3: Text Left, Image Right */}
      <section className="relative px-6 py-24 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl font-bold leading-tight"
            >
              Sustainable <br />
              <span className="text-[#F3CD00]">Future</span> Goals
            </motion.h2>
            <p className="text-gray-500 text-lg max-w-md">
              Our commitment to sustainability ensures that every transaction contributes to a healthier planet and empowered communities.
            </p>
            <button className="bg-[#F3CD00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-all group">
              Our Impact <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              <img 
                src="/about-logistics.png" 
                alt="Logistics Visual" 
                className="w-full max-w-xl rounded-[60px] shadow-2xl"
              />
            </motion.div>
            
            {/* Connecting Line Decoration */}
            <div className="absolute top-1/2 -left-20 w-40 h-[2px] bg-[#F3CD00] hidden lg:block rotate-180">
              <div className="absolute right-0 -top-1 w-3 h-3 rounded-full border-2 border-[#F3CD00] bg-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



