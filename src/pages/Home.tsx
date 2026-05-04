
import Navbar from '../components/Navbar'
import Card from '../components/common/Card'
import Reveal from '../components/common/Reveal'


const Home = () => {
    return (
        <div id="home" className='relative max-h-10/12 bg-[#E3E3FF] text-black overflow-hidden'>
            <Navbar />

            <div className='min-h-screen w-full flex flex-col justify-center items-center px-4 py-24 md:p-16 relative z-10'>
                 <div className='absolute top-32 left-10 md:top-80 md:left-32 h-24 w-24 md:h-32 md:w-32 rounded-full flex justify-center items-center transform -rotate-12'>
                <img className='w-full h-full object-cover mix-blend-multiply opacity-90' src="laptop-work.svg" alt="" />
            </div>
            <Reveal delay={0}>
                <span className='text-5xl md:text-7xl font-extrabold mt-10 inline-block'>Hii👋</span>
            </Reveal>
            <Reveal delay={200}>
                <span className='p-2 md:p-5 text-4xl sm:text-5xl md:text-7xl font-extrabold inline-block text-center'>I'm Mahima Mahajan,</span>
            </Reveal>
            <Reveal delay={400}>
                <span className='text-2xl sm:text-3xl md:text-5xl font-bold inline-block text-center mt-2 md:mt-0'>Frontend Developer</span>
            </Reveal>
            <Reveal delay={600}>
                <p className='p-4 md:p-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl text-center inline-block'>I’m a passionate developer focused on building modern, responsive web applications. I enjoy turning ideas into clean, user-friendly experiences using technologies like React, TypeScript, and Tailwind CSS.</p>
            </Reveal>
            </div>
             <div className='absolute bottom-32 right-10 md:top-64 md:right-32 h-20 w-20 md:h-24 md:w-24 rounded-full flex justify-center items-center transform rotate-12'>
                <img className='w-full h-full rounded-full object-cover mix-blend-multiply opacity-90' src="developer-icon.png" alt="" />
            </div>
            <div className='min-h-50'>
                <div className="relative w-full min-h-[80vh] py-20 flex items-center justify-center">

                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[[#E3E3FF]]" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

                    <div className="relative z-10 w-full flex items-center justify-center">
                        <Reveal delay={200} className="w-full">
                            <Card />
                        </Reveal>
                    </div>

                </div>
            </div>
   
        </div>
        

    )
}

export default Home