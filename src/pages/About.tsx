
import Reveal from "../components/common/Reveal";

const skillsLeft = [
  { name: "Web Development", value: 50, color: "bg-gray-300" },
  { name: "Web Tools", value: 70, color: "bg-purple-200" },
  { name: "Technologies", value: 45, color: "bg-green-200" },
];

const skillsRight = [
  { name: "React", value: 50, color: "bg-green-200" },
  { name: "Tailwind", value: 80, color: "bg-gray-300" },
  { name: "Typescript", value: 40, color: "bg-yellow-200" },
];

const About = () => {
  return (
    <>
  
    <section id="about" className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        
        <Reveal direction="left" className="w-full flex justify-center">
          <div className=" bg-gray-100 rounded-full relative flex justify-center">

             
            <img
              src="avatar.svg"
              alt="profile"
              className="w-[260px] object-cover rounded-2xl"/>          
          </div>
        </Reveal>

        <Reveal delay={200} className="flex-1">
          <h1 className="font-brand text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Hey! That’s me.
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
           As a computer science student, I am passionate about developing scalable and efficient web applications. I have hands-on experience with modern frontend technologies and enjoy applying my knowledge to real-world projects while continuously learning and adapting to new challenges.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            I actively work on projects to strengthen my skills in frontend development and aim to build impactful digital solutions through continuous learning and practical experience.
          </p>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="space-y-6">
              {skillsLeft.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1 text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

           
            <div className="space-y-6">
              {skillsRight.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1 text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
};

export default About;