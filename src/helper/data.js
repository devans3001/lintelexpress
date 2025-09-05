import { Award, Users, Globe, Truck, Shield, Package, Ship, FileText, Anchor, MapPin, BarChart3 } from 'lucide-react';


export const products = [
  {
    id: 1,
    name: 'Premium Soya Beans',
    category: 'Oilseeds',
    description: 'High-protein soya beans with excellent oil content, perfect for processing and international trade markets.',
    image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlbWl1bSUyMFNveWElMjBCZWFuc3xlbnwwfHwwfHx8MA%3D%3D',
    origin: 'Brazil',
    quality: 'Grade A'
  },
  {
    id: 2,
    name: 'Organic Sesame Seeds',
    category: 'Oilseeds',
    description: 'Premium quality organic sesame seeds with high oil content and natural flavor, certified for international markets.',
    image: 'https://plus.unsplash.com/premium_photo-1674654419483-e9b8c9d2f3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE9yZ2FuaWMlMjBTZXNhbWUlMjBTZWVkc3xlbnwwfHwwfHx8MA%3D%3D',
    origin: 'Sudan',
    quality: 'Organic'
  },
  {
    id: 3,
    name: 'Refined Palm Oil',
    category: 'Oils',
    description: 'High-quality refined palm oil with excellent stability and neutral taste, ideal for food processing industries.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'Malaysia',
    quality: 'Premium'
  },
  {
    id: 4,
    name: 'Premium Cocoa Beans',
    category: 'Commodities',
    description: 'Fine flavor cocoa beans with rich aroma and superior quality, sourced from sustainable farming practices.',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'Ghana',
    quality: 'Fine Grade'
  },
  {
    id: 5,
    name: 'Fresh Ginger Root',
    category: 'Spices',
    description: 'Premium fresh ginger with high pungency and essential oil content, carefully harvested and processed.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'Nigeria',
    quality: 'Grade A'
  },
  {
    id: 6,
    name: 'Dried Hibiscus Flowers',
    category: 'Herbs',
    description: 'Premium quality dried hibiscus flowers with vibrant color and rich flavor, perfect for beverage industry.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'Egypt',
    quality: 'Premium'
  },
  {
    id: 7,
    name: 'Premium Basmati Rice',
    category: 'Grains',
    description: 'Long-grain aromatic rice with exceptional quality and taste, perfect for international markets.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'India',
    quality: 'Grade A'
  },
  {
    id: 8,
    name: 'Organic Turmeric Powder',
    category: 'Spices',
    description: 'Pure, organic turmeric powder with high curcumin content, sourced from certified organic farms.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'India',
    quality: 'Organic'
  },
  {
    id: 9,
    name: 'Red Kidney Beans',
    category: 'Pulses',
    description: 'High-quality red kidney beans, rich in protein and perfect for various culinary applications.',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    origin: 'India',
    quality: 'Premium'
  }
];

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