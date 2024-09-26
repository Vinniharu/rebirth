import React from "react";
import Navbar from "../UI/Navbar";
import { Link } from "react-router-dom";
import HomeWriteup from "../Component/HomeWriteup";
import HomeYoutube from "../Component/HomeYoutube";
import Footer from "../UI/Footer";
import Backtotop from "../Component/Backtotop";

const Home = () => {
  return (
    <>
      <header
        className="h-[70vh] bg-cover relative z-10 flex flex-col justify-between pb-8"
        style={{
          backgroundImage: `url("/IMG_3938-scaled.jpg")`,
        }}
      >
        <div className="w-full h-full bg-slate-200 opacity-60 absolute top-0 left-0 -z-10"></div>

        <Navbar />

        <section className="w-full md:w-1/2 flex flex-col self-end items-end text-right px-4 md:px-8">
          <h2 className="text-[#006837] font-semibold text-xl md:text-2xl">
            “Young feminist-led social enterprise for the economic empowerment
            of women in marginalized communities”
          </h2>
          <p className="mb-16 md:text-lg">
            By Women, With Women, and For Women.
          </p>
          <Link to="/somepage">
            <span className="text-white py-2 px-4 bg-[#006837] hover:bg-green-700 transition-all duration-300">
              Click Here
            </span>
          </Link>
        </section>
      </header>
      <HomeWriteup />
      <HomeYoutube />
      <span className="flex items-center flex-col p-5 md:px-10">
        <h2 className="text-2xl md:text-4xl text-[#006837] font-semibold mb-6 mt-12">
          Watch our Beneficiaries
        </h2>
        <iframe
          src="https://drive.google.com/file/d/10j9ZBKeC8oSygzU48agpLi5-njhddTEk/preview"
          className="w-full"
          height="315"
          frameborder="0"
          data-ruffle-polyfilled=""
        ></iframe>
      </span>
      <span className="flex items-center flex-wrap md:flex-nowrap p-5 md:px-10 gap-10">
        <span className="md:flex-[1]">
          <h2 className="font-bold text-3xl md:text-4xl text-[#006837] mb-4">
            Youth connect session
          </h2>
          <a
            href="https://fb.watch/jB2GizxPIf/"
            className="text-blue-500 underline"
          >
            Click Here
          </a>
        </span>
        <span className="md:flex-[1] w-full">
          <img src="/homeposter.jpg" alt="poster" className="m-auto"/>
        </span>
      </span>
      <Footer/>
      <Backtotop/>
    </>
  );
};

export default Home;
