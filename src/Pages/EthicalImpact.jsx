import React from "react";
import Navbar from "../UI/Navbar";
import Backtotop from "../Component/Backtotop";
import Footer from "../UI/Footer";

const EthicalImpact = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-4xl font-bold text-[#006837]">Ethical Impact</h2>
        <p>
          We are driven by a strong desire to have an impact that is ethical,
          progressive, feminist while protecting planet earth.
        </p>
        <p>
          To access free, skills training in Nigeria cost a minimum of $200 per
          student, which is unattainable for most of our target audience. Since
          2019, we have bridged this gap and directly impacted 140 women in 5
          different communities in Ondo state, Nigeria through the{" "}
          <span className="text-[#006837] font-bold">FREE</span>
          training, thereby removing the economic limitations in getting skills.
        </p>
        <p>
          The Intersectionality of our program in economic empowerment and
          climate action via our sustainable fashion training has contributed to
          reducing 100+ bags of waste per month in each community and
          contributed to climate justice.
        </p>
        <p>
          We have raised to empower beneficiaries with sewing machines to set up
          their businesses and gave free financial literary classes to support
          sustainability.
        </p>
        <p>
          Our community of Young Women in Business has expanded across 10
          Nigerian universities who receive business trainings and mentorship
          while also advocating for women’s rights, equal opportunities,
          inclusion of women in decision-making and the involvement of women in
          tackling global issues like climate change.
        </p>
        <p>
          We provide free formal interview trainings, application tips and
          support packs for participants who are seeking to gain employment
          opportunities with the skills acquired via project Rebirth.
        </p>
      </section>
      <img src="/banner.png" alt="banner" className="w-[24rem] m-auto" />
      <Backtotop />
      <Footer />
    </>
  );
};

export default EthicalImpact;
