import React from "react";
import Navbar from "../UI/Navbar";
import Backtotop from "../Component/Backtotop";
import Footer from "../UI/Footer";

const Press = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-2xl md:text-4xl font-bold text-[#006837]">Press</h2>
        <img src="/press.png" alt="press" className="w-full m-4" />
        <a
          href="https://www.global-solutions-initiative.org/young-global-changers/alumni/class-of-2023/"
          className="font-bold text-4xl underline text-[#006837]"
        >
          Read More
        </a>
      </section>
      <Backtotop />
      <Footer />
    </>
  );
};

export default Press;
