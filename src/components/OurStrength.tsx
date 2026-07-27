import React from 'react';
import hww3 from '../assets/3.png'
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
// const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";
const YELLOW_ACCENT = '#F3CD00';
const BACKGROUND = '#FFFFFF';

const OurStrength: React.FC = () => {
  return (
    <section className="our-strength-section" style={{ backgroundColor: BACKGROUND, padding: '100px 0 0', overflow: 'hidden', marginTop: '-100px', position: 'relative', zIndex: 10 }}>

      <h2 className="our-strength-heading" style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '52px',
        fontWeight: 900,
        textAlign: 'center',
        color: '#000',
        padding: '0 0 50px',
        letterSpacing: '1px',
      }}>
        OUR STRENGTH
      </h2>

      <div className="mobile-only-view">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden', height: '380px' }}>
          <div style={{ width: '1100px', transform: 'scale(0.32)', transformOrigin: 'top center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '70px', width: '100%', maxWidth: '1050px', marginBottom: '40px' }}>
              <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column' }}>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{
                    fontFamily: FONT_HEADING,
                    fontSize: '52px',
                    fontWeight: 400,
                    color: '#000',
                    lineHeight: '1',
                    marginBottom: '20px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Built on Ground Reality
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={hww3}
                    alt="Farmers and team"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px', paddingLeft: '40px' }}>
                <p className="global-content-style" style={{
                  color: '#333',
                  fontSize: '44px',
                  lineHeight: '1.4',
                  marginBottom: '40px'
                }}>
                  We are directly connected with multiple farmers, enabling:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative' }}>
                  {/* Card 1 */}
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Better pricing control" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 10px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 5 0 L 40 0 C 80 0, 80 122, 40 122 L 0 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 15 107 L 0 122 L 15 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  {/* Card 2 */}
                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#fff" title="Quality consistency" />
                    </motion.div>
                    <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 20px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                      <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 145 0 L 110 0 C 70 0, 70 122, 110 122 L 150 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 135 107 L 150 122 L 135 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  {/* Card 3 */}
                  <div style={{ position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                      <ProcessCardFixed bg="#F3CD00" color="#000" title="Reliable sourcing" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Outfit', Inter, sans-serif",
                fontSize: '48px',
                fontWeight: 600,
                color: YELLOW_ACCENT,
                lineHeight: '1.3',
                textAlign: 'center',
                marginTop: '40px',
                maxWidth: '1000px',
                whiteSpace: 'normal'
              }}
            >
              "We don't depend on middle layers, we work close to the source"
            </motion.p>
          </div>
        </div>
      </div>

      <div className="desktop-only-view">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(30px, 4.2vw, 80px)', width: '100%', maxWidth: '1200px', marginBottom: '60px' }}>
            <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: FONT_HEADING,
                  fontSize: 'clamp(36px, 3.5vw, 56px)',
                  fontWeight: 400,
                  color: '#000',
                  lineHeight: '1',
                  marginBottom: '20px',
                  whiteSpace: 'nowrap'
                }}
              >
                Built on Ground Reality
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  width: '100%',
                  height: 'clamp(320px, 31.25vw, 500px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={hww3}
                  alt="Farmers and team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'clamp(40px, 6.25vw, 100px)', paddingLeft: 'clamp(40px, 6.25vw, 100px)' }}>
              <p className="global-content-style" style={{
                color: '#333',
                lineHeight: '1.4',
                marginBottom: '40px'
              }}>
                We are directly connected with multiple farmers, enabling:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
                {/* Card 1 */}
                <div style={{ position: 'relative', width: 'fit-content' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <ProcessCard bg="#F3CD00" color="#000" title="Better pricing control" />
                  </motion.div>
                  <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 10px)', top: '40px', overflow: 'visible', zIndex: 1 }}>
                    <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M 5 0 L 40 0 C 80 0, 80 122, 40 122 L 0 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 15 107 L 0 122 L 15 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Card 2 */}
                <div style={{ position: 'relative' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <ProcessCard bg="#F3CD00" color="#fff" title="Quality consistency" />
                  </motion.div>
                  <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                    <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M 145 0 L 110 0 C 70 0, 70 122, 110 122 L 150 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 135 107 L 150 122 L 135 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Card 3 */}
                <div style={{ position: 'relative' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <ProcessCard bg="#F3CD00" color="#000" title="Reliable sourcing" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Outfit', Inter, sans-serif",
              fontSize: 'clamp(20px, 2.5vw, 40px)',
              fontWeight: 600,
              color: YELLOW_ACCENT,
              lineHeight: '1.3',
              textAlign: 'center',
              marginTop: '20px',
              maxWidth: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            "We don't depend on middle layers, we work close to the source"
          </motion.p>
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
    <span className="global-content-style" style={{ color, textAlign: 'center', fontSize: '38px' }}>{title}</span>
  </motion.div>
);

export default OurStrength;
