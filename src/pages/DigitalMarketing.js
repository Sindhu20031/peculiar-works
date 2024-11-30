import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/DigitalMarketingPage.css'; // Ensure this file path is correct.

const DigitalMarketingPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Reset form fields immediately after submit, regardless of success or error
      setFormData({ name: '', email: '', phone: '', message: '' });
  
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/submit-query';
        await axios.post(apiUrl, formData);
        setResponseMessage('Thank you! Your message has been sent successfully.');
      } catch (error) {
        setResponseMessage('Failed to send your message. Please try again.');
        console.error('Error:', error);
      }
    };
  
  return (
    <div className="digital-marketing-page">
      <div className="container">
        {/* Digital Marketing Heading */}
        <h1 className="digital-marketing-heading text-center mb-5">Digital Marketing</h1>
        <p className="intro-text text-center mb-5">
          At Peculiar Works, we offer a comprehensive range of Digital Marketing services to help
          your business thrive in the online world. Our solutions are designed to increase visibility,
          drive traffic, and boost conversions.
        </p>

        {/* SEO and PPC Marketing */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="info-box">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQEHKEsZrCLCXQ/article-cover_image-shrink_600_2000/0/1665588908377?e=2147483647&v=beta&t=aR3kFpd7DzphVUpupa4cYBzbT7Kps99UJlbRznDHOno"
                alt="SEO"
                className="info-image"
              />
              <h3>SEO (Search Engine Optimization)</h3>
              <p>
                Boost your website's organic rankings with our SEO strategies. We optimize
                your content, improve site speed, and implement the latest SEO practices.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box">
              <img
                src="https://media.licdn.com/dms/image/D5612AQGe-FpXMqm45Q/article-cover_image-shrink_720_1280/0/1695721295630?e=2147483647&v=beta&t=6ViDP1sO5_MnLKtcaK1Tw7rhoGQWTq65E7hswsQc08w"
                alt="PPC Marketing"
                className="info-image"
              />
              <h3>PPC Marketing (Pay-Per-Click)</h3>
              <p>
                Get instant visibility and drive qualified leads to your website with
                our PPC campaigns. We create and manage targeted ads for the best ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Marketing and Influencer Marketing */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="info-box">
              <img
                src="https://media.licdn.com/dms/image/D5612AQFOu8PMVPYXPg/article-cover_image-shrink_720_1280/0/1701228027616?e=2147483647&v=beta&t=j0F3f0k9UNUAx-mJqVF9n---gSvzKMAGq4tBtBjW8nw"
                alt="Social Media Marketing"
                className="info-image"
              />
              <h3>Social Media Marketing</h3>
              <p>
                Engage your audience and build a loyal following. We create and
                manage content tailored to your brand's voice and objectives.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box">
              <img
                src="https://media.istockphoto.com/id/1201481347/vector/vlog-and-video-content-creation-for-social-networks-vector-illustration-of-lifestyle.jpg?s=612x612&w=0&k=20&c=UY1VD9kj6dAqdm1CUYvGbwNpdKnAvuv-Z09nL5ZnNAM="
                alt="Influencer Marketing"
                className="info-image"
              />
              <h3>Influencer Marketing</h3>
              <p>
                Leverage the power of influencers to connect with your audience.
                We help you create authentic content that resonates with customers.
              </p>
            </div>
          </div>
        </div>

        <div className="cutting-edge-container">
  <h2 className="cutting-edge-title">Cutting-Edge Website Creation Technology</h2>
  <p className="cutting-edge-description">
    Our website development services use the latest technologies and best practices to build
    high-performing, user-friendly, and visually appealing websites. We specialize in:
  </p>
  <ul className="cutting-edge-list">
    <li>
      🌐 <strong>Responsive Web Design</strong>
      <p>Ensuring your website looks great on all devices.</p>
    </li>
    <li>
      ⚡ <strong>Fast Loading Speed</strong>
      <p>Optimizing website performance for a better experience.</p>
    </li>
    <li>
      🔍 <strong>SEO-Friendly Structure</strong>
      <p>Building clean, search-optimized websites.</p>
    </li>
    <li>
      🔒 <strong>Secure and Scalable Solutions</strong>
      <p>Leveraging the latest security protocols for growth.</p>
    </li>
  </ul>
</div>




<div className="contact-form-container">
          <h2><strong>GRAB US HERE!</strong></h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-submit">
              Submit
            </button>
          </form>

          {/* Show Response Message */}
          {responseMessage && <p className="mt-3 response-message">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;