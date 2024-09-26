import React, { useState } from "react";
import Menusvg from "../Component/Menusvg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const Links = [
    { name: "Home", url: "" },
    { name: "Our Story", url: "our-story" },
    { name: "Our Work", url: "our-work" },
    { name: "Ethical Impact", url: "ethical-impact" },
    {
      name: "2022-2026 Strategic Framework",
      url: "2022-2026-strategic-framework",
    },
    { name: "The Team", url: "the-team" },
    { name: "Our Partners", url: "our-partners" },
    { name: "Press", url: "press" },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between px-4 z-20 relative">
      <span className="flex items-center justify-between ">
        <img src="/Pr.png" alt="logo" className="w-[6rem] md:w-[10rem]" />
        <button
          onClick={() => setDropdown((prev) => !prev)}
          aria-label={dropdown ? "Close menu" : "Open menu"}
          className="block md:hidden p-2 text-gray-500 hover:text-gray-700 "
        >
          <Menusvg dropdown={dropdown} />
        </button>
      </span>
      <ul
        className={`flex items-start md:items-center flex-col md:flex-row overflow-hidden md:overflow-auto transition-all duration-300 ease-in-out absolute md:static bg-white w-full md:bg-transparent md:w-fit z-20 left-0 top-[6rem] ${
          dropdown ? "max-h-[500px]" : "max-h-0 md:max-h-max"
        }`}
      >
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={`/${link.url}`}
            className="p-4 text-sm hover:text-[#006837] hover:bg-slate-200 md:hover:bg-transparent  w-full md:w-fit"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
