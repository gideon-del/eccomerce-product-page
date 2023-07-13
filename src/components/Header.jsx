import React from "react";
import logo from "../assets/logo.svg";
import bar from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avater from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import { useCallback } from "react";
import product from "../assets/cart-product.png";
import del from "../assets/icon-delete.svg";
const navText = ["Collections", "Men", "Women", "About", "Contact"];
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = useCallback(() => {
    setShowNav((prev) => !prev);
  }, []);
  return (
    <header className="header">
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <img
            src={bar}
            alt="open navbar"
            className="md:hidden"
            onClick={toggleNav}
          />
          <img src={logo} alt="sneakers logo" />
        </div>
        <div
          className={`backdrop ${showNav ? "active" : ""}`}
          onClick={toggleNav}
        ></div>

        <nav className={`nav ${showNav ? "active" : ""}`}>
          <img
            src={close}
            alt="close nav-menu"
            onClick={toggleNav}
            className="close"
          />
          <ul className="nav-list">
            {navText.map((text) => (
              <li key={text}> {text}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-2 relative">
        <img src={cart} alt="open cart" />
        <img src={avater} alt="" className="w-8 aspect-square" />
        <div className="absolute min-h-[16rem] shadow-2xl rounded-md bg-white min-w-[23rem]  top-10 -right-4 flex flex-col">
          <h2 className="px-3 py-4 border-b border-b-[#979797] font-bold text-veryDarkBlue">
            Cart
          </h2>
          {/* <p className="text-grayishBlue font-bold text-base text-center flex-1 grid place-items-center">
            Your cart is empty
          </p> */}
          <div>
            <figure>
              <img src={product} />
            </figure>
            <hgroup>
              <h3>Fall Limited Edition Sneakers</h3>
              <h4>
                $125.00 x 3 <span>$375.00</span>
              </h4>
            </hgroup>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
