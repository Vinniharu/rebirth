import React from "react";

const Backtotop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="w-8 h-8 rounded-sm bg-slate-300 flex items-center justify-center fixed md:bottom-[5rem] md:right-[5rem] bottom-[1rem] right-[1rem]"
      onClick={scrollToTop}
    >
      <img src="/uparrow.svg" alt="up" />
    </button>
  );
};

export default Backtotop;
