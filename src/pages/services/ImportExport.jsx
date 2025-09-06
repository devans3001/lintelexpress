import { motion } from 'framer-motion';
import { Ship, Globe, Users, Package, CheckCircle, ArrowRight, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteButton from '../../components/quoteButton';

const ImportExport = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Smallholder Support",
      description: "Dedicated support for small-scale farmers and agricultural producers to access global markets."
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Cooperative Partnerships",
      description: "Strategic partnerships with agricultural cooperatives for bulk export operations."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Wholesale Operations",
      description: "Comprehensive wholesale import/export services for large-scale agricultural trade."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Individual Household Service",
      description: "Personalized service for individual households seeking quality agricultural products."
    }
  ];

  const benefits = [
    "Quality assurance and product certification",
    "Competitive pricing and cost-effective solutions",
    "Easy access to global agricultural markets",
    "Consumer satisfaction guarantee",
    "Comprehensive documentation support",
    "Regulatory compliance assistance"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Ship className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Import and Export Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Connecting global markets with quality agricultural products through comprehensive import and export solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Comprehensive Trade Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                The target market are smallholder, cooperatives, wholesalers and individual households. This offers an opportunity to shop correctly, quality and affordable. Our goal is to consumers satisfaction, quality goods and services, easy access to goods and products.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/drsjzibcr/image/upload/v1757159928/import-export_xq0ivw.jpg"
                alt="Import Export Operations"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute z-50 top-0 left-0 opacity-30 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Import & Export Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Tailored solutions for every segment of the agricultural trade market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Ready to Start Your Import/Export Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Connect with global markets through our comprehensive import and export services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                className="bg-white text-blue-600 hover:bg-blue-50"
                service={{name:"Import and Export"}}
              >
                Get Quote Now
              </QuoteButton>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 font-heading"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImportExport;