import React from "react";
import Star from "./images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--experience col-3">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} alt="" />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="" />
        <span>{props.item.stats.rating} </span>{" "}
        <span className="grey"> ({props.item.stats.reviewCount})</span>{" "}
        <span className="grey"> • </span>
        <span className="grey"> {props.item.location} </span>
      </div>
      <div>
        <p>{props.item.title}</p>
        <p>
          <strong> from ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
