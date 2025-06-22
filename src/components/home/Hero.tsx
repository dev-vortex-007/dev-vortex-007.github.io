import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xs:flex items-center min-h-screen pt-36">
          <div className="transform transition-all duration-1000">
            {/* Main Heading */}
            <div className="mb-6">
              <span className="text-base text-gray-900 dark:text-white">Hello World</span>
              <h1 className="flex flex-col xs:block w-fit text-6xl sm:text-7xl lg:text-9xl font-semibold text-gray-900 dark:text-white mb-4">
                VORTEX
                <span className="hidden xs:inline-block text-base lg:text-xl font-medium text-gray-900 dark:text-white ml-2">Debankur Das</span>
                <span className="xs:hidden self-end text-base font-medium text-gray-900 dark:text-white ml-2">
                  Debankur Das
                </span>
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed ml-4 lg:ml-8">
                I craft exceptional digital experiences through innovative design and clean code. 
                Let's build something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-2 text-base font-semibold text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transform transition-all duration-200 cursor-pointer">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://www.instagram.com/ig.vortex.007"
                target="_blank"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a 
                href="https://github.com/dev-vortex-007"
                target="_blank"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a 
                href="https://www.linkedin.com/in/debankur-das-007d07102004"
                target="_blank"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;