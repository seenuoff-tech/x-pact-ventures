import React from 'react';
import { motion } from 'framer-motion';

const WhomWeWorkWith: React.FC = () => {
  const farmersSubItems = [
    { label: 'Natural farming', angle: 180, distance: 150 },
    { label: 'Organic farming', angle: 225, distance: 160 },
    { label: 'Semi Organic farm', angle: 270, distance: 180 },
    { label: 'Conventional farm', angle: 315, distance: 160 },
  ];

  const buyersSubItems = [
    { label: 'Corporates', angle: 90, distance: 180 },
    { label: 'Importers', angle: 0, distance: 160 },
    { label: 'Wholesalers', angle: 315, distance: 160 },
    { label: 'Distributors', angle: 270, distance: 180 },
    { label: 'Suppliers', angle: 225, distance: 160 },
  ];

  const SubItem = ({ label, angle, distance }: { label: string, angle: number, distance: number }) => {
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = -Math.sin((angle * Math.PI) / 180) * distance;
    
    return (
      <div 
        className="absolute hidden lg:flex flex-col items-center justify-center whitespace-nowrap"
        style={{ 
          transform: `translate(${x}px, ${y}px)`,
          left: '50%',
          top: '50%',
          width: '120px', // Set a fixed width
          marginLeft: '-60px', // Center based on fixed width
          marginTop: '-10px'
        }}
      >
        <span className="text-[14px] font-bold text-black mb-1">{label}</span>
        {/* SVG Arrow/Line */}
        <div className="absolute" style={{ transform: `translate(${-x/2.5}px, ${-y/2.5}px)` }}>
           <svg width="60" height="60" viewBox="0 0 60 60" style={{ transform: `rotate(${270 - angle}deg)` }}>
              <line x1="30" y1="0" x2="30" y2="40" stroke="#E5E7EB" strokeWidth="1" />
              <path d="M25 35 L30 42 L35 35" fill="none" stroke="#E5E7EB" strokeWidth="1" />
           </svg>
        </div>
      </div>
    );
  };

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

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 min-h-[500px]">
          
          {/* Local Farmers Node */}
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded-full z-20"
            >
              {/* Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAD02C] to-[#F3CD00] rounded-full blur-[20px] opacity-60" />
              <div className="absolute inset-4 bg-[#FAD02C] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-extrabold text-xl md:text-2xl text-center px-4 uppercase leading-tight">
                  Local <br /> Farmers
                </span>
              </div>

              {/* Sub-items for Farmers */}
              {farmersSubItems.map((item, index) => (
                <SubItem key={index} {...item} />
              ))}
            </motion.div>
          </div>

          {/* Connection Arrows 1 */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-16 h-[1px] bg-gray-300 relative">
               <div className="absolute right-0 top-[-4px] border-l-4 border-l-gray-300 border-y-4 border-y-transparent" />
            </div>
          </div>

          {/* Center Logo/Network Node */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-56 h-56 md:w-64 md:h-64 flex flex-col items-center justify-center relative z-10"
            >
               {/* Complex Network Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative animate-pulse-slow">
                   <svg viewBox="0 0 200 200" className="w-full h-full text-gray-200">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      {[...Array(12)].map((_, i) => (
                        <g key={i}>
                          <line 
                            x1="100" y1="100" 
                            x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)} 
                            y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)} 
                            stroke="currentColor" 
                            strokeWidth="0.5" 
                          />
                          <circle 
                            cx={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)} 
                            cy={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)} 
                            r="2" 
                            fill="#FAD02C" 
                          />
                        </g>
                      ))}
                      {/* Connecting lines between nodes */}
                      {[...Array(6)].map((_, i) => (
                        <line 
                          key={i}
                          x1={100 + 60 * Math.cos((i * 60 * Math.PI) / 180)} 
                          y1={100 + 60 * Math.sin((i * 60 * Math.PI) / 180)} 
                          x2={100 + 60 * Math.cos(((i+1) * 60 * Math.PI) / 180)} 
                          y2={100 + 60 * Math.sin(((i+1) * 60 * Math.PI) / 180)} 
                          stroke="currentColor" 
                          strokeWidth="0.5" 
                        />
                      ))}
                   </svg>
                </div>
              </div>
              
              <div className="relative z-20 flex flex-col items-center">
                <img 
                  src="/About.png" 
                  alt="X Pact Ventures" 
                  className="w-24 h-auto"
                />
                <div className="mt-2 text-[12px] font-black tracking-[0.2em] text-black bg-white/80 px-2 py-1 rounded">
                  PACT VENTURES
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Arrows 2 */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-16 h-[1px] bg-gray-300 relative">
                   <div className="absolute right-0 top-[-4px] border-l-4 border-l-gray-300 border-y-4 border-y-transparent" />
                </div>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-16 h-[1px] bg-gray-300 relative">
                   <div className="absolute left-0 top-[-4px] border-r-4 border-r-gray-300 border-y-4 border-y-transparent" />
                </div>
             </div>
          </div>

          {/* Buyers Node */}
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded-full z-20"
            >
              {/* Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAD02C] to-[#F3CD00] rounded-full blur-[20px] opacity-60" />
              <div className="absolute inset-4 bg-[#FAD02C] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-extrabold text-xl md:text-2xl text-center px-4 uppercase tracking-wider">
                  Buyers
                </span>
              </div>

              {/* Sub-items for Buyers */}
              {buyersSubItems.map((item, index) => (
                <SubItem key={index} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhomWeWorkWith;
