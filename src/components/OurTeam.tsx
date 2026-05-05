import React from 'react';
import { motion } from 'framer-motion';

const OurTeam: React.FC = () => {
  const team = [
    { name: 'Dinesh Kanna', role: 'Founder', image: '/team-placeholder.png' },
    { name: 'Annie Baskaran', role: 'Co-Founder', image: '/team-placeholder.png' },
    { name: 'Naveen Kumar', role: 'Co-Founder', image: '/team-placeholder.png' },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-24 text-black"
        >
          OUR TEAM
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-[#FAD02C]">
                 <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <img src="/About.png" alt="X" className="w-12 h-auto opacity-20" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">{member.name}</h3>
              <p className="text-xl font-bold text-[#FAD02C] italic">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 bg-[#FAD02C] rounded-[48px] shadow-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">Let’s Build Global Trade Together</h3>
          <p className="text-xl md:text-2xl font-medium text-black/80 max-w-3xl mx-auto">
            We are open to partnerships with importers, distributors, and global buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
