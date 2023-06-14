import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    fontFamily: "Lakers Alt, sans-serif",
    color: "#552583",
    fontSize: "45px",
    marginBottom: "0px"
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to={`/`} style={{ fontWeight: 700 }}>
          <h1 style={headerStyle}>What should the Lakers do this offseason?</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
