import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <motion.div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-heading"
          whileHover={{ scale: 1.1 }}
        >
          {product.category}
        </motion.div>
      </div>
      <div className="p-6 flex flex-col gap-3 md:gap-5">
        <h3 className="text-xl font-bold text-gray-900  font-heading">{product.name}</h3>
        <p className="text-gray-600 line-clamp-3 font-body">{product.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 font-body">Origin</p>
            <p className="font-semibold text-gray-900 font-heading">{product.origin}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-body">Quality</p>
            <p className="font-semibold text-blue-600 font-heading">{product.quality}</p>
          </div>
        </div>
        <motion.button
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-heading cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Get Quote</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;