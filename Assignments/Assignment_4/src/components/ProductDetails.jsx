import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id: parseInt(id),
    name: `Premium Product ${id}`,
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'Experience premium quality with our latest product. Features include high-end materials, superior craftsmanship, and innovative technology.',
    specs: ['Premium Quality', '1 Year Warranty', 'Free Shipping', '24/7 Support']
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <motion.img 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl text-blue-600 font-semibold mb-6">${product.price}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
