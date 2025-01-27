import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router v6
import Navbar from "./components/Navbar"; // Navbar Component
import Footer from "./components/Footer"; // Footer Component
import HomePage from "./pages/HomePage"; // HomePage Component
import ServicesPage from "./pages/ServicesPage"; // ServicesPage Component
import AboutUsPage from "./pages/AboutUsPage"; // AboutUs Page
import DigitalMarketing from "./pages/DigitalMarketing"; // DigitalMarketing Page
import WebDevelopmentPage from "./pages/WebDevelopment"; // WebDevelopment Page
import BrandingSolutions from "./pages/BrandingSolutions"; // BrandingSolutions Page
import HRRecruitment from "./pages/HrRecruitment"; // HRRecruitment Page
import ContactPage from "./pages/ContactPage"; // Contact Us Page
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ overflowY: "auto" }}>
        {/* WhatsApp Icon */}
        <div
          className="whatsapp-icon"
          onClick={() => window.open("https://wa.me/917386467826", "_blank")}
        >
          <img src="/images/what.png" alt="WhatsApp" />
        </div>

        <Routes>
          {/* HomePage route */}
          <Route
            path="/"
            element={
              <>
                {/* Render the homepage */}
                <HomePage />

                {/* ServicesPage rendered as a scrollable section below the homepage */}
                <section id="services" className="servicesSection">
                  <ServicesPage />
                </section>

                {/* AboutUsPage rendered below the ServicesPage */}
                <section id="about-us" className="aboutUsSection">
                  <AboutUsPage />
                </section>

                {/* ContactPage rendered below AboutUsPage */}
                <section id="contact-us" className="contactUsSection">
                  <ContactPage />
                </section>
              </>
            }
          />

          {/* Services route (for standalone view) */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Digital Marketing service route */}
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

          {/* Web Development service route */}
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />

          {/* Branding Solutions service route */}
          <Route path="/services/branding-solutions" element={<BrandingSolutions />} />

          {/* HR Recruitment service route */}
          <Route path="/services/hr-recruitment" element={<HRRecruitment />} />

          {/* Contact Us standalone route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* About Us standalone route */}
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
