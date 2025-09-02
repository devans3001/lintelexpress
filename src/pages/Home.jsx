import { motion } from 'framer-motion';
import Hero from '../components/hero';
import ProductCard from '../components/productCard';
import { Users, Globe, Award, Truck } from 'lucide-react';
import QuoteButton from '../components/quoteButton';

const Home = () => {
  const featuredProducts = [
   {
    id: 1,
    name: 'Premium Soya Beans',
    category: 'Oilseeds',
    description: 'High-protein soya beans with excellent oil content, perfect for processing and international trade markets.',
    image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlbWl1bSUyMFNveWElMjBCZWFuc3xlbnwwfHwwfHx8MA%3D%3D',
    origin: 'Brazil',
    quality: 'Grade A'
  },
  {
    id: 2,
    name: 'Organic Sesame Seeds',
    category: 'Oilseeds',
    description: 'Premium quality organic sesame seeds with high oil content and natural flavor, certified for international markets.',
    image: 'https://plus.unsplash.com/premium_photo-1674654419483-e9b8c9d2f3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE9yZ2FuaWMlMjBTZXNhbWUlMjBTZWVkc3xlbnwwfHwwfHx8MA%3D%3D',
    origin: 'Sudan',
    quality: 'Organic'
  },
  {
    id: 3,
    name: 'Refined Palm Oil',
    category: 'Oils',
    description: 'High-quality refined palm oil with excellent stability and neutral taste, ideal for food processing industries.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'Malaysia',
    quality: 'Premium'
  },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Truck, value: '1000+', label: 'Shipments' }
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium selection of agricultural products, carefully sourced and quality-tested for international markets.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Export Your Products?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust LintelExpress for their agricultural export needs.
            </p>
              <QuoteButton
              variant="secondary"
              size="large"
            >
              <span>Start Your Export Journey</span>
            </QuoteButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;