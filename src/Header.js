import React from "react";
import Hero from "./images/airbnb_hero.png";

export default function Header() {
  return (
    <section className="hero">
      <img className="hero--image" src={Hero} alt="" />
    </section>
  );
}
