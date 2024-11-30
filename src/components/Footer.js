import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Peculiar Works</p>
      <div style={styles.links}>
        <a href="https://www.instagram.com/peculiar.works" style={styles.link}>
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/peculiar-works-pvt-ltd/" style={styles.link}>
          LinkedIn
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089590622984" style={styles.link}>
          Facebook
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Footer;
