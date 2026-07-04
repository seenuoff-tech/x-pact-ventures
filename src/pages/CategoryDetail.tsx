import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categoryDetails } from '../data/productsDetails';
import './CategoryDetail.css';

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Find the category based on the ID
  const category = categoryDetails.find((c) => c.categoryId === categoryId);

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="spices-page" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="spices-page">
      {/* Background overlay */}
      <div className="spices-bg-overlay"></div>

      <div className="spices-container">
        {/* Header */}
        <header className="spices-header">
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

        {/* Disclaimer section */}
        {category.disclaimer && (
          <div className="category-disclaimer">
            <p>{category.disclaimer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
