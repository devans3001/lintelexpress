

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Premium <span className="text-green-600">Agricultural</span> Exports
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connecting global markets with the finest agro-based products. 
              From farm to international destinations with quality assurance and reliable logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural products"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Global Reach</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Quality Assured</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;