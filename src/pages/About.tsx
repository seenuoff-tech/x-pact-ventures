import React from 'react';
import { motion } from 'framer-motion';
import WhomWeWorkWith from '../components/WhomWeWorkWith';
import HowWeWork from '../components/HowWeWork';
import OurStrength from '../components/OurStrength';
import OurTeam from '../components/OurTeam';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 overflow-hidden">
      {/* Existing Top Section */}
      <section className="px-6 mb-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[56px] font-bold text-center mb-8 text-black tracking-tight">
            About Us
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
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
                style={{ backgroundColor: '#FAD02C' }}
              >
                <p 
                  className="text-xl md:text-2xl leading-[1.6] font-medium relative z-10 text-gray-900"
                >
                  <span className="text-black font-extrabold italic mr-2">Pact Ventures</span> 
                  is a dynamic export-import company based in Tamil Nadu, South India. We specialize in exporting high-quality agricultural products by collaborating with local farmers and trusted international traders, delivering the richness of Indian products to global markets. At the same time, we import high-demand products from around the world to meet the evolving needs of the Indian market. Our mission is to build sustainable trade relationships that empower communities and ensure the seamless flow of quality goods across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhomWeWorkWith />
      
      <HowWeWork />

      <OurStrength />

      <OurTeam />


    </div>
  );
};

export default About;




