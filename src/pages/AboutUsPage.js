import React, { useEffect } from "react";
import "../styles/AboutUsPage.css"; // External CSS for styling
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

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
    <div className="aboutUsPage container">
      <h1 className="aboutUsHeading text-center mb-5">About Us</h1>
      <div className="row align-items-center aboutUsContainer">
        {/* Video Section */}
        <div className="col-md-6 videoContainer">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="aboutUsVideo"
            preload="auto" // Preload the video for smoother playback
          >
            <source src="/images/Ab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="col-md-6 aboutUsText">
          <p>
            We <strong>Peculiar Works</strong> is a leading digital marketing company with a strong
            focus on excellence and driving positive change. We strive to empower businesses
            and individuals through cutting-edge technology solutions. Our commitment to work
            and customer satisfaction has established us as a trusted partner in the agency.
          </p>
        </div>
      </div>

      {/* Our Clients Section */}
      <div id="ourClients" className="clientsSection mt-5">
        <h2 className="clientsHeading text-center">Our Clients</h2>
        <div className="logoContainer d-flex justify-content-center">
          <img
            src="/images/jslogo.png"
            alt="Client Logo"
            className="clientLogo"
          />
        </div>
      </div>

      {/* Our Influencers Section */}
      <div id="ourInfluencers" className="influencersSection mt-5">
        <h2 className="influencersHeading text-center mb-4">OUR INFLUENCERS</h2>
        <div className="d-flex justify-content-center">
          <div className="influencerCard text-center">
            <img
              src="/images/singh.jpg" // Add the path to Deepika Singh's image
              alt="Deepika Singh"
              className="influencerImage"
            />
            <h5 className="mt-3">Deepika Singh</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
