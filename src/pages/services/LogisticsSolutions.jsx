import { motion } from 'framer-motion';
import { BarChart3, Truck, Package, Globe, CheckCircle, ArrowRight, Warehouse, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteButton from '../../components/quoteButton';

const LogisticsSolutions = () => {
  const solutions = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Transportation",
      description: "Multi-modal transportation solutions optimized for agricultural product requirements."
    },
    {
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      title: "Warehousing",
      description: "Strategic warehousing facilities with specialized storage for agricultural commodities."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Inventory Management",
      description: "Advanced inventory control systems ensuring optimal stock levels and product rotation."
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Handling Cargo",
      description: "Specialized cargo handling equipment and procedures for agricultural products."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Clearing Customs",
      description: "Expert customs clearance services ensuring smooth international trade operations."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Delivering Goods",
      description: "Reliable delivery services with real-time tracking and proof of delivery."
    }
  ];

  const capabilities = [
    "End-to-end supply chain management",
    "Real-time inventory tracking and reporting",
    "Temperature-controlled logistics",
    "Cross-docking and consolidation services",
    "Reverse logistics and returns management",
    "Supply chain optimization consulting",
    "Risk management and contingency planning",
    "Performance analytics and reporting"
  ];

  const industries = [
    {
      title: "Agricultural Exports",
      description: "Specialized logistics for fresh produce, grains, and processed agricultural products",
      features: ["Cold chain management", "Quality preservation", "Export documentation"]
    },
    {
      title: "Food & Beverage",
      description: "Comprehensive logistics solutions for food and beverage manufacturers and distributors",
      features: ["HACCP compliance", "Temperature control", "Traceability systems"]
    },
    {
      title: "Commodity Trading",
      description: "Bulk commodity logistics including storage, handling, and international shipping",
      features: ["Bulk handling", "Quality testing", "Certificate management"]
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
            <BarChart3 className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Logistics Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Integrated logistics solutions providing end-to-end supply chain management for agricultural products
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
                Comprehensive Supply Chain Management
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Transportation, warehousing, inventory management, handling cargo, clearing customs, and delivering the goods. Our integrated logistics solutions provide complete supply chain visibility and control, ensuring your agricultural products move efficiently from origin to destination.
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
                alt="Logistics Solutions"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Logistics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Comprehensive logistics services covering every aspect of supply chain management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
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
                  {solution.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Specialized logistics solutions tailored to specific industry requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 font-body">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-body">{feature}</span>
                    </div>
                  ))}
                </div>
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
              Our Logistics Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Streamlined process ensuring efficient supply chain management from planning to delivery
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
                Planning
              </h3>
              <p className="text-gray-600 font-body">
                Strategic supply chain planning and route optimization
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
                Execution
              </h3>
              <p className="text-gray-600 font-body">
                Coordinated execution across all logistics functions
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
                Monitoring
              </h3>
              <p className="text-gray-600 font-body">
                Real-time monitoring and performance tracking
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
                Optimization
              </h3>
              <p className="text-gray-600 font-body">
                Continuous improvement and optimization
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
            <Globe className="w-12 h-12 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Partner with us for integrated logistics solutions that optimize your entire supply chain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                service={{name:"Logistic Solutions"}}
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get Logistics Quote
              </QuoteButton>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 font-heading"
              >
                <span>Consult Our Experts</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsSolutions;