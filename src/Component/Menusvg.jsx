import React from 'react'

const Menusvg = ({dropdown}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      className="transition-transform duration-300 ease-in-out"
    >
      <path
        className={`transition-opacity duration-300 ease-in-out ${
          dropdown ? "opacity-0" : "opacity-100"
        }`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 4h16M2 10h16M2 16h16"
      />
      <path
        className={`transition-opacity duration-300 ease-in-out ${
          dropdown ? "opacity-100" : "opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 5l10 10M15 5L5 15"
      />
    </svg>
  );
}

export default Menusvg