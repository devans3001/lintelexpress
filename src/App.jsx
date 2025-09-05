import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import About from './pages/About';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import ImportExport from './pages/services/ImportExport';
import Chandling from './pages/services/Chandling';
import FreightService from './pages/services/FreightService';
import CustomBrokerage from './pages/services/CustomBrokerage';
import Distribution from './pages/services/Distribution';
import LogisticsSolutions from './pages/services/LogisticsSolutions';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
             <Route path="/services/import-export" element={<ImportExport />} />
            <Route path="/services/chandling" element={<Chandling />} />
            <Route path="/services/freight-forwarding" element={<FreightService />} />
            <Route path="/services/custom-brokerage" element={<CustomBrokerage />} />
            <Route path="/services/distribution" element={<Distribution />} />
            <Route path="/services/logistics-solutions" element={<LogisticsSolutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;