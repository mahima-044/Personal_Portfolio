
import Reveal from '../components/common/Reveal';

const Projects = () => {
  const posts = [
    {
      id: 1,
      imageBg: 'bg-[#d8e2dc]', 
      imageSrc: 'image.png', 
      title: 'Personal Portfolio',
      description: 'Build the personal portfolio website using the Frontend Frameworks and other tools',
      category: 'Website',
      link: 'https://github.com/mahima-044/Personal_Portfolio'
    },
    {
      id: 2,
      imageBg: 'bg-[#e8dff5]',
      imageSrc: 'Education-donation-system.png',
      title: 'Education Donation System',
      description: 'Build the education donation platform, where user can donate with fully transperancy',
      category: 'Web-App',
      link: 'https://mahima-044.github.io/EduDonate---Education-Donation-Platform/'
    }
  ];

  return (
    <section id="projects" className="bg-white min-h-screen flex flex-col items-center py-24 px-6 font-sans text-black">
      
     
      <Reveal className="max-w-2xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          My Projects
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Explore my project, where I apply modern development practices to create efficient and impactful, and digital solutions.
        </p>
      </Reveal>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.map((post, index) => (
          <Reveal key={post.id} delay={index * 200}>
            <a href={post.link} className="flex flex-col border border-black rounded-2xl overflow-hidden bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300 h-full cursor-pointer">
              
              <div className={`w-full h-64 md:h-72 ${post.imageBg} border-b border-black flex items-center justify-center overflow-hidden relative`}>
                
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>

              
              <div
              className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  {post.description}
                </p>
                
                
                <div className="mt-auto">
                  <hr className="border-black mb-4" />
                  <div className="flex items-center text-xs font-bold text-gray-800 tracking-wider">
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

            </a>
          </Reveal>
        ))}
      </div>

      
      <Reveal delay={400}>
        <button className="border border-black rounded-lg px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
          View More
        </button>
      </Reveal>

    </section>
  );
}
export default Projects;