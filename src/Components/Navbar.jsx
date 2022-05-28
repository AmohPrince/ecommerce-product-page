import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import ProfilePicture from "../images/image-avatar.png";
import Shoe1 from "../images/image-product-1.jpg";
import Delete from "../images/icon-delete.svg";

const Navbar = ({ numberOfProducts }) => {
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
          <p className="badge">{numberOfProducts}</p>
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
      {showCart && <Cart numberOfProducts={numberOfProducts} />}
    </div>
  );
};

export default Navbar;

const Cart = ({ numberOfProducts }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(numberOfProducts * 125);
  }, [numberOfProducts]);
  return (
    <div className="Cart__container">
      <div>
        <p>Cart</p>
      </div>
      <div className="splitter"></div>
      <div className="flex__container">
        {numberOfProducts != 0 ? (
          <div className="cart__product">
            <div className="flex__container">
              <img src={Shoe1} alt="shoe" />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 * {numberOfProducts} <span>${total}.00</span>
                </p>
              </div>
              <img src={Delete} alt="Delete" />
            </div>
            <div className="checkout">
              <p>Checkout</p>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};
