
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Origin</p>
            <p className="font-semibold text-gray-900">{product.origin}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Quality</p>
            <p className="font-semibold text-green-600">{product.quality}</p>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
          <span>Get Quote</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;