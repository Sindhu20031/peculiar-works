import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HRRecruitment.css"; // Ensure this is a separate CSS file for HR Recruitment
import emailjs from "emailjs-com"; // Import EmailJS

const HRRecruitment = () => {
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
      source_page: "HRRecruitmentPage", // Specify the source page
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
      {/* HR Recruitment Intro Section */}
      <div className="hr-recruitment-intro">
        <h1 className="text-center">HR Recruitment Solutions</h1>
        <p className="text-center">
          At Peculiar Works, we provide full-cycle HR Recruitment services to help businesses find, manage, and retain top talent. Our solutions are designed to streamline the recruitment process and ensure that your workforce aligns with your business goals. Our key services include:
        </p>
      </div>

      <div className="contact-image-form-box d-flex justify-content-center align-items-start">
        <div className="contact-image mb-3 d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1582195753/1582195751.jpg"
            alt="HR Image"
            className="img-fluid"
          />
        </div>
        <div className="contact-form">
          <h4>Contact Us Now!</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mb-3 contact-input"
              placeholder="Peculiar Works"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3 contact-input"
              placeholder="Peculiarworks10@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              className="form-control mb-3 contact-input"
              placeholder="+91 73864 67826"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="query"
              className="form-control mb-3 message-box contact-input"
              placeholder="Your Message Here...."
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-50">Submit</button>
          </form>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>

      {/* HR Services (Hiring, Management, Administration) */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="service-box">
            <h3>Hiring</h3>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220601/pngtree-orange-panel-advertise-advertising-graph-photo-image_8342144.jpg"
              alt="Hiring"
              className="service-img"
            />
            <p>
              Attract and recruit the right talent with our strategic hiring services. We handle the entire recruitment process, from job posting and candidate sourcing to interviews and onboarding, ensuring you get the best fit for your organization.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <h3>Management</h3>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230913/pngtree-business-meeting-between-one-small-figure-of-men-and-another-small-image_13262287.jpg"
              alt="Management"
              className="service-img"
            />
            <p>
              Optimize your workforce with our HR Management services. We assist in employee performance tracking, training, and development programs, as well as setting up HR policies that foster a productive and positive work environment.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <h3>Administration</h3>
            <img
              src="https://cdn.pixabay.com/photo/2018/10/12/12/32/security-3742114_640.jpg"
              alt="Administration"
              className="service-img"
            />
            <p>
              Simplify your HR operations with our comprehensive Administration services. We take care of the day-to-day HR tasks, including payroll processing, employee records management, compliance with labor laws, and handling employee benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Tools and Techniques for HR Recruitment */}
      <div className="cutting-edge mt-5">
        <h3 className="text-center">Utilizing Advanced Tools and Techniques for HR Recruitment</h3>
        <p className="text-center">
          We use the latest tools and best practices to ensure your HR processes are efficient and effective. Our approach includes:
        </p>

        {/* Advanced HR Tools (Rectangle Boxes) */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div
              className="advanced-tool-box"
              style={{
                backgroundImage:
                  "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L2dyYWRpYW50LWV5LTAwNjQuanBn.jpg')",
              }}
            >
              <h5>Talent Acquisition Strategies</h5>
              <p>Implementing tailored strategies to source, screen, and hire top candidates quickly.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="advanced-tool-box"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/01/65/57/99/360_F_165579913_iKCclaAFxRoSrKZIRg08dWCE2iNZGk8o.jpg')",
              }}
            >
              <h5>Employee Development Programs</h5>
              <p>Providing training and development plans that improve employee skills and satisfaction.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="advanced-tool-box"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/04/89/74/49/360_F_489744918_5rICFzG8fvHdLebXYw9JfsKxW28iU3EN.jpg')",
              }}
            >
              <h5>Compliance and Legal Assistance</h5>
              <p>Ensuring all HR processes meet legal standards and industry regulations.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="advanced-tool-box"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/previews/002/393/823/non_2x/gradient-blue-background-free-vector.jpg')",
              }}
            >
              <h5>Performance Management</h5>
              <p>Tracking employee performance to identify growth opportunities and areas for improvement.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="advanced-tool-box"
              style={{
                backgroundImage:
                  "url('https://t3.ftcdn.net/jpg/03/02/04/06/360_F_302040655_IEH9RyDlu7LL8YCLjgL1IskhrpOlmlSv.jpg')",
              }}
            >
              <h5>HR Analytics</h5>
              <p>Leveraging data to make informed decisions about hiring, employee retention, and workforce planning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRRecruitment;