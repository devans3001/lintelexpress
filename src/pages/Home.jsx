import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Users, Globe, Award, Truck } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Basmati Rice',
      category: 'Grains',
      description: 'Long-grain aromatic rice with exceptional quality and taste, perfect for international markets.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Grade A'
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      category: 'Spices',
      description: 'Pure, organic turmeric powder with high curcumin content, sourced from certified organic farms.',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Organic'
    },
    {
      id: 3,
      name: 'Red Kidney Beans',
      category: 'Pulses',
      description: 'High-quality red kidney beans, rich in protein and perfect for various culinary applications.',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Premium'
    }
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
                  <IconComponent className="h-12 w-12 text-green-600 mx-auto mb-4" />
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

      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Export Your Products?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust LintelExpress for their agricultural export needs.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Export Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;