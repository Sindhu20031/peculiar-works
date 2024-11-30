import React, { useEffect } from "react";
import "../styles/AboutUsPage.css"; // External CSS for styling

const AboutUsPage = () => {
  useEffect(() => {
    const aboutUsSection = document.querySelector(".aboutUsContainer");

    // Set up IntersectionObserver to trigger animation when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutUsSection.style.animation = "slideInZoom 1.5s ease-out forwards"; // Trigger the animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    observer.observe(aboutUsSection); // Observe the section for visibility
  }, []);

  return (
    <div className="aboutUsPage">
      <h1 className="aboutUsHeading">About Us</h1>
      <div className="aboutUsContainer">
        <div className="aboutUsText">
          <p>
            We <strong>Peculiar Works</strong> is a leading digital marketing company with a strong
            focus on excellence and driving positive change. We strive to empower businesses
            and individuals through cutting-edge technology solutions. Our commitment to work
            and customer satisfaction has established us as a trusted partner in the agency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
