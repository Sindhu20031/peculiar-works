import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WebDevelopmentPage.css"; // Make sure this CSS file exists
import emailjs from "emailjs-com"; // Import EmailJS

const WebDevelopment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const currentScrollPos = window.scrollY; // Save the current scroll position

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      source_page: "WebDevelopmentPage", // Specify the source page
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

      // WhatsApp message format
      const whatsappMessage = `*New Query*\nName: ${formData.name}\nPhone: ${formData.phone}\nQuery: ${formData.query}`;
      const whatsappUrl = `https://wa.me/7386467826?text=${encodeURIComponent(whatsappMessage)}`;

      // Open the WhatsApp link to send the message to the company's WhatsApp number
      window.open(whatsappUrl, "_blank");
      window.scrollTo(0, currentScrollPos); // Restore scroll position after submission

      // Clear the status message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");  // Clear status message
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Error: Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      {/* Web Development Heading and Description */}
      <div className="web-dev-intro">
        <h1 className="text-center">Web Development</h1>
        <p className="text-center">
          At Peculiar Works, we provide end-to-end Web Development solutions to help your business establish a strong online presence. Our services ensure that your website not only looks stunning but also performs flawlessly. Our offerings include:
        </p>
      </div>

      <div className="row">
        {/* Left Side Content with Web Designing */}
        <div className="col-md-7">
          <div className="box">
            <h3>Web Designing</h3>
            <img
              src="https://wallpapers.com/blog/wp-content/uploads/2024/03/High-Quality-Images-for-SEO-in-Web-Design.jpg"
              alt="Web Designing"
              className="service-img"
            />
            <p>
              Create a visually appealing and user-friendly website that reflects your brand's identity. Our web designers craft responsive, modern, and intuitive designs that enhance user experience and engage visitors effectively.
            </p>
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div className="col-md-5">
          <div className="contact-form">
            <h4>Your Note Here!</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="7386467826"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="query"
                  placeholder="Your Note Here...."
                  value={formData.query}
                  onChange={handleChange}
                  className="form-control message-box"
                  rows="4"
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

      {/* Second Row with Web Hosting and Web Management */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="box">
            <h3>Web Hosting</h3>
            <img
              src="https://www.rackh.com/wp-content/uploads/2024/03/3-Perbedaan-Web-Server-dan-Web-Hosting-Wajib-Tahu-800x400.jpg"
              alt="Web Hosting"
              className="service-img"
            />
            <p>
              Enjoy reliable and secure web hosting services with minimal downtime. We provide fast and scalable hosting solutions that ensure your website remains accessible at all times, even during high-traffic periods.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="box">
            <h3>Web Management</h3>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220703/pngtree-businessmans-work-meets-modern-technology-in-double-exposure-image-photo-image_32304022.jpg"
              alt="Web Management"
              className="service-img"
            />
            <p>
              Keep your website up-to-date and running smoothly with our comprehensive web management services. We handle everything from content updates and performance monitoring to security enhancements and software maintenance.
            </p>
          </div>
        </div>
      </div>

      {/* Cutting-Edge Technology Section */}
      <div className="cutting-edge mt-5">
        <h3>Utilizing Cutting-Edge Technology for Web Development</h3>
        <p>
          We leverage the latest tools and technologies to deliver high-quality web solutions that meet your business goals. Our approach includes:
        </p>

        <div className="curve-boxes">
          <div className="curve">
            <h5>Responsive Design</h5>
            <p>Ensuring seamless functionality across all devices.</p>
          </div>
          <div className="curve">
            <h5>Fast Loading Speeds</h5>
            <p>Optimizing site performance for better user experience and search engine ranking.</p>
          </div>
          <div className="curve">
            <h5>SEO Optimization</h5>
            <p>Structuring websites with best SEO practices for better visibility.</p>
          </div>
          <div className="curve">
            <h5>Advanced Security</h5>
            <p>Implementing robust security measures to protect your website from threats.</p>
          </div>
          <div className="curve">
            <h5>Content Management Systems (CMS)</h5>
            <p>Empowering you to easily manage your website content with popular CMS platforms like WordPress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
