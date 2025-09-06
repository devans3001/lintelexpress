import { motion } from "framer-motion";

import { services } from "../helper/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../helper/helper";
import { Helmet } from "react-helmet";

const Services = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Initial assessment of your export requirements and product specifications.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Develop customized export strategy and logistics plan for your products.",
    },
    {
      step: "03",
      title: "Documentation",
      description:
        "Handle all necessary paperwork, certifications, and compliance requirements.",
    },
    {
      step: "04",
      title: "Execution",
      description:
        "Implement the export plan with quality control and timely delivery.",
    },
    {
      step: "05",
      title: "Delivery",
      description:
        "Ensure safe arrival of products at destination with full tracking support.",
    },
  ];

  return (
    <>
    <Helmet>
        <title>Services | LintelExpress</title>
      </Helmet>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Professional Export Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-body">
              Comprehensive logistics and trade solutions for global
              agricultural commerce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Complete Export Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              From freight forwarding to customs brokerage, we provide
              end-to-end export services.
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
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl flex flex-col gap-5 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center ">
                  {<service.icon className={service.className} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm font-body">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700 font-body"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} onClick={handleScrollTop}>
                  <motion.button
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-heading cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Export Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              A streamlined 5-step process ensuring smooth and efficient export
              operations.
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
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#1e40af",
                    transition: { duration: 0.2 },
                  }}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Export Your Products?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Get started with our expert export services and reach global
              markets today.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 font-heading"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
    </>

  );
};
export default Services;
