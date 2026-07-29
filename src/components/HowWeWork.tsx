import React from 'react';
import hww1 from '../assets/1.png';
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
const FONT_SUBHEADING = "'Bouncy', sans-serif";
// const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";

const HowWeWork: React.FC = () => {

  return (
    <section style={{ backgroundColor: 'var(--section-bg)', padding: '40px 0 0', overflow: 'hidden' }}>
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-mobile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
          <marker id="arrowhead-desktop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>

      {/* ── TITLE ── */}
      <h2 className="how-we-work-heading" style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '52px',
        fontWeight: 800,
        textAlign: 'center', color: '#000',
        padding: '0 0 10px',
        margin: '0 0 60px 0',
        letterSpacing: '-1px',
        position: 'relative',
        zIndex: 10
      }}>
        How we work
      </h2>

      {/* ══ MOBILE LA      {/* ══ MOBILE LAYOUT ══ */}
      <div className="mobile-only-view">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden', height: '380px' }}>
          <div style={{ width: '1100px', transform: 'scale(0.32)', transformOrigin: 'top center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '160px', width: '100%', maxWidth: '1000px' }}>

              {/* LEFT SIDE: Text and Cards */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '20px', paddingLeft: '40px' }}>
                <div style={{ marginBottom: '100px' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 style={{ fontFamily: FONT_HEADING, fontSize: '110px', fontWeight: 400, color: '#000', margin: 0, lineHeight: 0.9 }}>Demand</h3>
                    <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '80px', fontWeight: 400, color: '#F3CD00', margin: 0, marginTop: '-15px', position: 'relative', zIndex: 10 }}>Driven</h4>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontFamily: "'Outfit', Inter, ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 400,
                      fontStyle: 'normal',
                      color: '#333',
                      fontSize: '38px',
                      lineHeight: '1.6',
                      marginTop: '30px',
                      maxWidth: '450px'
                    }}
                  >
                    We cultivate and source products based on buyer requirements:
                  </motion.p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Specific soil selection" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 30px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 5 0 L 40 0 C 80 0, 80 120, 40 120 L 0 120" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 15 105 L 0 120 L 15 135" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#fff" title="Organic / Conventional farming" height="100px" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 30px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 145 0 L 110 0 C 70 0, 70 120, 110 120 L 150 120" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 135 105 L 150 120 L 135 135" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Custom quality standards" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Image */}
              <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '350px', height: '350px' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'transparent',
                      borderRadius: '175px 0 175px 0',
                      border: `6px solid #333`,
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 2,
                    }}
                  >
                    <div style={{
                      width: '100%', height: '100%', backgroundColor: 'transparent', borderRadius: '180px 0 180px 0', overflow: 'hidden'
                    }}>
                      <img src={hww1} alt="Farmers" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </motion.div>
                  {/* SVG Arrow from image */}
                  <svg width="100" height="300" viewBox="0 0 100 300" style={{ position: 'absolute', bottom: '-270px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, overflow: 'visible' }}>
                    <line x1="50" y1="0" x2="50" y2="230" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 35 210 L 50 230 L 65 210" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="50" cy="230" r="40" stroke="#eee" strokeWidth="1.5" fill="none" />
                    <circle cx="50" cy="230" r="60" stroke="#f5f5f5" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{
                    fontFamily: "'Outfit', Inter, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#333',
                    fontSize: '38px',
                    textAlign: 'center',
                    marginTop: '280px',
                    lineHeight: '1.4',
                    maxWidth: '800px'
                  }}
                >
                  Architecting hyper-responsive solutions tailored precisely to evolving
                  consumer needs
                </motion.p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="desktop-only-view">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            position: 'relative',
            height: 'clamp(450px, 33.85vw, 650px)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 5% 0 8%',
            backgroundColor: 'var(--section-bg)',
            marginTop: 'clamp(-100px, -5.2vw, -40px)'
          }}>
            <div style={{ flex: '0 0 55%', zIndex: 10, paddingTop: '0px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ lineHeight: '0.7', marginBottom: '60px', marginTop: '-60px' }}
              >
                <h3 style={{ fontFamily: FONT_HEADING, fontSize: 'clamp(80px, 8vw, 130px)', fontWeight: 400, color: '#000', margin: 0 }}>Demand</h3>
                <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: 'clamp(42px, 4vw, 64px)', fontWeight: 400, color: '#F3CD00', margin: 0, marginTop: '-10px', position: 'relative', zIndex: 10 }}>Driven</h4>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="global-content-style"
                style={{
                  color: '#333',
                  lineHeight: '1.4',
                  maxWidth: 'clamp(360px, 34vw, 550px)'
                }}
              >
                We cultivate and source products based on buyer requirements:
              </motion.p>
            </div>

            <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  width: 'clamp(260px, 24vw, 400px)',
                  height: 'clamp(260px, 24vw, 400px)',
                  backgroundColor: 'transparent',
                  borderRadius: 'clamp(130px, 12.5vw, 200px) 0 clamp(130px, 12.5vw, 200px) 0',
                  border: `6px solid #333`,
                  overflow: 'hidden',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  borderRadius: '180px 0 180px 0',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img src={hww1} alt="Farmers" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              <div style={{
                position: 'absolute',
                bottom: 'clamp(-390px, -20.3vw, -310px)',
                left: '12%',
                width: 'clamp(260px, 24vw, 400px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10
              }}>
                <svg width="100" height="220" style={{ overflow: 'visible' }}>
                  <circle cx="50" cy="150" r="40" stroke="#eee" strokeWidth="1.5" fill="none" />
                  <circle cx="50" cy="150" r="60" stroke="#f5f5f5" strokeWidth="1.5" fill="none" />
                  <line x1="50" y1="0" x2="50" y2="150" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 130 L 50 150 L 65 130" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="global-content-style"
                  style={{
                    color: '#333',
                    textAlign: 'center',
                    marginTop: '30px',
                    lineHeight: '1.4',
                    maxWidth: 'clamp(260px, 24vw, 400px)'
                  }}
                >
                  Architecting hyper-responsive solutions tailored precisely to evolving
                  consumer needs
                </motion.p>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            minHeight: 'clamp(350px, 32.5vw, 520px)',
            padding: '0 8% 0',
            backgroundColor: 'var(--section-bg)',
            gap: '10%',
            alignItems: 'center'
          }}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 3vw, 46px)', alignItems: 'center', zIndex: 10, position: 'relative', top: 'clamp(-130px, -11.25vw, -80px)' }}>
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <ProcessCard bg="#F3CD00" color="#000" title="Specific soil selection" />
                </motion.div>
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                  <path d="M 5 0 L 40 0 C 80 0, 80 136, 40 136 L 0 136" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 15 121 L 0 136 L 15 151" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <ProcessCard bg="#F3CD00" color="#fff" title="Organic / Conventional farming" />
                </motion.div>
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                  <path d="M 145 0 L 110 0 C 70 0, 70 136, 110 136 L 150 136" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 135 121 L 150 136 L 135 151" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <ProcessCard bg="#F3CD00" color="#000" title="Custom quality standards" />
                </motion.div>
              </div>
            </div>
            <div style={{ flex: '1' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard: React.FC<{ bg: string; color: string; title: string }> = ({ bg, color, title }) => (
  <motion.div
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      backgroundColor: bg,
      borderRadius: '24px',
      width: 'clamp(260px, 26.25vw, 420px)',
      height: 'clamp(65px, 5.625vw, 90px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      border: '1px solid rgba(0,0,0,0.05)',
      position: 'relative',
      zIndex: 2
    }}
  >
    <span className="global-content-style" style={{ color, textAlign: 'center' }}>{title}</span>
  </motion.div>
);

const ProcessCardFixed: React.FC<{ bg: string; color: string; title: string; height?: string }> = ({ bg, color, title, height = '80px' }) => (
  <motion.div
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      backgroundColor: bg,
      borderRadius: '24px',
      width: '320px',
      height: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      border: '1px solid rgba(0,0,0,0.05)',
      position: 'relative',
      zIndex: 2
    }}
  >
    <span style={{ 
      fontFamily: "'Outfit', Inter, ui-sans-serif, system-ui, sans-serif",
      fontWeight: 400,
      fontStyle: 'normal',
      color, 
      textAlign: 'center', 
      fontSize: '34px' 
    }}>{title}</span>
  </motion.div>
);

export default HowWeWork;
