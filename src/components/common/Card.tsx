import React from "react";
import { FaGlobe, FaRegFileAlt, FaEnvelope } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


type CardItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  link: string;
};

const Card: React.FC = () => {
  const cardData: CardItem[] = [
    {
      title: "My Projects",
      description: "Explore selected projects and my approach to design.",
      icon: <FaGlobe />,
      bgColor: "bg-blue-100",
      link: "#projects",
    },
    {
      title: "About Me",
      description:
        "A closer look at my background, skills, and creative journey.",
      icon: <FaRegFileAlt />,
      bgColor: "bg-yellow-100",
      link: "#about",
    },
    {
      title: "Contact Me",
      description:
        "Let’s work together to bring your ideas and vision to life.",
      icon: <FaEnvelope />,
      bgColor: "bg-green-100",
      link: "#contact",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-8 py-16">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-[320px] md:w-[360px] bg-white border border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-1"
        >
          
          <div className="mb-6 text-5xl text-gray-700">
            {card.icon}
          </div>

          
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {card.title}
          </h2>

          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {card.description}
          </p>

          
          <a
            href={card.link}
            className={`w-15 h-10 p-2 flex items-center justify-center rounded-4xl border border-gray-400 ${card.bgColor} hover:scale-110 transition cursor-pointer`}
          >
            <FaArrowRightLong />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;