import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2024 All Rights Reserved. peculiarworkes.in.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#f6efef",
    color: "black",
    textAlign: "center",
    padding: "1rem",
    fontSize: "1rem", // Default font size
  },
  text: {
    margin: 0,
  },
  '@media (max-width: 768px)': {
    footer: {
      padding: "0.5rem", // Reduced padding for mobile
      fontSize: "0.9rem", // Slightly smaller font size for mobile
    },
  },
};

export default Footer;
