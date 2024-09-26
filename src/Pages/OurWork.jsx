import React from 'react'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import Backtotop from '../Component/Backtotop';
import WorkSection from '../Component/WorkSection';

const OurWork = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start flex-col gap-6 border-t p-4 md:p-8 mb-[6rem]">
        <h2 className="text-4xl font-bold text-[#006837]">Our Work</h2>
        <p>
          The team at{" "}
          <span className="text-[#006837] font-bold">
            Project Rebirth travelled
          </span>{" "}
          to the{" "}
          <span className="text-[#006837] font-bold">
            extremely interior parts
          </span>{" "}
          of south west Nigeria and{" "}
          <span className="text-[#006837] font-bold">reach out</span> to women
          in rural and underserved areas to provide{" "}
          <span className="text-[#006837] font-bold">
            educational and entrepreneurial equality opportunities.
          </span>{" "}
          Our efforts involve studying new approaches and developing{" "}
          <span className="text-[#006837] font-bold">innovative ways</span> to
          implement them. We evaluate the{" "}
          <span className="text-[#006837] font-bold">
            impact of the climate
          </span>{" "}
          and environment in facilitating women’s rights and access to equality
          and justice.
        </p>
        <p>
          We gather{" "}
          <span className="text-[#006837] font-bold">
            qualitative and quantitative data,
          </span>{" "}
          and use that information to measure shifts and changes from our
          baseline measurements.
        </p>
        <p>
          We connect with community women to identify their specific needs and
          then, leverage on available resources to implement local solutions to
          their economic, social and environmental issues
        </p>
      </section>
      <WorkSection/> 
      <Backtotop />
      <Footer />
    </>
  );
}

export default OurWork