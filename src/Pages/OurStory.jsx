import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import Backtotop from "../Component/Backtotop";

const values = [
  { name: "Community building", svg: "/building.svg" },
  { name: "Equality", svg: "/equal.svg" },
  { name: "Diversity", svg: "/diverse.svg" },
  { name: "Inclusivity", svg: "/inclusive.svg" },
  { name: "Intersectionality", svg: "/intersec.svg" },
  { name: "Youth Led", svg: "/youth.svg" },
];

const OurStory = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8">
        <h2 className="text-4xl font-bold text-[#006837]">Our Story</h2>
        <p>
          In 2018, we identified a gap in indigenous{" "}
          <span className="text-[#006837] font-bold">women</span> living in{" "}
          <span className="text-[#006837] font-bold">
            marginalised communities
          </span>{" "}
          being able to{" "}
          <span className="text-[#006837] font-bold">
            access economic empowering opportunity.
          </span>{" "}
          Our social quest in 2018 identified over thousands with no source of
          income generation.
        </p>
        <p>
          Project Rebirth is a young feminist led social enterprise for the
          economic empowerment of women in marginalised communities. We maintain
          a culture of inclusion through our mantra{" "}
          <span className="text-[#006837] font-bold">
            “By Women, With Women and For Women.”
          </span>
        </p>
        <p>
          We are solving the issue of{" "}
          <span className="text-[#006837] font-bold">gendered poverty</span>,
          giving women a NEW chances through{" "}
          <span className="text-[#006837] font-bold">
            free entrepreneurial & business literacy
          </span>{" "}
          lessons to help them{" "}
          <span className="text-[#006837] font-bold">fight poverty</span> and{" "}
          <span className="text-[#006837] font-bold">
            solve other social issues
          </span>{" "}
          that specifically affect women in their rural communities.
        </p>
      </section>
      <section className="p-4 md:p-8">
        <h2 className="text-4xl font-bold text-[#006837]">Our Core Values</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
          {values.map((value, index) => (
            <li
              key={index}
              className="flex items-center flex-col border rounded-lg justify-center gap-2 h-[8rem]"
            >
              <img src={value.svg} className="w-10" />
              <p className="font-bold text-[#006837]">{value.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex items-start flex-col gap-6 p-4 md:p-8">
        <h2 className="text-4xl font-bold text-[#006837]">
          Our Thematic Areas
        </h2>
        <ul className="flex flex-col items-start gap-6">
          <li>
            <span className="text-[#006837] font-bold">
              Entrepreneurship Skills:
            </span>
            We tailor our training to the needs of the particular community and
            group of women. However, individual training is FREE for
            participants to help remove the economic barrier to them getting
            empowered.
          </li>
          <li>
            <span className="text-[#006837] font-bold">
              Sustainable Fashion for climate action:
            </span>
            For women who learnt to sew, we provide an avenue for them to lead
            change through sustainable fashion by training them to reduce cloth
            waste, resuse and recycle materials into newer pieces on the
            advocacy against climate injustice and fast fashion.
          </li>
          <li>
            <span className="text-[#006837] font-bold">Impact Investment:</span>
            Post training, we support participants through investing in their
            startups, mini grants, no collateral loans and assistance in
            individual fashion jobs application.
          </li>
          <li>
            <span className="text-[#006837] font-bold">
              Leadership and Co-creation:
            </span>
            We engage members of each community in the project implementation
            processes to facilitate a communal co-creation, inclusion, equitable
            and sustainable impact.
          </li>
        </ul>
      </section>
      <section className="max-w-3xl mx-[2rem] md:m-auto mt-[4rem] md:mb-[8rem]">
        <h3 className="text-xl font-bold text-[#006837] text-center">
          "There Is No Force More Powerful Than A Woman Determined To Rise"
        </h3>
        <p>
          Our beneficiaries have one common goal which is to be empowered to
          improve their lives, communities, and secure a source of income
          generation for upward social mobility. We provide them with resources
          to do that.
        </p>
      </section>
      <span className="flex items-center flex-col p-5 md:px-10">
        <h2 className="text-2xl md:text-4xl text-[#006837] font-semibold mb-6 mt-12">
          Hear Beneficiaries Speak
        </h2>
        <iframe
          src="https://drive.google.com/file/d/1_tcC-Kno_bnOI1OFj3ui0xmWPzguWt_7/preview"
          className="w-full"
          height="315"
          frameborder="0"
          data-ruffle-polyfilled=""
        ></iframe>
      </span>
      <Backtotop />
      <Footer />
    </>
  );
};

export default OurStory;
