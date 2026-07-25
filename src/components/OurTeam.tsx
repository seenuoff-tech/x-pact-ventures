import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const FONT_HEADING = "'Autography', cursive";
const YELLOW_ACCENT = '#F3CD00';

/* Authentic brush-stroke circle */
const BrushCircle: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
    <path d="M110,22 C148,18 192,48 202,88 C215,140 185,190 138,204 C90,218 42,192 26,148 C10,104 30,52 72,32 C88,25 98,22 110,22 Z"
      stroke={YELLOW_ACCENT} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <path d="M110,34 C144,30 182,56 194,94 C207,138 180,182 138,196 C96,210 52,186 38,148 C22,106 44,60 82,42 C94,36 102,34 110,34 Z"
      stroke={YELLOW_ACCENT} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    <path d="M110,46 C140,42 172,64 184,98 C198,136 174,174 138,188 C100,202 60,180 48,148 C34,110 56,68 90,52 C98,48 104,46 110,46 Z"
      stroke={YELLOW_ACCENT} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
  </svg>
);

const members = [
  { name: 'Dinesh Kanna', role: 'Founder' },
  { name: 'Annie Baskaran', role: 'Co-Founder' },
  { name: 'Naveen Kumar', role: 'Co-Founder' },
];

const OurTeam: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Team section — #E5E4E2 bg, same padding as before, no extra space */}
      <section style={{ backgroundColor: '#E5E4E2', padding: isMobile ? '10px 0 20px' : '70px 0 30px' }}>

        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: isMobile ? '32px' : '52px',
          fontWeight: 1000, textAlign: 'center', color: '#000',
          letterSpacing: '2px', marginBottom: isMobile ? '36px' : '60px',
        }}>
          OUR TEAM
        </h2>

        {/* Team cards */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '32px' : '90px',
          flexWrap: 'wrap',
          padding: '0 16px',
        }}>
          {members.map(m => (
            <div key={m.name} style={{ textAlign: 'center' }}>
              <div style={{ width: isMobile ? '140px' : '220px', height: isMobile ? '140px' : '220px', margin: '0 auto 12px' }}>
                <BrushCircle size={isMobile ? 140 : 220} />
              </div>
              {/* Name — global Outfit font */}
              <p className="global-content-style" style={{
                color: '#000', marginBottom: '2px', fontWeight: 700,
              }}>{m.name}</p>
              {/* Role — Autography cursive */}
              <p style={{
                fontFamily: FONT_HEADING,
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 400, color: YELLOW_ACCENT,
              }}>{m.role}</p>
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
