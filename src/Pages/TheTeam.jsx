import React from "react";
import Navbar from "../UI/Navbar";
import Backtotop from "../Component/Backtotop";
import Footer from "../UI/Footer";

const team = [
  {
    name: "Oluwadamilola Akintewe",
    role: "Founder and Team Lead",
    img: "/dami.jpg",
    writeup:
      "A social entrepreneur and change leader, she founded Project Rebirth inspired by her experience growing up on a farming settlement in a rural community. She is committed to smashing every form of oppression against women empowerment.",
    link: "https://tewedami.wixsite.com/damilolaakintewe",
  },
  {
    name: "Blessing Ahmodu",
    role: "Programs Manager",
    img: "/blessing.jpg",
    writeup:
      "Blessing is passionate of social change for women. She has a Bachelors Degree in Early Childhood Education.",
    link: "http://mainstack.me/blessing_2ahmodu",
  },
  {
    name: "Moses Aloba",
    role: "Technical Head",
    img: "/moses.jpg",
    writeup:
      "Moses has over 6 years experience in story telling and media management. He also runs the technical aspects of Project Rebirth operations",
  },
];

const TheTeam = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-4xl font-bold text-[#006837]">The Team</h2>
        <ul className="grid md:grid-cols-3 gap-4 h-fit m-4 md:m-10">
          {team.map((member, index) => (
            <li key={index} className="text-center h-fit">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-[16rem] m-auto mb-[2rem]"
              />
              <span className="text-[#006837] font-bold text-lg md:text-xl">
                <p>{member.name}</p>
                <p>{`(${member.role})`}</p>
              </span>
              <p className="mt-[2rem]">{member.writeup}</p>
              {member.link ? (
                <a href={member.link}>
                  <img src="/globe.svg" className="w-6 m-auto" />
                </a>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </section>
      <Backtotop />
      <Footer />
    </>
  );
};

export default TheTeam;
