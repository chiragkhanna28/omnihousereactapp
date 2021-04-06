import React from "react";

const ArrowDown = (props) => (
  <svg
    width="8"
    style={props.style}
    height="5"
    viewBox="0 0 8 5"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${props.className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M0.710051 1.71L3.30005 4.3C3.69005 4.69 4.32005 4.69 4.71005 4.3L7.30005 1.71C7.93005 1.08 7.48005 0 6.59005 0H1.41005C0.520051 0 0.0800515 1.08 0.710051 1.71Z" fill="#F2F0F0"/>
  </svg>
);

export default ArrowDown;
