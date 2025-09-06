import { motion } from 'framer-motion';
import { FileText, Shield, Users, Globe, CheckCircle, ArrowRight, Calculator, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteButton from "../../components/quoteButton";

const CustomBrokerage = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Document Preparation",
      description: "Complete preparation of all customs documentation and trade certificates."
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Tariff Classification",
      description: "Accurate tariff classification ensuring proper duty calculation and compliance."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Duty Payment",
      description: "Efficient duty payment processing and tax optimization strategies."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Regulatory Compliance",
      description: "Ensuring full compliance with international trade regulations and standards."
    }
  ];

  const expertise = [
    "International trade law and regulations",
    "Customs procedures and documentation",
    "Tariff classification and valuation",
    "Trade agreement utilization",
    "Risk assessment and mitigation",
    "Duty optimization strategies",
    "Compliance auditing and reporting",
    "Government liaison and representation"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Documentation Review",
      description: "Thorough review of all trade documents and shipment details"
    },
    {
      step: "02",
      title: "Classification & Valuation",
      description: "Accurate tariff classification and customs valuation"
    },
    {
      step: "03",
      title: "Customs Filing",
      description: "Electronic filing of customs declarations and permits"
    },
    {
      step: "04",
      title: "Clearance Processing",
      description: "Coordination with customs authorities for smooth clearance"
    },
    {
      step: "05",
      title: "Release & Delivery",
      description: "Final release coordination and delivery authorization"
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
            <FileText className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Custom Brokerage Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Expert customs brokerage services navigating complex international trade processes with precision and compliance
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
                Expert Customs Navigation
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Assists importers and exporters in navigating the complex process of international trade, handling all necessary customs formalities, including document preparation, tariff classification, duty payment, and compliance with regulations. Acts as a liaison between clients and governmental agencies involved in customs, such as customs authorities and port authorities. Provides advice on customs laws, trade procedures, and strategies to avoid delays and minimize costs.
              </p>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{item}</span>
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
                src="https://res.cloudinary.com/drsjzibcr/image/upload/v1757162403/custom-brokerage_1_d7wf1j.jpg"
                alt="Custom Brokerage Services"
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
              Our Brokerage Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Comprehensive customs brokerage solutions ensuring smooth international trade operations
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
              Our Customs Clearance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Streamlined 5-step process ensuring efficient customs clearance and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#dc2626", transition: { duration: 0.2 } }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                Minimize Delays
              </h3>
              <p className="text-gray-600 font-body">
                Expert knowledge and established relationships with customs authorities ensure faster clearance times
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                Cost Optimization
              </h3>
              <p className="text-gray-600 font-body">
                Strategic duty planning and trade agreement utilization to minimize overall costs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                Compliance Assurance
              </h3>
              <p className="text-gray-600 font-body">
                Full regulatory compliance blueucing risk of penalties and ensuring smooth operations
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
              Need Expert Customs Assistance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Let our experienced customs brokers handle your international trade compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                variant="secondary"
                size="large"
                className="bg-white text-blue-600 hover:bg-blue-50"
                service={{name:"Custom Brokerage"}}
              >
                Get Brokerage Quote
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

export default CustomBrokerage;