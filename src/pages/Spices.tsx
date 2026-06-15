import React, { useEffect } from 'react';
import './Spices.css';

interface TimelineItem {
  id: number;
  name: string;
  descriptions: string[];
  align: 'left' | 'right';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    name: 'BLACK PEPPER',
    descriptions: [
      'The main destination of Pepper exports from India are: China ($313M), Thailand ($146M), United States ($146M), Indonesia ($114M), and Sri Lanka ($112M).',
      'We source 93% of our pepper from Kerala and Karnataka, and 2% from Tamil Nadu.'
    ],
    align: 'left',
  },
  {
    id: 2,
    name: 'CUMIN',
    descriptions: [
      'The top importers of Cumin seeds were China ($111M), Bangladesh ($66.4M), United States ($46.9M), United Arab Emirates ($28.3M).',
      'Major production from Gujarat and Rajasthan.'
    ],
    align: 'right',
  },
  {
    id: 3,
    name: 'TURMERIC',
    descriptions: [
      'The United States is the largest consumer of turmeric from India, accounting for 22% of the total exported value. Followed by UK, Germany, Japan, UAE, Malaysia and Morocco.',
      "India's share in total turmeric production in the world is more than 80%. In India, Andhra Pradesh is the largest producer of Turmeric followed by Tamil Nadu."
    ],
    align: 'left',
  },
  {
    id: 4,
    name: 'TAMARIND',
    descriptions: [
      'The United Arab Emirates, Vietnam, Saudi Arabia, United Kingdom, Malaysia, USA, Egypt, Qatar, Singapore, and Kuwait.',
      'Tamil Nadu accounted for the largest volume of tamarind production in India in fiscal year 2023. This figure stood at about 44 thousand metric tons.'
    ],
    align: 'right',
  },
  {
    id: 5,
    name: 'CHILLI',
    descriptions: [
      'India is the world\'s largest producer, consumer, and exporter of chilies, contributing around 40% of the world\'s total production.',
      'Majorly exported to China, Thailand, USA, UAE, Malaysia, and UK.'
    ],
    align: 'left',
  },
  {
    id: 6,
    name: 'CARDAMOM',
    descriptions: [
      'India is a major exporter of cardamom, and the United States is one of its key markets. In 2023, India exported $155.1 million worth of cardamom, with 79,500 shipments made by 3,433 exporters to 11,220 buyers.',
      'Other major importers are Saudi Arabia, United Arab Emirates, Iran, Qatar, Canada, Japan, and United Kingdom.'
    ],
    align: 'right',
  },
];

const Spices: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="spices-page">
      {/* Background overlay with spices background image pattern */}
      <div className="spices-bg-overlay"></div>

      <div className="spices-container">
        {/* Distressed Yellow Spices Header */}
        <header className="spices-header">
          <div className="spices-title-box">
            <span>SPICES</span>
          </div>
        </header>

        {/* Timeline Axis */}
        <div className="timeline-axis">
          <div className="top-pin"></div>
        </div>

        {/* Timeline items container */}
        <div className="timeline-items">
          {timelineData.map((item) => (
            <div key={item.id} className={`timeline-row ${item.align}`}>
              
              {/* Central Node for visual alignment */}
              <div className="timeline-node">
                <div className="inner-dot"></div>
              </div>

              {/* Side Content Block */}
              <div className="timeline-content-block">
                <div className="spice-branch-line">
                  <div className="end-dot"></div>
                </div>

                <div className="spice-details">
                  <h2 className="spice-title">{item.name}</h2>
                  {item.descriptions.map((desc, index) => (
                    <p key={index} className="spice-desc">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spices;
