import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/ContactUs.css";
import { Link } from "react-scroll";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send email using EmailJS with the updated Template ID
      const response = await emailjs.send(
        "service_r8ofot9", // Service ID (same as homepage)
        "template_130uf7g", // Updated Template ID (as per your new template)
        formData,
        "uCCVifAIEZ1hJFwCI" // User ID (same as homepage)
      );

      if (response.status === 200) {
        setStatusMessage("Your message has been sent successfully!");
      } else {
        setStatusMessage("Error: Unable to send your message.");
      }

      // Reset the form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Clear the status message after 5 seconds
      setTimeout(() => setStatusMessage(""), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Error: Please try again later.");
    }
  };

  return (
    <div className="contact-us-container container py-5">
      <div className="row align-items-center">
        {/* Left Side: Contact Form */}
        <div className="col-md-6">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">Fill The Form Below</p>
          <form onSubmit={handleSubmit}>
          {/* Row 1: First Name & Last Name */}
<div className="row">
  <div className="col-md-6 col-12 mb-3"> {/* col-md-6 for desktop and col-12 for mobile */}
    <label htmlFor="firstName" className="form-label">
      First Name
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      className="form-control"
      placeholder="Enter your first name"
      required
    />
  </div>
  <div className="col-md-6 col-12 mb-3"> {/* col-md-6 for desktop and col-12 for mobile */}
    <label htmlFor="lastName" className="form-label">
      Last Name
    </label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="form-control"
      placeholder="Enter your last name"
      required
    />
  </div>
</div>

{/* Row 2: Email & Phone */}
<div className="row">
  <div className="col-md-6 col-12 mb-3"> {/* col-md-6 for desktop and col-12 for mobile */}
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-control"
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="col-md-6 col-12 mb-3"> {/* col-md-6 for desktop and col-12 for mobile */}
    <label htmlFor="phone" className="form-label">
      Phone Number
    </label>
    <input
      type="text"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="form-control"
      placeholder="Enter your phone number"
      required
    />
  </div>
</div>

{/* Row 3: Message */}
<div className="mb-3">
  <label htmlFor="message" className="form-label">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="form-control"
    placeholder="Write your message here"
    rows="4"
    required
  ></textarea>
</div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/pexe.jpg"
            alt="Customer Support"
            className="img-fluid contact-image"
          />
        </div>
      </div>

      {/* Below Form and Image: Social Media and Address */}
      <div className="row mt-5">
        {/* Social Links */}
        <div className="col-md-6">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/peculiar-works-pvt-ltd/"
              className="d-block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin me-2"></i> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/peculiar.works"
              className="d-block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram me-2"></i> Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089590622984"
              className="d-block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook me-2"></i> Facebook
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-md-6">
          <h3>Contact Us</h3>
          <p>
            <i className="bi bi-envelope me-2"></i>
            Peculiarworks10@gmail.com
          </p>
          <p>
            <i className="bi bi-telephone me-2"></i>
            +91 73864 67826
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

