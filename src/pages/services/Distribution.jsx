
import { motion } from 'framer-motion';
import { MapPin, Package, Thermometer, Truck, Eye, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteButton from "../../components/quoteButton";

const Distribution = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Inventory Management",
      description: "Advanced inventory control systems ensuring optimal stock levels and product availability."
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Sorting and Packaging",
      description: "Professional sorting and packaging services maintaining product quality and presentation."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-blue-600" />,
      title: "Cold Storage",
      description: "Temperature-controlled storage facilities for perishable agricultural products."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Shipping",
      description: "Reliable shipping solutions with multiple delivery options and scheduling flexibility."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Tracking and Visibility",
      description: "Real-time tracking systems providing complete visibility throughout the distribution process."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Delivery",
      description: "Last-mile delivery services ensuring products reach their final destination safely."
    }
  ];

  const capabilities = [
    "Multi-channel distribution networks",
    "Temperature-controlled logistics",
    "Quality preservation protocols",
    "Flexible delivery scheduling",
    "Real-time inventory tracking",
    "Custom packaging solutions",
    "Route optimization technology",
    "Customer notification systems"
  ];

  const benefits = [
    {
      title: "Market Reach",
      description: "Extensive distribution network ensuring your products reach target markets efficiently",
      icon: <MapPin className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Quality Assurance",
      description: "Specialized handling and storage maintaining product integrity throughout distribution",
      icon: <Package className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Cost Efficiency",
      description: "Optimized routing and consolidation reducing distribution costs and improving margins",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Visibility",
      description: "Complete transparency with real-time tracking and reporting throughout the supply chain",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    }
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
            <MapPin className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Distribution Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Comprehensive distribution solutions ensuring your agricultural products reach markets efficiently and safely
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
                Complete Distribution Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Inventory management, sorting and packaging, cold storage, shipping, tracking and visibility, delivery. Our comprehensive distribution services ensure your agricultural products maintain quality while reaching target markets efficiently and cost-effectively.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{capability}</span>
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Distribution Services"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Distribution Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              End-to-end distribution solutions covering every aspect of product movement and delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Distribution Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Experience the benefits of working with distribution experts who understand agricultural products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3 font-heading">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-body">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Distribution Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Streamlined process ensuring efficient product flow from storage to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                Inventory Receipt
              </h3>
              <p className="text-gray-600 font-body">
                Receive and catalog products in our distribution centers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                Processing
              </h3>
              <p className="text-gray-600 font-body">
                Sort, package, and prepare products for distribution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                Shipping
              </h3>
              <p className="text-gray-600 font-body">
                Coordinate shipping with optimal routing and scheduling
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                Delivery
              </h3>
              <p className="text-gray-600 font-body">
                Final delivery with tracking and confirmation
              </p>
            </motion.div>
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
            <Truck className="w-12 h-12 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Optimize Your Distribution Network
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Partner with us for efficient, reliable distribution solutions that get your products to market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                className="bg-white text-blue-600 hover:bg-blue-50"
                service={{name:"Distribution"}}
              >
                Get Distribution Quote
              </QuoteButton>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 font-heading"
              >
                <span>Discuss Your Needs</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Distribution;