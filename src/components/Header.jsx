import React from "react";
import logo from "../assets/logo.svg";
import bar from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avater from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import { useCallback } from "react";
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
      <div className="flex items-center gap-2">
        <img src={cart} alt="open cart" />
        <img src={avater} alt="" className="w-8 aspect-square" />
      </div>
    </header>
  );
};

export default Header;
