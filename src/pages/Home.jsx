import { motion } from "framer-motion";
import Hero from "../components/hero";
import ProductCard from "../components/productCard";
import { Users, Globe, Award, Truck, MapPin, BarChart3 } from "lucide-react";
import QuoteButton from "../components/quoteButton";
import Testimonial from "../components/testimonial";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Distributions",
      icon: MapPin,
      description:
        "Strategic distribution network ensuring your products reach target markets efficiently and cost-effectively.",
      image: "/distribution.png",
      link: "/services/distribution",
      quality: "Grade A",
    },
    {
      id: 2,
      name: "Logistics Solutions",
      icon: BarChart3,
      description:
        "Integrated logistics solutions from warehousing to last-mile delivery with real-time tracking capabilities.",
      image: "/logistics.png",
      link: "/services/logistics-solutions",
      quality: "Grade A",
    },
    {
      id: 3,
      name: "Freight Forwarding",
      icon: Truck,
      description:
        "Professional freight forwarding services by sea, air, and land with competitive rates and reliable scheduling.",
      image:
        "/forwarding.png",
      link: "/services/freight-forwarding",
      quality: "Grade A",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Truck, value: "1000+", label: "Shipments" },
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
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
              A Wide Range of Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lintel Express provides comprehensive logistics and trade
              solutions to meet all your import and export needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Streamline Your Customs Process
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We act as your liaison with customs and port authorities,
              providing expert advice on laws and procedures to avoid delays and{" "}
              <strong>minimize costs</strong>.
            </p>
            <QuoteButton variant="secondary" size="large">
              <span>Start Your Export Journey</span>
            </QuoteButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
