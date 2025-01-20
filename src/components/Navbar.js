import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Use useLocation for detecting route changes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation(); // useLocation hook to track route changes

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page whenever the route changes
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/z3.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span
            style={{
              fontFamily: '"Lucida Handwriting", cursive',
              fontSize: "21px",
              color: "black",
              whiteSpace: "nowrap",
            }}
          >
            Peculiar Works
          </span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li
              className={`nav-item dropdown ${activeDropdown === "services" ? "show" : ""}`}
              onClick={() => toggleDropdown("services")}
            >
              <NavLink
                className={`nav-link dropdown-toggle ${activeDropdown === "services" ? "active" : ""}`}
                to="/services"
                role="button"
                aria-expanded={activeDropdown === "services"}
              >
                Services
              </NavLink>
              <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/digital-marketing"
                    activeClassName="active"
                  >
                    Digital Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/web-development"
                    activeClassName="active"
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/branding-solutions"
                    activeClassName="active"
                  >
                    Branding Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/hr-recruitment"
                    activeClassName="active"
                  >
                    HR Recruitment Solutions
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* About Us Link */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about-us"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>

            {/* Contact Us Link */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
