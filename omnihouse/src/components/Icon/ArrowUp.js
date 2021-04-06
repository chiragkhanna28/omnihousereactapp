import React from "react";

const ArrowUp = (props) => (
  <svg
    width="8"
    style={props.style}
    height="5"
    viewBox="0 0 8 5"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${props.className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M0.710051 3.28997L3.30005 0.699971C3.69005 0.309971 4.32005 0.309971 4.71005 0.699971L7.30005 3.28997C7.93005 3.91997 7.48005 4.99997 6.59005 4.99997H1.41005C0.520051 4.99997 0.0800515 3.91997 0.710051 3.28997Z" fill="#F2F0F0"/>
  </svg>
);

export default ArrowUp;
