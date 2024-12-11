import React, { useState, useEffect } from "react"; // Import useEffect
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DigitalMarketingPage.css";
import emailjs from "emailjs-com"; // Import EmailJS

const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });

    try {
      // Send email via EmailJS
      const emailData = {
        ...formData,
        source_page: "DigitalMarketingPage", // Pass the source page for reference
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_r8ofot9",    // Your EmailJS service ID
        "template_1ofgr1q",   // Your EmailJS template ID
        emailData,            // Pass form data including the source page
        "uCCVifAIEZ1hJFwCI"   // Your EmailJS user ID (Public Key)
      );

      if (response.status === 200) {
        setResponseMessage("Thank you!Your message has been sent successfully.");
      } else {
        setResponseMessage("Failed to send your message. Please try again.");
      }
      // WhatsApp message format
      const whatsappMessage = `*New Query*\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/7386467826?text=${encodeURIComponent(whatsappMessage)}`;

      // Open the WhatsApp link to send the message to the company's WhatsApp number
      window.open(whatsappUrl, "_blank");

    } catch (error) {
      setResponseMessage("Error: Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="digital-marketing-page">
      <div className="container">
        {/* Digital Marketing Introduction */}
        <h1 className="digital-marketing-heading text-center mb-4">Digital Marketing</h1>
        <p className="text-center mb-5">
          At Peculiar Works, we offer a comprehensive range of Digital Marketing services to help your
          business thrive in the online world. Our solutions are designed to increase visibility, drive
          traffic, and boost conversions. Our services include:
        </p>

        {/* SEO and Contact Form Section */}
        <div className="container mt-5">
          <div className="row align-items-stretch">
            {/* SEO Section */}
            <div className="col-md-6">
              <div className="info-box">
                <img
                  src="https://c1.wallpaperflare.com/preview/24/329/110/seo-optimization-search-engine-optimization-process.jpg"
                  alt="SEO"
                  className="info-image img-fluid mb-3"
                />
                <h3>SEO (Search Engine Optimization)</h3>
                <p>
                  Boost your website's organic rankings with our SEO strategies. We optimize your content,
                  improve site speed, and implement the latest SEO practices to ensure your website appears
                  at the top of search engine results.
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-md-6">
              <div className="contact-form">
                <h2>Your Note Here!</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Peculiar Works"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Peculiarworks10@gmail.com"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="73864 67826"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Note Here...."
                    rows="4"
                    required
                  ></textarea>
                  <button type="submit">Submit Note</button>
                  {responseMessage && <p className="mt-3 response-message">{responseMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Three Horizontal Boxes */}
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="info-box">
              <img
                src="https://media.licdn.com/dms/image/D5612AQGe-FpXMqm45Q/article-cover_image-shrink_720_1280/0/1695721295630?e=2147483647&v=beta&t=6ViDP1sO5_MnLKtcaK1Tw7rhoGQWTq65E7hswsQc08w"
                alt="PPC Marketing"
                className="info-image"
              />
              <h3>PPC Marketing</h3>
              <p>
                Get instant visibility and drive qualified leads to your website with our PPC campaigns. We create and manage targeted ads on platforms like Google Ads, ensuring you get the best return on your ad spend.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box">
              <img
                src="https://media.licdn.com/dms/image/D5612AQFOu8PMVPYXPg/article-cover_image-shrink_720_1280/0/1701228027616?e=2147483647&v=beta&t=j0F3f0k9UNUAx-mJqVF9n---gSvzKMAGq4tBtBjW8nw"
                alt="Social Media Marketing"
                className="info-image"
              />
              <h3>Social Media Marketing</h3>
              <p>
                Engage your audience and build a loyal following with our Social Media Marketing services. We create and manage content for platforms like Facebook, Instagram, LinkedIn, and Twitter, tailored to your brand's voice and objectives.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box">
              <img
                src="https://media.istockphoto.com/id/1201481347/vector/vlog-and-video-content-creation-for-social-networks-vector-illustration-of-lifestyle.jpg?s=612x612&w=0&k=20&c=UY1VD9kj6dAqdm1CUYvGbwNpdKnAvuv-Z09nL5ZnNAM="
                alt="Influencer Marketing"
                className="info-image"
              />
              <h3>Influencer Marketing</h3>
              <p>
                Leverage the power of influencers to reach your target audience. We connect your brand with the right influencers to amplify your message and create authentic content that resonates with potential customers.
              </p>
            </div>
          </div>
        </div>
        <div className="cutting-edge-container">
         {/* Background Video */}
  <video autoPlay muted loop className="cutting-edge-video-background">
    <source src="/images/131.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>


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
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
