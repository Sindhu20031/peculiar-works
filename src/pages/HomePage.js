import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("https://your-backend-endpoint.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recipientEmail: "Peculiarworks10@gmail.com",
        }),
      });

      if (response.ok) {
        setStatusMessage("Your query has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatusMessage("Error: Unable to submit your query.");
      }
    } catch (error) {
      setStatusMessage("Error: Please try again later.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side: Text Content */}
          <div className="col-md-6 text-dark">
            <h1 style={styles.heading}>Welcome to Peculiar Works!</h1>
            <p style={styles.description}>
              At <span style={styles.highlight}>Peculiar Works</span>, we leverage our expertise in{" "}
              <span style={styles.highlight}>Digital Marketing</span>, <span style={styles.highlight}>SEO</span>,{" "}
              <span style={styles.highlight}>Website Design</span>, and <span style={styles.highlight}>Blogging</span>.
              We develop customized solutions that address the unique challenges of our clients.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-6">
            <div style={styles.formContainer}>
              <h2 style={styles.formHeading}>Submit Your Query</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                    style={styles.input}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                    style={styles.input}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                    style={styles.input}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                    style={styles.textarea}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100" style={styles.submitButton}>
                  Submit Query
                </button>
              </form>
              {statusMessage && <p style={styles.statusMessage}>{statusMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the page
const styles = {
  pageContainer: {
    backgroundColor: "#ffffff", // White background
    color: "black", // Black text color
    minHeight: "100vh",
    fontFamily: "'Montserrat', sans-serif", // Clean font for body
    marginTop: "80px", // Adjust to push content below navbar
  },
  heading: {
    fontSize: "3rem",
    fontFamily: "'Great Vibes', cursive", // Stylish cursive font for heading
    color: "black",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    fontFamily: "Garamond, serif", // Elegant serif font
    color: "black",
    lineHeight: "1.8",
  },
  highlight: {
    fontWeight: "bold",
    color: "black", // Highlight in bold and black color
  },

  formContainer: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    margin: "0 auto",
    
  },
  formHeading: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#013d79",
    fontSize: "1.5rem",
    fontFamily: "'Great Vibes', cursive",
  },
  input: {
    background: "#f9f9f9",
    border: "1px solid #ccc",
    color: "#333",
    padding: "0.8rem",
    borderRadius: "5px",
  },
  textarea: {
    background: "#f9f9f9",
    border: "1px solid #ccc",
    color: "#333",
    padding: "0.8rem",
    borderRadius: "5px",
    resize: "none",
  },
  submitButton: {
    padding: "0.4rem",
    backgroundColor: "#013d79",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
  statusMessage: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#013d79",
    textAlign: "center",
  },
  // Mobile View Adjustments
  "@media (max-width: 768px)": {
    formContainer: {
      marginTop: "60px", // Adjust form's position on smaller screens
      padding: "1rem", // Adjust padding for mobile
    },
    input: {
      padding: "0.6rem", // Adjust padding on inputs for mobile
    },
    textarea: {
      padding: "0.6rem", // Adjust padding on textarea for mobile
    },
    submitButton: {
      padding: "0.6rem", // Adjust padding for submit button
    },
  },
};


// Make sure the layout is responsive for mobile view
export default HomePage;
