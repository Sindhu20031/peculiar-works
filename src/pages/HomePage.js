import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import "../styles/HomePage.css";

const HomePage = () => {
  const handleContactUsClick = () => {
    window.location.href = "/contact"; // Redirect to Contact Us page
  };

  const handleServicesClick = () => {
    window.location.href = "/services"; // Redirect to Services page
  };

  return (
    <div className="homepage-container">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="background-video"
        preload="auto" 
        playsInline
      >
        <source src="/images/121.mp4" type="video/mp4" />
        <source src="/images/121.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="text-center content-overlay">
        <h1 className="homepage-heading">TRANSFORM YOUR BUSINESS</h1>
        <p className="homepage-description">
          At <span className="highlight">Peculiar Works</span>, we leverage our expertise in{" "}
          <span className="highlight">Digital Marketing</span>, <span className="highlight">SEO</span>,{" "}
          <span className="highlight">Website Design</span>, and <span className="highlight">Blogging</span>.
          We develop customized solutions that address the unique challenges of our clients.
        </p>
        <div className="homepage-buttons justify-content-center mt-4">
          <button className="btn btn-custom btn-custom-white mx-2" onClick={handleContactUsClick}>
            Get in Touch
          </button>
          <button className="btn btn-custom btn-custom-orange mx-2" onClick={handleServicesClick}>
            Our Services
          </button>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div
        className="whatsapp-icon"
        onClick={() => window.open("https://wa.me/917386467826", "_blank")}
      >
        <img src="/images/what.png" alt="WhatsApp" />
      </div>
    </div>
  );
};

export default HomePage;
