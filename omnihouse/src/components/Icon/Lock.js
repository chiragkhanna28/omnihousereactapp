import React from "react";

const Lock = (props) => (
  <svg
    width="17"
    style={props.style}
    height="22"
    viewBox="0 0 17 22"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${props.className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M14.5 7.5H13.5V5.5C13.5 2.74 11.26 0.5 8.5 0.5C5.74 0.5 3.5 2.74 3.5 5.5V7.5H2.5C1.4 7.5 0.5 8.4 0.5 9.5V19.5C0.5 20.6 1.4 21.5 2.5 21.5H14.5C15.6 21.5 16.5 20.6 16.5 19.5V9.5C16.5 8.4 15.6 7.5 14.5 7.5ZM8.5 16.5C7.4 16.5 6.5 15.6 6.5 14.5C6.5 13.4 7.4 12.5 8.5 12.5C9.6 12.5 10.5 13.4 10.5 14.5C10.5 15.6 9.6 16.5 8.5 16.5ZM5.5 7.5V5.5C5.5 3.84 6.84 2.5 8.5 2.5C10.16 2.5 11.5 3.84 11.5 5.5V7.5H5.5Z" fill="#F2F0F0"/>
  </svg>
);

export default Lock;
