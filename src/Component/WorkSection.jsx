import React from 'react'

const WorkSection = () => {
  return (
    <section className="p-5 md:px-10">
      <span className="flex items-center justify-between flex-wrap gap-10 md:gap-6 md:flex-nowrap mb-10">
        <span className="md:flex-[1] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#006837]">
            Free Skills Acquisition In Sustainable Fashion
          </h2>
          <p>
            We provide free sewing lessons for women in eco-friendly and
            sustainable fashion. We partner with professionals who train
            participants through a curriculum in learning how to sew, design
            fashion accessories with lessons in Reducing, Reusing and Recycling
            as a conscious effort towards climate justice. We leverage on the
            power of collaboration and social entrepreneurship as a solution to
            economic inequality and climate injustice.
          </p>
          <p>
            We also implement a{" "}
            <span className="text-[#006837] font-bold">
              “everyone a change maker” model
            </span>{" "}
            where participants are intimated with the UN SDGs.
          </p>
        </span>
        <span className="md:flex-[1]">
          <img src="/work1.jpg" alt="Home1" />
        </span>
      </span>
      <span className="flex items-center justify-between flex-wrap-reverse gap-10 md:gap-6 md:flex-nowrap mb-10">
        <span className="md:flex-[1]">
          <img src="/work2.jpg" alt="Home1" />
        </span>
        <span className="md:flex-[1] text-right">
          <h2 className="text-2xl font-bold text-[#006837] mb-6">
            Women In Agriculture
          </h2>
          <p>
            Women in Nigeria dominate the informal agricultural and food
            processing sector. However, most women in rural communities are not
            qualified for loans due to the stringent requirements demanded by
            traditional financial institutions. We bridge this inequality gap by
            providing interest free mini loans to women in agriculture and food
            production of locally sourced material as a source of economic
            empowerment to improve their capital power.
          </p>
        </span>
      </span>
      <span className="flex items-center justify-between flex-wrap gap-10 md:gap-6 md:flex-nowrap mb-10">
        <span className="md:flex-[1] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#006837]">
            Young Women In Business
          </h2>
          <p>
            We host periodic dialogues and roundtable conversations with
            business leaders and experts to provide mentorship and trainings for
            young women venturing into business and other entrepreneurial
            activities.
          </p>
          <p>
            This helps them in bridging the knowledge gap, equipping them in
            business literacy and financial education.
          </p>
        </span>
        <span className="md:flex-[1]">
          <img src="/work3.jpg" alt="Home1" />
        </span>
      </span>
      <span className="flex items-center justify-between flex-wrap-reverse gap-10 md:gap-6 md:flex-nowrap mb-10">
        <span className="md:flex-[1]">
          <img src="/work4.jpg" alt="Home1" />
        </span>
        <span className="md:flex-[1] text-right">
          <h2 className="text-2xl font-bold text-[#006837] mb-6">Support</h2>
          <p>
            At the end of training, we support our participants’ women led
            enterprises by raising funds to help them start up their businesses.
            We also promote participants’ works through digital media while
            helping them implement their skills for economic development and
            independence.
          </p>
        </span>
      </span>
      <span className="flex items-center justify-between flex-wrap gap-10 md:gap-6 md:flex-nowrap mb-10">
        <span className="md:flex-[1]">
          <h2 className="text-2xl font-bold text-[#006837] mb-6">Community</h2>
          <p>
            At Project Rebirth, we believe in community. Our community is
            comprises of intergenerational women entrepreneurs building their
            lives and community better, economically empowered again financial
            violence and enhancing that development reaches rural communities.
          </p>
        </span>
        <span className="md:flex-[1]">
          <img src="/work5.PNG" alt="Home1" />
        </span>
      </span>
    </section>
  );
}

export default WorkSection