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
      <video autoPlay muted loop className="background-video">
        <source src="/images/121.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-center">
        <h1 className="homepage-heading">TRANSFORM YOUR BUSINESS</h1>
        <p className="homepage-description">
          At <span className="highlight">Peculiar Works</span>, we leverage our expertise in{" "}
          <span className="highlight">Digital Marketing</span>, <span className="highlight">SEO</span>,{" "}
          <span className="highlight">Website Design</span>, and <span className="highlight">Blogging</span>.
          We develop customized solutions that address the unique challenges of our clients.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-custom btn-custom-white mx-2" onClick={handleContactUsClick}>
            Get in Touch
          </button>
          <button className="btn btn-custom btn-custom-orange mx-2" onClick={handleServicesClick}>
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
