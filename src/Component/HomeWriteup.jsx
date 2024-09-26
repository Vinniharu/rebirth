import React from 'react'

const HomeWriteup = () => {
  return (
    <section className="p-5 md:px-10">
      <p className="mb-[6rem]">
        Over 60% of poor Nigerians are women due to factors that include but not
        limited to{" "}
        <span className="text-[#006837] font-bold">
          sexism, unequal access to opportunity, social, economic, normative,
          cultural, religious and political factors.
        </span>{" "}
        Rural communities are often marginalised globally. Likewise in Nigeria,
        there are limited opportunities for women to break this cycle of
        inequality and achieve a sustainable source of income generation.
        Project Rebirth provides free entrepreneurial and skills acquisition
        training for low income or underprivileged women on eco-friendly fashion
        designing to give them a source of income generation for financial
        inclusion, empowerment, and gender equality.
      </p>
      <section className="mb-4">
        <span className="flex items-center justify-between flex-wrap gap-10 md:gap-6 md:flex-nowrap mb-10">
          <span className="md:flex-[1]">
            <h2 className="text-4xl font-bold text-[#006837] mb-6">Mission</h2>
            <p>
              Empowering women with skills for gender equality with impact
              investments for their businesses.
            </p>
          </span>
          <span className="md:flex-[1]">
            <img src="/home1.jpg" alt="Home1" />
          </span>
        </span>
        <span className="flex items-center justify-between flex-wrap-reverse gap-10 md:gap-6 md:flex-nowrap">
          <span className="md:flex-[1]">
            <img src="/home2.jpg" alt="Home1" />
          </span>
          <span className="md:flex-[1] text-right">
            <h2 className="text-4xl font-bold text-[#006837] mb-6">Vision</h2>
            <p>
              Fostering economic prosperity for women in rural communities of
              Nigeria and globally.
            </p>
          </span>
        </span>
      </section>
      <p className="mb-8">
        We believe in the power of women to drive social change globally.
      </p>
      <p className="mb-8">
        Project Rebirth empowers rural dwelling women to contribute to solving
        the issue of climate change through sustainable fashion and perpetrating
        the culture of recycling waste materials to create new products and
        fashion accessories.
      </p>
    </section>
  );
}

export default HomeWriteup