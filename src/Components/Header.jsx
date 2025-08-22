import React from "react";
import { FaShoppingCart } from "react-icons/fa";// Sample icon

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Art Studio</div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About me</li>
          <li>Offer</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
       <FaShoppingCart className="menu-icon"/>
      </nav>
    </header>
  );
};

export default Header;
