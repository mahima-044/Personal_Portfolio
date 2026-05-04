
import Reveal from '../components/common/Reveal';

const Contact =() => {
  return (
    <section id="contact" className="bg-[#1c1c1c] text-white min-h-screen flex flex-col items-center justify-center pt-24 pb-8 px-6 font-sans">
      <div className="max-w-4xl w-full flex flex-col items-center flex-grow justify-center">
        
        
        <Reveal className="mb-8 flex justify-center">
          <div className="bg-white text-black px-3 py-2 rounded-xl rounded-bl-sm relative flex items-center justify-center shadow-lg">
            
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
           
            <div className="absolute -bottom-2 left-1 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent"></div>
          </div>
        </Reveal>

        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center leading-[1.1] mb-6">
            Let's talk about<br />your project.
          </h1>
        </Reveal>
        
        <Reveal delay={400}>
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-xl mb-12">
            Got a project in mind? Let's create something great.<br />
            We can transform that idea into real product.
          </p>
        </Reveal>

        
        <Reveal delay={600} className="relative mb-32">
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm">
            Get in Touch
          </button>
          
        
          <div className="hidden md:block absolute top-full left-full mt-2 ml-2 w-48 text-gray-300 transform -translate-x-8">
            <div className="relative">
              
              <svg 
                className="absolute -top-6 -left-4 w-12 h-12 text-gray-300" 
                viewBox="0 0 50 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 10 40 Q 20 20 40 10" />
                <path d="M 30 10 L 40 10 L 40 20" />
              </svg>
              <span className="font-['Caveat',cursive,'Comic_Sans_MS'] text-xl -rotate-6 block ml-6">
                and make it<br />real together
              </span>
            </div>
          </div>
        </Reveal>

      </div>

     
      <div className="max-w-6xl w-full border-t border-gray-600 pt-6 mt-16 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
        <p>
          © <span className=" decoration-gray-500 cursor-pointer hover:text-white transition-colors"> Mahima Mahajan. </span>All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium text-white">
          <a href="#about" className="hover:text-gray-300 transition-colors">About Me</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;