import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Premium Cashews', image: '/products/cashews.png' },
  { id: 2, name: 'Organic Millets', image: '/products/millets.png' },
  { id: 3, name: 'Indian Spices', image: '/products/spices.png' },
  { id: 4, name: 'Coir Products', image: '/products/coir.png' },
  { id: 5, name: 'Premium Cashews', image: '/products/cashews.png' },
  { id: 6, name: 'Organic Millets', image: '/products/millets.png' },
  { id: 7, name: 'Indian Spices', image: '/products/spices.png' },
  { id: 8, name: 'Coir Products', image: '/products/coir.png' },
];

const ProductCarousel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <motion.div 
        className="flex space-x-8 px-4"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ width: 'max-content' }}
      >
        {products.map((product, index) => (
          <motion.div
            key={`${product.id}-${index}`}
            className="relative group w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            whileHover={{ y: -10 }}
          >
            {/* Image */}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-[#F3CD00] text-2xl font-bold mb-4 uppercase tracking-wider">
                {product.name}
              </h3>
              <button 
                onClick={() => navigate('/products')}
                className="bg-[#F3CD00] text-black px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-white transition-colors"
              >
                More Info
              </button>
            </div>

            {/* Bottom Label (Visible when not hovering) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 group-hover:opacity-0 transition-opacity">
              <h3 className="text-[#F3CD00] text-xl font-bold uppercase">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCarousel;
