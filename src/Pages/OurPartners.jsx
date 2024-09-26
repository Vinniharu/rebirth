import React from "react";
import Navbar from "../UI/Navbar";
import Backtotop from "../Component/Backtotop";
import Footer from "../UI/Footer";

const images = ["/zurich.png", "/onechild.png", "/gs.png", "/enactus.png"]

const OurPartners = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-4xl font-bold text-[#006837]">Our Partners</h2>
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 m-auto">
          {images.map((img) => (
            <span className="bg-slate-200 min-h-[10rem] flex items-center justify-center">
              <img src={img} className="w-[10rem] sm:w-full" />
            </span>
          ))}
        </ul>
      </section>
      <Backtotop />
      <Footer />
    </>
  );
};

export default OurPartners;
