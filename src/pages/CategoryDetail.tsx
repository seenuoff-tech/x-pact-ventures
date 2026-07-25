import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categoryDetails } from '../data/productsDetails';
import { ArrowLeft } from 'lucide-react';
import './CategoryDetail.css';

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  // Find the category based on the ID
  const category = categoryDetails.find((c) => c.categoryId === categoryId);

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);
    setActiveItemId(null); // Reset active item on page change
  }, [categoryId]);

  const toggleItem = (id: number) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  if (!category) {
    return (
      <div className="spices-page" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>Category Not Found</h1>
      </div>
    );
  }

  const getBackgroundImage = (id: string) => {
    switch (id) {
      case 'millets-and-ancient-grains': return '/products/bg_millets.jpg';
      case 'rice-varieties': return '/products/bg_rice.jpg';
      case 'other-cereals-and-grains': return '/products/bg_cereals.jpg';
      case 'pulses-and-lentils': return '/products/bg_pulses.jpg';
      case 'oil-seeds': return '/products/bg_oil_seeds.jpg';
      case 'nuts-and-cocoa-beans': return '/products/bg_nuts.jpg';
      case 'natural-sweeteners': return '/products/bg_sweeteners.jpg';
      case 'spices-and-aromatics': return '/products/bg_spices.jpg';
      case 'coconut-and-coir-commodities': return '/products/bg_coconut.jpg';
      case 'sustainable-fuel-briquetting': return '/products/bg_briquettes.jpg';
      case 'moringa-and-superfood-products': return '/products/bg_moringa.jpg';
      case 'eco-friendly-and-compostable-tableware': return '/products/bg_eco.jpg';
      default: return '/products/spices.png';
    }
  };

  const bgImage = getBackgroundImage(category.categoryId);

  return (
    <div className="spices-page">
      {/* Background overlay */}
      <div className="spices-bg-overlay" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <div className="spices-container">
        {/* Header */}
        <header className="spices-header">
          <button className="mobile-back-btn" onClick={() => navigate('/products')} aria-label="Go Back">
            <ArrowLeft size={24} />
          </button>
          <div className="spices-title-box">
            <span>{category.title}</span>
          </div>
        </header>

        {/* Timeline Axis */}
        <div className="timeline-axis">
          <div className="top-pin"></div>
        </div>

        {/* Timeline items container */}
        <div className="timeline-items">
          {category.items.map((item) => (
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

                <div 
                  className={`spice-details ${activeItemId === item.id ? 'active' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
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

        {/* Disclaimer section */}
        {category.disclaimer && (
          <div className="category-disclaimer">
            <p>
              {category.disclaimer.startsWith('Disclaimer:') ? (
                <>
                  <span style={{ color: '#F3CD00', fontWeight: 'bold' }}>Disclaimer:</span>
                  {category.disclaimer.substring(11)}
                </>
              ) : (
                category.disclaimer
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
