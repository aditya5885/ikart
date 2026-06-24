import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import IndustriesPage from "./pages/Industries";
import WhatsAppFAB from "./components/WhatsAppFAB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppFAB />
    </Router>
  );
}

export default App;