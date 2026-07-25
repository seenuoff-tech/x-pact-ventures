import React from 'react';
import xpactGif from '../assets/Xpact Gif.gif';
import { useIsMobile } from '../hooks/useIsMobile';

const WhomWeWorkWith: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '40px 0 0' : '60px 0 0' }}>

      <h2 style={{
        fontFamily: 'Montserrat,sans-serif', fontSize: isMobile ? '32px' : '52px', fontWeight: 800,
        textAlign: 'center', color: '#000', marginBottom: isMobile ? '28px' : '50px', letterSpacing: '-1px',
      }}>
        Whom we work with
      </h2>

      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: isMobile ? '0 16px 0' : '0 40px 0',
      }}>
        <img 
          src={xpactGif} 
          alt="Whom We Work With Flow" 
          loading="lazy"
          decoding="async"
          style={{ 
            width: '100%', 
            maxWidth: '1150px', 
            height: 'auto', 
            display: 'block' 
          }} 
        />
      </div>
    </section>
  );
};

export default WhomWeWorkWith;
