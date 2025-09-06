import { motion } from 'framer-motion';
import { Anchor, Fuel, Package, Wrench, Ship, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteButton from '../../components/quoteButton';
import { handleScrollTop } from '../../helper/helper';

const Chandling = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Ship Provisioning",
      description: "Complete food and beverage supply for crew and passengers during port stays."
    },
    {
      icon: <Fuel className="w-8 h-8 text-blue-600" />,
      title: "Fuel and Lubricants",
      description: "Marine fuel, diesel, and specialized lubricants for optimal vessel performance."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Spare Parts Supply",
      description: "Essential spare parts and equipment for vessel maintenance and repairs."
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "Port Services",
      description: "Comprehensive port-related services including documentation and coordination."
    }
  ];

  const advantages = [
    "24/7 availability for urgent vessel needs",
    "Quality certified provisions and supplies",
    "Competitive pricing with transparent billing",
    "Experienced team with maritime expertise",
    "Fast turnaround times to minimize delays",
    "Comprehensive inventory management"
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
            <Anchor className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Chandling Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Professional ship chandling services providing essential provisions and equipment while vessels are at port
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
                Complete Ship Supply Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Supplying ships with necessary provisions and equipment while they are at port, including food, fuel, lubricants, spare parts, and other goods and services. Our chandling services ensure vessels are fully equipped for their next voyage.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{advantage}</span>
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
                src="https://res.cloudinary.com/drsjzibcr/image/upload/v1757162384/chandling_1_eoxjne.jpg"
                alt="Ship Chandling Services"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute  bg-blue-600 bg-opacity-20 rounded-lg"></div>
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
              Our Chandling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Comprehensive ship supply solutions tailored to your vessel's specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Chandling Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Streamlined process ensuring efficient vessel provisioning and minimal port delays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Order Placement
              </h3>
              <p className="text-gray-600 font-body">
                Submit your vessel's requirements and specifications for provisioning
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
                Preparation
              </h3>
              <p className="text-gray-600 font-body">
                Our team prepares and quality-checks all provisions and supplies
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
                Delivery
              </h3>
              <p className="text-gray-600 font-body">
                Timely delivery to your vessel with proper documentation and invoicing
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
            <Clock className="w-12 h-12 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Need Urgent Chandling Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Our 24/7 chandling services ensure your vessel is fully provisioned and ready for departure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                className="bg-white text-blue-600 hover:bg-blue-50"
                service={{ name: "Chandling" }}
              >
                Request Chandling Quote
              </QuoteButton>
              <Link
                to="/contact"
                onClick={handleScrollTop}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 font-heading"
              >
                <span>Emergency Contact</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Chandling;