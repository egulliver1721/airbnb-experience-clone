import React from "react";
import Logo from "./images/airbnb_logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo--image" src={Logo} alt="" />
    </nav>
  );
}
