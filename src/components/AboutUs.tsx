import React from 'react';
import xLogo from '../assets/X logo.png';
import { useIsMobile } from '../hooks/useIsMobile';

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#ffffff', padding: isMobile ? '32px 0 40px' : '60px 0 80px' }}>

      {/* Title */}
      <h2 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: isMobile ? '36px' : '52px',
        fontWeight: 800, textAlign: 'center', color: '#000000',
        marginBottom: isMobile ? '28px' : '60px',
        letterSpacing: '-1px',
      }}>
        About Us
      </h2>

      {isMobile ? (
        /* ─ MOBILE: stacked ─ */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '0 8px' }}>
          {/* X Logo centered */}
          <img src={xLogo} alt="Pact Ventures X Logo"
            style={{ width: '80%', maxWidth: '280px', height: 'auto' }} />

          {/* Yellow card full width */}
          <div style={{ width: '100%', backgroundColor: 'transparent', borderRadius: '20px', padding: '28px 24px' }}>
            <p className="global-content-style" style={{
              lineHeight: '1.8', color: '#000000', textAlign: 'justify',
            }}>
              <span style={{ fontWeight: 900, color: '#F3CD00' }}>Pact Ventures</span>{' '}
              is a dynamic export-import company based in Tamil Nadu, South India. We specialize in
              exporting high-quality agricultural products by collaborating with local farmers and
              trusted international traders, delivering the richness of Indian products to global markets.
              At the same time, we import high-demand products from around the world to meet the
              evolving needs of the Indian market. Our mission is to build sustainable trade
              relationships that empower communities and ensure the seamless flow of quality goods
              across borders.
            </p>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: two-column ─ */
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1300px', margin: '0 auto', padding: '0 4vw', gap: '4vw' }}>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', maxWidth: '520px' }}>
            <img src={xLogo} alt="Pact Ventures X Logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: '1', backgroundColor: 'transparent', borderRadius: '28px', padding: '20px 0' }}>
            <p className="global-content-style" style={{ lineHeight: '1.85', color: '#000000', textAlign: 'justify' }}>
              <span style={{ fontWeight: 900, color: '#F3CD00' }}>Pact Ventures</span>{' '}
              is a dynamic export-import company based in Tamil Nadu, South India. We specialize in
              exporting high-quality agricultural products by collaborating with local farmers and trusted
              international traders, delivering the richness of Indian products to global markets. At the
              same time, we import high-demand products from around the world to meet the evolving needs
              of the Indian market. Our mission is to build sustainable trade relationships that empower
              communities and ensure the seamless flow of quality goods across borders.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
