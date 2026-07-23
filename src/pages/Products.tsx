import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import 'swiper/css';
import './Products.css';

interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const productList: ProductItem[] = [
  {
    id: 'millets-and-ancient-grains',
    name: 'Millets & Ancient Grains',
    description: "A premium selection of sustainably sourced, nutrient-dense, and climate-resilient minor millets from South India's prime agricultural clusters.",
    image: '/products/millets.png',
  },
  {
    id: 'rice-varieties',
    name: 'Rice Varieties',
    description: 'An elite range of aged, sortex-cleaned basmati and non-basmati rice, including aromatic, staples, and geographically protected varieties.',
    image: '/products/millets.png',
  },
  {
    id: 'other-cereals-and-grains',
    name: 'Other Cereals & Grains',
    description: 'High-yielding, institutional-grade corn and fiber-rich emmer wheat varieties cultivated across traditional Southern dryland belts.',
    image: '/products/millets.png',
  },
  {
    id: 'pulses-and-lentils',
    name: 'Pulses & Lentils',
    description: 'Premium, laser-cleaned pulses and split lentils processing high protein yields and uniform cooking consistency for global distribution.',
    image: '/products/millets.png',
  },
  {
    id: 'oil-seeds',
    name: 'Oil Seeds',
    description: 'Strictly calibrated, export-grade seeds offering exceptionally high oil concentration and low moisture profiles for global industrial and culinary demands.',
    image: '/products/millets.png',
  },
  {
    id: 'nuts-and-cocoa-beans',
    name: 'Nuts & Cocoa Beans',
    description: 'Premium, globally certified cashew kernels and well-fermented, sun-dried whole cocoa beans sourced from elite peninsular plantations.',
    image: '/products/cashews.png',
  },
  {
    id: 'natural-sweeteners',
    name: 'Natural Sweeteners',
    description: '100% unrefined, chemical-free cane and organic jaggery variants rich in native minerals and optimized for an extended shelf life.',
    image: '/products/millets.png',
  },
  {
    id: 'spices-and-aromatics',
    name: 'Spices & Aromatics',
    description: 'High-purity, laboratory-certified whole and ground southern spices boasting intense volatile oil densities and premium pungency profiles.',
    image: '/products/spices.png',
  },
  {
    id: 'coconut-and-coir-commodities',
    name: 'Coconut & Coir Commodities',
    description: 'Premium, sustainably extracted virgin coconut oils, pasteurized desiccated powders, and high-expansion hydroponic grow-media coir blocks.',
    image: '/products/coir.png',
  },
  {
    id: 'sustainable-fuel-briquetting',
    name: 'Sustainable Fuel Briquetting',
    description: 'High-density, low-ash extruded charcoal briquettes engineered for clean, sparkless, and long-lasting commercial heat performance.',
    image: '/products/coir.png',
  },
  {
    id: 'moringa-and-superfood-products',
    name: 'Moringa & Superfood Products',
    description: 'Pure, nutrient-locked moringa pods, ultra-fine organic leaf powders, and cold-pressed botanical oils processed to rigorous international health standards.',
    image: '/products/spices.png',
  },
  {
    id: 'eco-friendly-and-compostable-tableware',
    name: 'Eco-Friendly & Compostable Tableware',
    description: 'A premium collection of microwave-safe, oil-resistant, and 100% compostable dinnerware molded entirely from natural palm sheaths and sugarcane pulp.',
    image: '/products/coir.png',
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
  const [isLeftHalf, setIsLeftHalf] = useState(false);

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
      setIsLeftHalf(e.clientX < window.innerWidth / 2);
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
          if (isLeftHalf) {
            swiperRef.current.slidePrev();
          } else {
            swiperRef.current.slideNext();
          }
        }
      }}
    >
      {/* Custom Cursor Follower */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${cursorActive ? 'active' : ''} ${isHoveringImage ? 'cursor-dot' : ''}`}
      >
        {isLeftHalf ? <ArrowLeft /> : <ArrowRight />}
      </div>

      {/* Carousel Container */}
      <div className="carousel-wrapper" ref={containerRef}>
        <div className="carousel-container">
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
                      navigate(`/products/${product.id}`);
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
    </div>
  );
};

export default Products;
