import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import './Products.css';

interface ProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const productList: ProductItem[] = [
  {
    id: 1,
    name: 'Millets',
    description: 'Nutrient-rich, sustainable, and wholesome grains sourced directly from local organic farms for global export.',
    image: '/products/millets.png',
  },
  {
    id: 2,
    name: 'Spices',
    description: 'Aromatic, hand-selected spices processed to lock in their natural flavors, colors, and global standard freshness.',
    image: '/products/spices.png',
  },
  {
    id: 3,
    name: 'Coir Products',
    description: 'Eco-friendly and biodegradable coir fiber products crafted for agricultural, industrial, and household applications.',
    image: '/products/coir.png',
  },
  {
    id: 4,
    name: 'Cashews',
    description: 'Premium quality cashew nuts, processed with care under hygienic conditions to deliver rich taste and buttery texture.',
    image: '/products/cashews.png',
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;
    const page = pageRef.current;
    if (!cursor || !container || !page) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterPage = () => {
      setCursorActive(true);
    };

    const onMouseLeavePage = () => {
      setCursorActive(false);
    };

    const onMouseEnterContainer = () => {
      setIsHoveringImage(true);
    };

    const onMouseLeaveContainer = () => {
      setIsHoveringImage(false);
    };

    // Smooth cursor follow using lerp
    let animationFrameId: number;
    const updateCursor = () => {
      // Lerp logic for smooth tracking
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    page.addEventListener('mouseenter', onMouseEnterPage);
    page.addEventListener('mouseleave', onMouseLeavePage);
    container.addEventListener('mouseenter', onMouseEnterContainer);
    container.addEventListener('mouseleave', onMouseLeaveContainer);
    
    // Start animation loop
    updateCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      page.removeEventListener('mouseenter', onMouseEnterPage);
      page.removeEventListener('mouseleave', onMouseLeavePage);
      container.removeEventListener('mouseenter', onMouseEnterContainer);
      container.removeEventListener('mouseleave', onMouseLeaveContainer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={pageRef} 
      className="products-page"
      onClick={() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }}
    >
      {/* Custom Cursor Follower */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${cursorActive ? 'active' : ''} ${isHoveringImage ? 'cursor-dot' : ''}`}
      >
        <ArrowRight />
      </div>

      {/* Carousel Container */}
      <div 
        ref={containerRef} 
        className="carousel-container"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Mousewheel, Keyboard, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={false}
          className="swiper-container-custom"
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-slide">
                {/* Background Image wrapper */}
                <div className="slide-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                  />
                </div>

                {/* Content Overlay */}
                <div className="slide-content">
                  <span className="outline-text">{product.name}</span>
                  <p className="product-desc">{product.description}</p>
                  <button 
                    className="read-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.name === 'Spices') {
                        navigate('/products/spices');
                      }
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
