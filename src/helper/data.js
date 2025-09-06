import { Award, Users, Globe, Truck, Shield, Package, Ship, FileText, Anchor, MapPin, BarChart3 } from 'lucide-react';



export const services = [
  {
    icon: Package,
    className: "w-12 h-12 text-blue-600",
    title: "Import & Export",
    link: "/services/import-export",
    description: "Efficient import operations with customs clearance, quality inspection, and timely delivery to your facilities.",
    features: ["Customs clearance", "Quality inspection", "Warehouse management"]
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    className: "w-12 h-12 text-blue-600",
    link: "/services/freight-forwarding",
    description: "Professional freight forwarding services by sea, air, and land with competitive rates and reliable scheduling.",
    features: ["Sea freight", "Air freight", "Land transportation"]
  },
  {
    icon: FileText,
    className: "w-12 h-12 text-blue-600",
    title: "Customs Brokerage",
    link: "/services/custom-brokerage",
    description: "Expert customs brokerage services ensuring smooth clearance and compliance with international trade regulations.",
    features: ["Duty calculation", "Permit processing", "Regulatory compliance"]
  },
  {
    icon: MapPin,
    className: "w-12 h-12 text-blue-600",
    title: "Distribution",
    link: "/services/distribution",
    description: "Strategic distribution network ensuring your products reach target markets efficiently and cost-effectively.",
    features: ["Network management", "Route optimization", "Market penetration"]
  },
  {
    icon: BarChart3,
    className: "w-12 h-12 text-blue-600",
    title: "Logistics Solutions",
    link: "/services/logistics-solutions",
    description: "Integrated logistics solutions from warehousing to last-mile delivery with real-time tracking capabilities.",
    features: ["Warehouse management", "Inventory control", "Supply chain optimization"]
  },
  {
    icon: Globe,
    className: "w-12 h-12 text-blue-600",
    title: "Chandling Services",
    link: "/services/chandling",
    description: "Supplying ships with necessary provisions and equipment while they are at port, including food, fuel, lubricants, spare parts, and other goods and services.",
    features: ["Ship provisioning", "Fuel and lubricants", "Port services"]
  }
];

export const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards of quality control throughout our supply chain.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving customers across 25+ countries with reliable international shipping.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Building long-term relationships through exceptional service and support.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering excellence in every aspect of our business operations.'
  }
];