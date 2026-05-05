import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './Glob.css';

const Glob = () => {
  const globeEl = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState({ features: [] });
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [highlightedCountries, setHighlightedCountries] = useState<string[]>([]);
  const [showOnlyHighlighted, setShowOnlyHighlighted] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const countryData: any = {
    IN: { lat: 20.5937, lng: 78.9629 },
    US: { lat: 37.0902, lng: -95.7129 },
    AE: { lat: 23.4241, lng: 53.8478 },
    CN: { lat: 35.8617, lng: 104.1954 },
    KR: { lat: 35.9078, lng: 127.7669 },
    DE: { lat: 51.1657, lng: 10.4515 },
    GB: { lat: 55.3781, lng: -3.4360 },
    IT: { lat: 41.8719, lng: 12.5674 },
  };

  const highlightSequence = ['IN', 'US', 'AE', 'CN', 'KR', 'DE', 'GB', 'IT'];

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setTimeout(() => setTransitionDuration(4000), 3000);
      });
  }, []);

  useEffect(() => {
    if (globeReady && globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 6.0;

      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 4000);

      const animateCountries = (index = 0) => {
        if (index >= highlightSequence.length) {
          setShowOnlyHighlighted(true);
          return;
        }

        const code = highlightSequence[index];

        setHighlightedCountries((prev) => [...new Set([...prev, code])]);

        globeEl.current.pointOfView({
          lat: countryData[code].lat,
          lng: countryData[code].lng,
          altitude: 4.0,
        }, 1500);

        setTimeout(() => animateCountries(index + 1), 4000);
      };

      setTimeout(() => animateCountries(), 5000);
    }
  }, [globeReady]);

  const arcsData = highlightedCountries
    .filter(code => code !== 'IN')
    .map(code => ({
      startLat: countryData.IN.lat,
      startLng: countryData.IN.lng,
      endLat: countryData[code].lat,
      endLng: countryData[code].lng,
      color: 'rgba(255, 255, 255, 0.7)',
      arcStroke: 0.5,
      arcDashLength: 0.9,
      arcDashGap: 4,
      arcDashAnimateTime: 1500,
      arcAltitude: 0.3,
    }));

  return (
    <div className="glob-container" ref={containerRef}>
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          onGlobeReady={() => setGlobeReady(true)}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countries.features}
        polygonAltitude={({ properties }: any) => {
          const iso = properties.ISO_A2;
          if (highlightedCountries.includes(iso)) {
            const pop = properties.POP_EST;
            return pop ? Math.max(0.05, Math.sqrt(+pop) * 3.5e-5) : 0.05;
          }
          return 0.01;
        }}
        polygonCapColor={({ properties }: any) => {
          const iso = properties.ISO_A2;
          return highlightedCountries.includes(iso)
            ? 'yellow'
            : showOnlyHighlighted
            ? 'rgba(0,0,0,0)'
            : 'rgb(40, 40, 40)';
        }}
        polygonSideColor={({ properties }: any) => {
          const iso = properties.ISO_A2;
          return highlightedCountries.includes(iso)
            ? 'rgba(255, 255, 0, 0.5)'
            : showOnlyHighlighted
            ? 'rgba(0,0,0,0)'
            : 'rgba(40, 40, 40, 0.2)';
        }}
        polygonStrokeColor={() =>
          showOnlyHighlighted ? 'rgba(0,0,0,0)' : 'rgba(80,80,80,0.3)'
        }
        polygonsTransitionDuration={transitionDuration}
        arcsData={arcsData}
        arcColor={() => 'white'}
        arcAltitude={0.3}
      />
      )}
    </div>
  );
};

export default Glob;
