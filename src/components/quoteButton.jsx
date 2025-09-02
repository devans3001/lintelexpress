import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import QuoteModal from './quoteModal';

const QuoteButton = ({ 
  product = null, 
  service = null, 
  variant = 'primary', 
  size = 'default',
  className = '',
  children 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 font-heading';
  
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors',
    outline: 'border border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600',
    ghost: 'text-emerald-600 hover:bg-emerald-50'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm rounded-md space-x-1',
    default: 'px-6 py-3 text-base rounded-lg space-x-2',
    large: 'px-8 py-4 text-lg rounded-xl space-x-3'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children ? (
          children
        ) : (
          <>
            <MessageCircle className={size === 'small' ? 'h-4 w-4' : size === 'large' ? 'h-6 w-6' : 'h-5 w-5'} />
            <span>Get Quote</span>
            <ArrowRight className={size === 'small' ? 'h-3 w-3' : size === 'large' ? 'h-5 w-5' : 'h-4 w-4'} />
          </>
        )}
      </motion.button>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        service={service}
      />
    </>
  );
};

export default QuoteButton;