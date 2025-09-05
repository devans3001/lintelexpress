

import { motion } from "framer-motion";


import React from 'react'
import QuoteButton from "./quoteButton";
import { Star } from "lucide-react";

function Testimonial() {
    {/* Testimonials Section */}

    
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Agro Ltd",
      role: "Import Manager",
      content: "LintelExpress has been our trusted partner for over 3 years. Their expertise in agricultural exports and attention to detail is unmatched. Every shipment arrives on time and in perfect condition.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      company: "Asian Trade Corp",
      role: "CEO",
      content: "The team at LintelExpress goes above and beyond. Their custom brokerage services saved us thousands in duties and their logistics solutions are top-notch. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amara Okafor",
      company: "West Africa Exports",
      role: "Operations Director",
      content: "Working with LintelExpress transformed our export operations. Their knowledge of international trade regulations and efficient freight services made expanding to new markets seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Rodriguez",
      company: "Latin American Imports",
      role: "Procurement Manager",
      content: "LintelExpress delivers quality products consistently. Their organic agricultural goods are exactly what our customers demand, and their distribution network is incredibly reliable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Thompson",
      company: "European Food Distributors",
      role: "Supply Chain Manager",
      content: "The chandling services provided by LintelExpress are exceptional. They handle all our port operations with professionalism and efficiency. Our ships are always well-provisioned.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Wilson",
      company: "International Commodities",
      role: "Trading Director",
      content: "LintelExpress understands the complexities of international trade. Their freight forwarding and customs expertise has streamlined our operations and reduced costs significantly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];
  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 font-heading">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-body">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-body">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 font-body leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>

         
        </div>
      </section>
  )
}

export default Testimonial