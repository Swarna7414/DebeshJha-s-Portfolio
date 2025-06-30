import React from "react";
import { FaUniversity, FaCalendarCheck } from "react-icons/fa";
import { TiMinusOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { LiaUniversitySolid } from "react-icons/lia";

const education = [
  {
    title: "UiT- The Arctic University of Norway",
    location:"Tromsø, Norway",
    subtitle: "Ph.D, Computer Science",
    duration: "2018–2021",
  },
  {
    title: "Chosun University",
    location:"Gwangju, South Korea",
    subtitle: "Master's in Information Technology",
    duration: "2015–2017",
  },
  {
    title: "Khwopa Engineering College (Purbanchal University)",
    location:"Bhaktapur, Nepal",
    subtitle: "Bachelor's in Electrical and Communication Engineering",
    duration: "2008–2013",
  },
  {
    title: "Birat Science Campus",
    location:"Koshi, Nepal",
    subtitle: "High School",
    duration: "2006–2008",
  },
];

const AcademicCarrier: React.FC = () => {
  return (
    <section className="min-h-screen w-screen pt-[90px] flex items-start justify-center px-4 text-black">
      <div className="w-full max-w-5xl">
        <h1 className="text-center text-2xl lg:text-4xl text-black font-bold mb-10">
          Educational Background
        </h1>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-blue-500 z-0" />

          {/* Timeline items */}
          <div className="flex flex-col gap-8">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 pl-16">
                

                {/* Card */}
                <div className="flex flex-col justify-between w-full border border-blue-200 shadow-lg hover:shadow-xl shadow-blue-300 rounded-2xl p-4">
                  <div className="text-black flex items-center gap-3">
                    <FaUniversity className="text-2xl text-blue-500" />
                    <span>{item.title}</span>
                  </div>
                  <div className="text-black flex items-center gap-3 mt-2">
                    <CiLocationOn className="text-2xl text-red-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="text-black flex items-center gap-3 mt-2">
                    <TiMinusOutline className="text-2xl" />
                    <span>{item.subtitle}</span>
                  </div>
                  <div className="text-black flex items-center gap-3 mt-2">
                    <FaCalendarCheck className="text-2xl text-green-300" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCarrier;