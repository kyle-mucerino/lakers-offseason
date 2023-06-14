import React from "react";

const Footer = () => {
  const footerStyle = {
    fontFamily: "Lakers Alt, sans-serif",
    color: "#552583"
  };

  return (
    <footer className="w-100 mt-auto bg-secondary p-4" style={footerStyle}>
      <div className="container">&copy;2023 by Kyle Mucerino</div>
    </footer>
  );
};

export default Footer;
