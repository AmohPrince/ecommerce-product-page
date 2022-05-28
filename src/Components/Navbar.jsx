import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import ProfilePicture from "../images/image-avatar.png";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
      return e.target.classList.toggle("active");
    });
  });
  return (
    <div className="Nav__container">
      <nav className="flex__container">
        <img src={Logo} alt="Logo" />
        <ul className="nav-links flex__container">
          <li className="nav-link">Collections</li>
          <li className="nav-link">Men</li>
          <li className="nav-link active">Women</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
        </ul>
        <div className="flex__container">
          <img
            src={CartIcon}
            alt="Cart"
            onClick={() => {
              setShowCart((prevState) => !prevState);
            }}
          />
          <img src={ProfilePicture} alt="Profile picture" />
        </div>
      </nav>
      <div className="splitter" />
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

const Cart = () => {
  return (
    <div className="Cart__container">
      <div>
        <p>Cart</p>
      </div>
      <div className="splitter"></div>
      <div className="flex__container">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};
