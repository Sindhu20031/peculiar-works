import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/BrandingSolutions.css"; // Ensure this CSS file exists
import emailjs from "emailjs-com"; // Import EmailJS

const BrandingSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      source_page: "BrandingSolutionsPage", // Specify the source page
    };

    try {
      // Send email to Peculiarworks10@gmail.com using EmailJS
      const response = await emailjs.send(
        "service_r8ofot9",    // Your EmailJS service ID
        "template_1ofgr1q",   // Your EmailJS template ID
        emailData,            // Form data (user's name, email, phone, query)
        "uCCVifAIEZ1hJFwCI"   // Your EmailJS user ID (Public Key)
      );

      if (response.status === 200) {
        setStatusMessage("Your query has been submitted successfully!");
      } else {
        setStatusMessage("Error: Unable to submit your query.");
      }

      // Reset the form fields after submitting
      setFormData({
        name: "",
        email: "",
        phone: "",
        query: "",
      });

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");  // Clear status message
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Error: Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      {/* Branding Solutions Intro Section */}
      <div className="branding-intro text-center">
        <h1 className="brand-heading">Branding Solutions</h1>
        <p className="brand-description">
          At Peculiar Works, we help businesses create strong, memorable brands that resonate with their target audience.
          Our Branding services cover everything you need to establish and maintain a unique brand identity that stands out in the market. Our key offerings include:
        </p>
      </div>

      <div className="row">
        {/* Left Side: Logo Designing */}
        <div className="col-md-6">
          <div className="logo-box">
            <h3>Logo Designing</h3>
            <img
              src="https://img.freepik.com/premium-photo/circle-colorful-smoke-is-black-background_605423-152580.jpg?semt=ais_hybrid"
              alt="Logo Designing"
              className="service-img"
            />
            <p>
              Create a unique and eye-catching logo that represents your brand’s identity. Our expert designers craft logos that not only look great but also embody the essence of your brand, ensuring it leaves a lasting impression.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form (Without Box) */}
        <div className="col-md-6">
          <div className="contact-form">
            <h4>Your Note Here!</h4>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Peculiar Works"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Peculiarworks10@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="73864 67826"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  name="query"
                  placeholder="Your Note Here...."
                  value={formData.query}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning submit-btn">
                Submit Note
              </button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </div>
        </div>
      </div>

      {/* Brand Management Section in Horizontal Oval Box */}
      <div className="brand-management text-center">
        <div className="brand-box">
          <h3>Brand Management</h3>
          <img
            src="https://w7.pngwing.com/pngs/96/85/png-transparent-target-audience-business-target-market-marketing-shooting-target-business-search-engine-optimization-service-people-thumbnail.png"
            alt="Brand Management"
            className="brand-img"
          />
          <p>
            Maintain a consistent brand image across all channels with our comprehensive Brand Management services. We help you build a strong brand strategy, oversee brand messaging, and ensure a cohesive brand experience for your audience.
          </p>
        </div>
      </div>

      {/* Branding Techniques Section with Circles */}
      <div className="branding-techniques text-center">
        <h3 className="heading">Utilizing Modern Techniques and Strategies for Branding</h3>
        <p className="subheading">
          We combine creativity and strategy to deliver high-quality branding solutions that elevate your business. Our approach includes:
        </p>
        <div className="circle-boxes">
          <div className="circle">
            <h5>Strategic Brand Development</h5>
            <p>Crafting a clear brand message that resonates with your target market.</p>
          </div>
          <div className="circle">
            <h5>Consistent Brand Voice</h5>
            <p>Ensuring consistent communication across all platforms.</p>
          </div>
          <div className="circle">
            <h5>Visual Identity Creation</h5>
            <p>Developing a complete visual identity system for your brand.</p>
          </div>
          <div className="circle">
            <h5>Rebranding Solutions</h5>
            <p>Strategic updates to keep your brand relevant in the market.</p>
          </div>
          <div className="circle">
            <h5>Brand Monitoring</h5>
            <p>Tracking brand performance and making data-driven adjustments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSolutions;
