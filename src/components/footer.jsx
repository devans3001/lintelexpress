import { Mail, Phone, MapPin, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../helper/helper";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    // { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const products = [
    "Rice & Grains",
    "Spices & Herbs",
    "Pulses & Legumes",
    "Fresh Produce",
    "Processed Foods",
  ];

  const contactItems = [
    {
      icon: Phone,
      text: (
        <>
          <span>+234 806 588 8050</span>
          <br />
          <span>+234 810 344 6899</span>
        </>
      ),
    },
    { icon: Mail, text: "contact@lintelexpress.com" },
    { icon: MapPin, text: "NO 1B UWAOMA CLOSE, OYIGBO, RIVERS STATE, NIGERIA" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">LintelExpress</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading agricultural export company specializing in high-quality
              agro-based goods. Connecting farmers to global markets with
              reliable and efficient export services.
            </p>
            <div className="space-y-2">
              {contactItems.map(({ icon: Icon, text }, idx) => (
                <div className="flex items-center space-x-2" key={idx}>
                  <Icon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={handleScrollTop}
                    className="text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-300">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} LintelExpress. All rights reserved. |
            Exporting Quality Agricultural Products Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
