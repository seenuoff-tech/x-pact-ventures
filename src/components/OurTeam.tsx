import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { User, Linkedin } from 'lucide-react';

const FONT_HEADING = "'Autography', cursive";
const YELLOW_ACCENT = '#F3CD00';



const members = [
  { name: 'Dinesh Kanna', role: 'Founder', image: '/Dineshkumar.png', imgStyle: { objectPosition: 'center top' }, linkedin: 'https://www.linkedin.com/in/nameisdeekay' },
  { name: 'Annie Baskaran', role: 'Co-Founder', image: '/Annie (2).png', imgStyle: { objectPosition: 'center top' }, linkedin: 'https://www.linkedin.com/in/annie-baskaran-a0ba7a360' },
  { name: 'Naveen Kumar', role: 'Co-Founder', image: '/Naveen.png', imgStyle: {}, linkedin: 'https://www.linkedin.com/in/naveen-kumar-murugan-b94551103' },
];

const OurTeam: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Team section */}
      <section style={{ backgroundColor: '#E5E4E2', padding: isMobile ? '40px 16px 60px' : '80px 16px 100px' }}>
        
        {/* Yellow Background Box */}
        <div style={{ 
          backgroundColor: YELLOW_ACCENT, 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '30px 20px 80px' : '40px 20px 130px', // Reduced height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: isMobile ? '32px' : '60px', // Softly rounded corners
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)' // Premium floating shadow
        }}>

          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: isMobile ? '32px' : '52px',
            fontWeight: 1000, textAlign: 'center', color: '#000',
            letterSpacing: '2px', margin: 0,
          }}>
            OUR TEAM
          </h2>
        </div>

        {/* Team cards */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '50px' : '90px',
          flexWrap: 'wrap',
          padding: '0 16px',
          marginTop: isMobile ? '-70px' : '-110px', // Pulls the cards up to overlap the boundary (half of 140/220)
        }}>
          {members.map(m => (
            <div key={m.name} style={{ textAlign: 'center', width: isMobile ? '140px' : '220px' }}>
              <div style={{ 
                width: isMobile ? '140px' : '220px', 
                height: isMobile ? '140px' : '220px', 
                margin: '0 auto 16px', 
                position: 'relative', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                borderRadius: '50% 0 50% 0', // Leaf shape
                border: '6px solid #4a4a4a', // Dark border like the reference
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                overflow: 'hidden', // Ensure the image doesn't bleed outside the border
                backgroundColor: '#000'
              }}>
                <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50% 0 50% 0', display: 'block', ...(m.imgStyle || {}) }} />
              </div>
              {/* Name — global Outfit font */}
              <p className="global-content-style" style={{
                color: '#000', marginBottom: '2px', fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px'
              }}>{m.name}</p>
              {/* Role — Autography cursive */}
              <p style={{
                fontFamily: FONT_HEADING,
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 400, color: YELLOW_ACCENT, margin: 0,
                lineHeight: 1,
                marginTop: '-4px',
                marginBottom: '2px'
              }}>{m.role}</p>
              {/* LinkedIn Icon */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-3px' }}>
                <a href={m.linkedin || "#"} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.25)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Linkedin size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CTA footer — white bg */}
      <section style={{ backgroundColor: '#fff', padding: isMobile ? '40px 16px' : '60px 40px' }}>
        <div style={{
          textAlign: 'center',
          padding: isMobile ? '32px 16px' : '40px 40px',
          backgroundColor: '#F3CD00',
          borderRadius: '24px',
          margin: '0 auto',
          maxWidth: '1000px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: isMobile ? '22px' : '32px',
            fontWeight: 800, color: '#000000',
            lineHeight: '1.3', marginBottom: '16px',
          }}>
            Let's Build Global Trade Together
          </h3>
          <p className="global-content-style" style={{
            color: '#312900',
          }}>
            We are open to partnerships with importers, distributors, and global buyers.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
