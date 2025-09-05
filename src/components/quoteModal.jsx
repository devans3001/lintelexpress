import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Package,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
} from "lucide-react";

const QuoteModal = ({ isOpen, onClose, service = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    serviceType: service?.name || "",
    quantity: "",
    specifications: "",
    deliveryLocation: "",
    timeline: "",
    additionalRequirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quote submission logic here
    console.log("Quote request submitted:", formData);
    alert(
      "Quote request submitted successfully! We will contact you within 24 hours."
    );
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      serviceType: "",
      quantity: "",
      specifications: "",
      deliveryLocation: "",
      timeline: "",
      additionalRequirements: "",
    });
  };

  // DRYed modal JSX
  const Input = ({
    label,
    name,
    type = "text",
    required,
    icon: Icon,
    value,
    placeholder,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
        {label} {required && "*"}
      </label>
      <div className={Icon ? "relative" : ""}>
        {Icon && (
          <Icon className="absolute left-3 z-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`w-full ${
            Icon ? "pl-10" : "px-4"
          } pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-body`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );

  const TextArea = ({
    label,
    name,
    rows = 3,
    icon: Icon,
    value,
    placeholder,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
        {label}
      </label>
      <div className={Icon ? "relative" : ""}>
        {Icon && (
          <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        )}
        <textarea
          name={name}
          value={value}
          onChange={handleInputChange}
          rows={rows}
          className={`w-full ${
            Icon ? "pl-10" : "px-4"
          } pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-body`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );

  const Select = ({ label, name, value, required, options = [] }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
        {label} {required && "*"}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-body"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky z-3 top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 font-heading">
                    Request Quote {service && `- ${service.name}`}{" "}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2 font-heading">
                      <User className="h-5 w-5 text-blue-600" />
                      <span>Contact Information</span>
                    </h3>

                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      required
                      placeholder="Enter your full name"
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      required
                      icon={Mail}
                      placeholder="your.email@company.com"
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      required
                      icon={Phone}
                      placeholder="+1 (555) 123-4567"
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      placeholder="Your company name"
                    />
                    <Input
                      label="Country"
                      name="country"
                      value={formData.country}
                      required
                      icon={MapPin}
                      placeholder="Your country"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2 font-heading">
                      <Package className="h-5 w-5 text-blue-600" />
                      <span>Service Requirements</span>
                    </h3>

                    {/* <Select
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      required
                      options={serviceOptions}
                    /> */}
                    <Input
                      label="Service Required"
                      name="serviceType"
                      value={service?.name || ""}
                    //   required
                      readOnly
                    //   placeholder="e.g., 100 tons, 50 containers"
                    />
                    <Input
                      label="Quantity Required"
                      name="quantity"
                      value={formData.quantity}
                      required
                      placeholder="e.g., 100 tons, 50 containers"
                    />
                    <TextArea
                      label="Quality Specifications"
                      name="specifications"
                      value={formData.specifications}
                      rows={3}
                      placeholder="Specify quality requirements, certifications needed, etc."
                    />
                    <Input
                      label="Delivery Location"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      required
                      placeholder="Port/City for delivery"
                    />
                    <Select
                      label="Required Timeline"
                      name="timeline"
                      value={formData.timeline}
                      options={[
                        { value: "", label: "Select timeline" },
                        {
                          value: "Urgent (1-2 weeks)",
                          label: "Urgent (1-2 weeks)",
                        },
                        {
                          value: "Standard (3-4 weeks)",
                          label: "Standard (3-4 weeks)",
                        },
                        {
                          value: "Flexible (1-2 months)",
                          label: "Flexible (1-2 months)",
                        },
                        {
                          value: "Long-term contract",
                          label: "Long-term contract",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <TextArea
                    label="Additional Requirements"
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    rows={4}
                    icon={MessageSquare}
                    placeholder="Any additional requirements, special handling instructions, or questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-heading"
                  >
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-heading"
                  >
                    <Send className="h-5 w-5" />
                    <span>Submit Quote Request</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
