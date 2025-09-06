import { motion } from "framer-motion";
import {
  Truck,
  Plane,
  Ship,
  Train,
  Globe,
  CheckCircle,
  ArrowRight,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import QuoteButton from "../../components/quoteButton";

const FreightService = () => {
  const transportModes = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Road Transport",
      description:
        "Flexible road freight solutions for regional and cross-border deliveries.",
    },
    {
      icon: <Train className="w-8 h-8 text-blue-600" />,
      title: "Rail Freight",
      description:
        "Cost-effective rail transport for bulk agricultural commodities.",
    },
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: "Air Freight",
      description:
        "Fast air cargo services for time-sensitive agricultural products.",
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "Sea Freight",
      description:
        "Economical ocean freight for large volume international shipments.",
    },
  ];

  const services = [
    "Logistical flow management of shipments",
    "Trade regulation compliance and documentation",
    "Customs clearance and border procedures",
    "Delivery planning and route optimization",
    "Groupage services for shared loads",
    "Dedicated transport solutions",
    "Multi-modal transport coordination",
    "Real-time tracking and monitoring",
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      description:
        "Optimized routing and groupage options to minimize transportation costs",
    },
    {
      title: "Efficient Transport",
      description:
        "Multi-modal options ensuring the most efficient delivery methods",
    },
    {
      title: "Compliance Assurance",
      description:
        "Full compliance with international trade regulations and documentation",
    },
    {
      title: "Flexible Options",
      description:
        "Both large and small shipment solutions tailored to your needs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Package className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Freight Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Comprehensive freight forwarding solutions with multi-modal
              transport options for efficient global logistics
            </p>
          </motion.div>
        </div>
        {/* <img
          src={"/forwarding.png"}
          // alt={product.name}
          className="absolute top-0 z-1 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          /> */}
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
                Complete Freight Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Services include managing the logistical flow of shipments,
                ensuring compliance with trade regulations, often with
                additional services such as customs clearance, documentation,
                and delivery planning and providing options like groupage
                (shared loads) or dedicated modes like road, rail, air, or sea
                for cost-effective and efficient transport of both large and
                small shipments.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{service}</span>
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
                src="https://res.cloudinary.com/drsjzibcr/image/upload/v1757162395/freight-forwarding_1_yoo00m.jpg"
                alt="Freight Services"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Modes */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Multi-Modal Transport Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Choose from various transport modes optimized for your cargo type
              and delivery requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportModes.map((mode, index) => (
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
                  {mode.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                  {mode.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {mode.description}
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
              Why Choose Our Freight Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Experience the advantages of working with freight forwarding
              experts
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-body">{benefit.description}</p>
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
            <Globe className="w-12 h-12 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Ship Your Cargo Worldwide
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Get competitive freight rates and reliable delivery for your
              agricultural products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                className="bg-white text-blue-600 hover:bg-blue-50"
                service={{ name: "Freight Forwarding" }}
              >
                Get Freight Quote
              </QuoteButton>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 font-heading"
              >
                <span>Contact Freight Team</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreightService;
