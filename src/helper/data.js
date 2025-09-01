import { Award, Users, Globe, Truck, Shield, Target,Clock } from 'lucide-react';


export const products = [
    {
      id: 1,
      name: 'Premium Basmati Rice',
      category: 'Grains',
      description: 'Long-grain aromatic rice with exceptional quality and taste, perfect for international markets.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Grade A'
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      category: 'Spices',
      description: 'Pure, organic turmeric powder with high curcumin content, sourced from certified organic farms.',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Organic'
    },
    {
      id: 3,
      name: 'Red Kidney Beans',
      category: 'Pulses',
      description: 'High-quality red kidney beans, rich in protein and perfect for various culinary applications.',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Premium'
    },
    {
      id: 4,
      name: 'Black Pepper Whole',
      category: 'Spices',
      description: 'Premium quality whole black pepper with intense flavor and aroma, perfect for global spice markets.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Grade A'
    },
    {
      id: 5,
      name: 'Jasmine Rice',
      category: 'Grains',
      description: 'Fragrant jasmine rice with delicate texture and natural aroma, ideal for Asian cuisine markets.',
      image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'Thailand',
      quality: 'Premium'
    },
    {
      id: 6,
      name: 'Green Cardamom',
      category: 'Spices',
      description: 'Aromatic green cardamom pods with intense flavor, sourced from high-altitude plantations.',
      image: 'https://images.unsplash.com/photo-1599909533730-3ac8e2b9e9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      origin: 'India',
      quality: 'Grade A'
    }
  ];


export const services = [
    {
        icon: Globe,
        className: "w-12 h-12 text-green-600",
        title: "Global Export Solutions",
        description:
            "Comprehensive export services to over 50 countries worldwide with established trade networks and partnerships.",
        features: ["International shipping", "Customs clearance", "Documentation support"]
    },
    {
        icon: Shield,
        className: "w-12 h-12 text-green-600",
        title: "Quality Assurance",
        description:
            "Rigorous quality control processes ensuring all agricultural products meet international standards and certifications.",
        features: ["ISO certification", "Quality testing", "Compliance monitoring"]
    },
    {
        icon: Truck,
        className: "w-12 h-12 text-green-600",
        title: "Logistics Management",
        description:
            "End-to-end logistics solutions from farm to destination with real-time tracking and secure transportation.",
        features: ["Cold chain logistics", "Real-time tracking", "Secure packaging"]
    },
    {
        icon: Clock,
        className: "w-12 h-12 text-green-600",
        title: "Timely Delivery",
        description:
            "Committed to on-time delivery with efficient supply chain management and reliable shipping schedules.",
        features: ["Express shipping", "Scheduled deliveries", "Emergency logistics"]
    },
    {
        icon: Users,
        className: "w-12 h-12 text-green-600",
        title: "Customer Support",
        description:
            "Dedicated customer service team providing 24/7 support throughout the entire export process.",
        features: ["24/7 support", "Multi-language assistance", "Technical guidance"]
    },
    {
        icon: Award,
        className: "w-12 h-12 text-green-600",
        title: "Certification Services",
        description:
            "Complete certification assistance for organic, fair trade, and other international quality standards.",
        features: ["Organic certification", "Fair trade compliance", "Export licenses"]
    }
];

  export  const values = [
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