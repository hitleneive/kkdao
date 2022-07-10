import React from "react";

function Arrow(props = {}) {
  return (
    <svg
      {...props}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12.3594H5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 12.3594H5"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 19.3594L5 12.3594L12 5.35938"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 19.3594L5 12.3594L12 5.35938"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Arrow;
