import React from "react";
import Navbar from "../UI/Navbar";
import Backtotop from "../Component/Backtotop";
import Footer from "../UI/Footer";

const StrategicFramework = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-4xl font-bold text-[#006837]">
          2022 - 2026 Strategic Framework
        </h2>
        <p>
          Over the next four years, Project Rebirth will keep working towards
          economic empowerment for women in marginalised areas, pushing for
          gender equality and replicating impacts globally with supports with
          collaborations with other young leaders.
        </p>
        <p>
          We hope to reach a direct impact of 5000 women and give out more than
          $500,000 in impact investment and loans to women led businesses
          thriving in rural communities. We believe in the possibility of this
          dream and we are working towards it via collaboration and partnership.
        </p>
        <p>
          Project Rebirth will also be supporting advocacy efforts to have more
          women in business leadership positions leading for change and a more
          equal world.
        </p>
        <p>
          Project Rebirth believes in the potential women have and their ability
          to lead for change and equity. Project Rebirth framework is based on
          an intersectional vision leveraging on international solidarity to
          remove the economic inequality gap for women globally.
        </p>
      </section>
      <img src="/puzzle.png" alt="banner" className="w-[30rem] m-auto" />
      <Backtotop />
      <Footer />
    </>
  );
};

export default StrategicFramework;
