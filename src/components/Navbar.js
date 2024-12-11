import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import "../styles/Navbar.css"; // Import custom CSS for navbar styling (if needed)

const Navbar = () => {
  // State to manage dropdown open/close for Services and About Us
  const [activeDropdown, setActiveDropdown] = useState(null); // null, 'services', or 'about'

  // Function to toggle the dropdown
  const toggleDropdown = (dropdown) => {
    // If the clicked dropdown is already active, set it to null (close it)
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      // If the clicked dropdown is not active, open it by setting the state
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
         {/* Logo and Brand */}
         
{/* Logo and Brand */}
<a className="navbar-brand d-flex align-items-center" href="/">
  <img
    src="/images/z3.png"
    alt="Logo"
    style={{ height: "40px", marginRight: "10px" }}
  />
  <span
    style={{
      fontFamily: '"Lucida Handwriting", cursive',
      fontSize: '21px',
      color: 'black', // Adjust the color to match your design
      whiteSpace: 'nowrap' // Prevent wrapping
    }}
  >
    Peculiar Works
  </span>
</a>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="homepage-container"
                smooth={true}
                duration={500}
                offset={-70} // Offset for fixed navbar
              >
                Home
              </Link>
            </li>

            {/* Services Navbar Link */}
            <li
              className={`nav-item dropdown ${activeDropdown === "services" ? "show" : ""}`}
              onClick={() => toggleDropdown("services")} // Toggle for Services
            >
              <Link
                className={`nav-link dropdown-toggle ${activeDropdown === "services" ? "active" : ""}`}
                to="pageContainer" // Scroll to the Services section
                smooth={true}
                duration={500}
                offset={-70}
                role="button"
                aria-expanded={activeDropdown === "services" ? "true" : "false"}
              >
                Services
              </Link>
              <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="servicesGrid"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="servicesGrid"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="servicesGrid"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Branding Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="servicesGrid"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    HR Recruitment Solutions
                  </Link>
                </li>
              </ul>
            </li>

            {/* About Us Navbar Link */}
            <li
              className={`nav-item dropdown ${activeDropdown === "about" ? "show" : ""}`}
              onClick={() => toggleDropdown("about")} // Toggle for About Us
            >
              <Link
                className={`nav-link dropdown-toggle ${activeDropdown === "about" ? "active" : ""}`}
                to="aboutUsPage" // Scroll to the About Us section
                smooth={true}
                duration={500}
                offset={-70}
                role="button"
                aria-expanded={activeDropdown === "about" ? "true" : "false"}
              >
                About Us
              </Link>
              <ul className={`dropdown-menu ${activeDropdown === "about" ? "show" : ""}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="ourClients"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Our Clients
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact Us Link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-us-container"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
