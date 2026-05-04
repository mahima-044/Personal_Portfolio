import { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-center fixed top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200/50">
            <div className="w-[90%] md:w-[80%] px-6 py-4 flex items-center justify-between">


                <h1 className="font-brand text-xl font-bold text-gray-800">
                    Mahima
                </h1>


                <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <li>
                        <a href="#home" className="hover:text-black cursor-pointer transition block">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-black cursor-pointer transition block">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-black cursor-pointer transition block">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-black cursor-pointer transition block">Contact</a>
                    </li>
                </ul>

                <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
                    <a
                        href="https://github.com/mahima-044"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mahima-mahajan-03b075338/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                </div>



                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none">
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col items-center py-6 space-y-6 text-gray-700 font-medium animate-in slide-in-from-top-2 duration-200">
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-black">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-black">About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-black">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-black">Contact</a>
                    <div className="flex gap-4 pt-4 border-t border-gray-100 w-1/2 justify-center">
                        <a href="https://github.com/mahima-044" target="_blank" rel="noopener noreferrer" className="hover:text-black text-2xl"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mahima-mahajan-03b075338/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-2xl"><FaLinkedin /></a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar