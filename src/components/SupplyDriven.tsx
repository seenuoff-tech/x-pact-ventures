import React from 'react';
import hww2 from '../assets/2.png';
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
const FONT_SUBHEADING = "'Bouncy', sans-serif";
const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";

const SupplyDriven: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--section-bg)', padding: '0' }}>
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-supply" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>

      <div className="mobile-only-view">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden', height: '380px' }}>
          <div style={{ width: '1100px', transform: 'scale(0.32)', transformOrigin: 'top center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '160px', width: '100%', maxWidth: '1000px' }}>

              {/* LEFT SIDE: Image */}
              <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '350px', height: '350px' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'transparent',
                      borderRadius: '175px 0 175px 0',
                      border: `6px solid #3b3c36`,
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
                      <img src={hww2} alt="Farmer" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                  className="global-content-style"
                  style={{
                    fontSize: '130px',
                    fontWeight: 500,
                    color: '#333',
                    textAlign: 'center',
                    marginTop: '280px',
                    lineHeight: '1.4',
                    maxWidth: '400px'
                  }}
                >
                  Empowering creators and producers to scale by unlocking seamless market access and distribution
                </motion.p>
              </div>

              {/* RIGHT SIDE: Text and Cards */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
                <div style={{ marginBottom: '100px' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 style={{ fontFamily: FONT_HEADING, fontSize: '110px', fontWeight: 400, color: '#000', margin: 0, lineHeight: 0.9 }}>Supply</h3>
                    <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '80px', fontWeight: 400, color: '#F3CD00', margin: 0, marginTop: '-15px', position: 'relative', zIndex: 10 }}>Driven</h4>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="global-content-style"
                    style={{
                      color: '#333',
                      fontSize: '130px',
                      lineHeight: '1.6',
                      marginTop: '30px',
                      maxWidth: '450px'
                    }}
                  >
                    We leverage our wide farmer network{' '}<br />to provide:
                  </motion.p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Export Quality Products" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 30px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 145 0 L 110 0 C 70 0, 70 120, 110 120 L 150 120" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 135 105 L 150 120 L 135 135" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#fff" title="Competitive pricing" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 30px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 5 0 L 40 0 C 80 0, 80 120, 40 120 L 0 120" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 20 105 L 0 120 L 20 135" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Faster turnaround" />
                    </motion.div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="desktop-only-view" style={{ position: 'relative' }}>


        {/* TOP BLOCK DESKTOP */}
        <div style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          height: 'clamp(450px, 33.85vw, 650px)',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          padding: '0 8% 0 12%',
          backgroundColor: 'var(--section-bg)',
          marginTop: 'clamp(-250px, -13vw, -100px)'
        }}>
          <div style={{ flex: '0 0 55%', zIndex: 10, paddingLeft: '12%', paddingTop: '0px', marginTop: '-19px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '50px', marginTop: '-50px' }}
            >
              <h3 style={{ fontFamily: FONT_HEADING, fontSize: 'clamp(72px, 7.3vw, 110px)', fontWeight: 400, color: '#000', margin: 0, lineHeight: 0.9 }}>Supply</h3>
              <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: 'clamp(44px, 4.5vw, 68px)', fontWeight: 400, color: '#F3CD00', margin: 0, marginTop: '-10px', position: 'relative', zIndex: 10 }}>Driven</h4>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="global-content-style"
              style={{
                color: '#333',
                lineHeight: '1.6',
                maxWidth: 'clamp(340px, 34vw, 540px)',
                margin: 0
              }}
            >
              We leverage our wide farmer network{' '}<br />to provide:
            </motion.p>
          </div>

          <div style={{ flex: '0 0 45%', position: 'relative', right: 'clamp(20px, 3vw, 100px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'relative',
                width: 'clamp(260px, 24vw, 400px)',
                height: 'clamp(260px, 24vw, 400px)',
                backgroundColor: 'transparent',
                borderRadius: 'clamp(130px, 12.5vw, 200px) 0 clamp(130px, 12.5vw, 200px) 0',
                border: `6px solid #3b3c36`,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
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
                <img src={hww2} alt="Farmer" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
            <div style={{
              position: 'absolute',
              bottom: 'clamp(-390px, -20.3vw, -310px)',
              left: '42%',
              transform: 'translateX(-50%)',
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
                Empowering creators and producers to scale by unlocking seamless market access and distribution
              </motion.p>
            </div>
          </div>
        </div>

        {/* STEPS BLOCK DESKTOP */}
        <div style={{
          display: 'flex',
          minHeight: 'clamp(300px, 28vw, 450px)',
          padding: '0 8% 20px',
          backgroundColor: 'var(--section-bg)',
          gap: '10%',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 3vw, 46px)', alignItems: 'center', zIndex: 10, position: 'relative', top: 'clamp(-110px, -7.8vw, -60px)', marginLeft: 'clamp(520px, 45vw, 840px)' }}>
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <ProcessCard bg="#F3CD00" color="#000" title="Export Quality Products" />
              </motion.div>
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M 145 0 L 110 0 C 70 0, 70 136, 110 136 L 150 136" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 135 121 L 150 136 L 135 151" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <ProcessCard bg="#F3CD00" color="#fff" title="Competitive pricing" />
              </motion.div>
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M 5 0 L 40 0 C 80 0, 80 136, 40 136 L 0 136" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 20 121 L 0 136 L 20 151" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <ProcessCard bg="#F3CD00" color="#000" title="Faster turnaround" />
              </motion.div>
            </div>
          </div>
          <div style={{ flex: '1' }} />
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

const ProcessCardFixed: React.FC<{ bg: string; color: string; title: string }> = ({ bg, color, title }) => (
  <motion.div
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      backgroundColor: bg,
      borderRadius: '24px',
      width: '320px',
      height: '80px',
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
    <span className="global-content-style" style={{ color, textAlign: 'center', fontSize: '110px' }}>{title}</span>
  </motion.div>
);


export default SupplyDriven;
