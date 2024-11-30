import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WebDevelopmentPage.css"; // Make sure this CSS file exists

const WebDevelopment = () => {
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
            <h4>Grab Us!</h4>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Peculiar Works"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Peculiarworks10@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control message-box"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning submit-btn">
                Submit Query
              </button>
            </form>
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
