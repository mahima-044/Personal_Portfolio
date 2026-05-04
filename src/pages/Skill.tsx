import React from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiC,
  SiPython,
  SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Reveal from "../components/common/Reveal";

type Capability = {
  name: string;
  icon: React.ReactNode;
};

const Skills: React.FC = () => {
  const data: Capability[] = [
    { name: "Javascript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Typescript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "C", icon: <SiC className="text-gray-700" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "VsCode", icon: <VscVscode className="text-blue-500" /> },
    { name: "Github", icon: <SiGithub className="text-black" /> },
  ];

  return (
    <section id="skills" className="min-h-1/12 w-full bg-[#E3E3FF] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        
        <Reveal>
          <h1 className="font-brand text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            My Skills
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The services I offer are meticulously crafted and tailored to cater
            specifically to your{" "}
            <span className="font-medium text-gray-800">unique needs</span> and requirements.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className="flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 hover:-translate-y-1 hover:shadow-md transition cursor-pointer"
              >
                <span className="text-xl md:text-2xl">{item.icon}</span>
                <span className="text-sm sm:text-base md:text-lg font-medium">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        
        <div className="mt-16 w-full h-[1px] bg-gray-400 opacity-40"></div>

      </div>
    </section>
  );
};

export default Skills;