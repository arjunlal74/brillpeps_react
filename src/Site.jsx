import React from "react";
import { useEffect, useState, useRef } from "react";

const AdCompanyWebsite = () => {
  const images = [
    {
      src: "/api/placeholder/700/700", // Increased image size
      alt: "Branding project for tech company",
    },
    { src: "/api/placeholder/700/700", alt: "Web design for e-commerce" },
    { src: "/api/placeholder/700/700", alt: "Mobile app interface design" },
    { src: "/api/placeholder/700/700", alt: "Product packaging design" },
    { src: "/api/placeholder/700/700", alt: "Brand identity project" },
    { src: "/api/placeholder/700/700", alt: "Digital marketing campaign" },
    { src: "/api/placeholder/700/700", alt: "Website redesign project" },
    { src: "/api/placeholder/700/700", alt: "Social media campaign" },
    { src: "/api/placeholder/700/700", alt: "UI/UX design for web app" },
    { src: "/api/placeholder/700/700", alt: "Print design campaign" },
  ];
  const [visibleItems, setVisibleItems] = useState({});
  const containerRef = useRef(null);
  const randomDelays = useRef(images.map(() => Math.random() * 0.8 + 0.2)); // Random delays (0.2s - 1s)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current.querySelectorAll(".fade-item");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  //   NAVBAR
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //   NAVBAR

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Container wrapper for the entire site */}
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        {" "}
        {/* Increased container width and padding */}
        {/* Navigation */}
        <nav className="px-6 md:px-12 py-6 bg-black text-white sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-light">
                <a
                  href="#"
                  className="relative inline-block overflow-hidden group"
                >
                  <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                    MADE BY MANY
                  </span>
                </a>
              </h1>
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Services", "Case studies", "Events", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg relative overflow-hidden group py-2"
                  >
                    <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                      {item}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-2">
              {["About", "Services", "Case studies", "Events", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden">
          {" "}
          {/* Increased padding */}
          <div className="max-w-5xl relative z-10">
            {" "}
            {/* Increased max width */}
            <h1 className="text-9xl font-bold mb-6">
              {" "}
              {/* Increased text size and margin */}
              We help <br />
              you grow
            </h1>
            {/* Enhanced minimalistic animation */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
              {/* Gradient sphere */}
              <div
                className="absolute right-24 top-24 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 rounded-full transform -translate-y-1/2 animate-pulse"
                style={{ animationDuration: "6s" }}
              ></div>

              {/* Floating circles */}
              <div
                className="absolute right-48 top-40 w-20 h-20 bg-yellow-500 opacity-10 rounded-full animate-float"
                style={{
                  animationName: "float",
                  animationDuration: "8s",
                  animationIterationCount: "infinite",
                }}
              ></div>
              <div
                className="absolute right-16 bottom-32 w-32 h-32 border-4 border-yellow-400 opacity-30 rounded-full animate-float"
                style={{
                  animationName: "float",
                  animationDuration: "10s",
                  animationIterationCount: "infinite",
                  animationDelay: "2s",
                }}
              ></div>

              {/* Abstract shapes */}
              <div
                className="absolute right-72 bottom-16 w-40 h-10 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-20 rounded-full transform rotate-45 animate-float"
                style={{
                  animationName: "float",
                  animationDuration: "12s",
                  animationIterationCount: "infinite",
                  animationDelay: "1s",
                }}
              ></div>
              <div
                className="absolute right-32 bottom-48 w-48 h-48 border-2 border-yellow-300 opacity-20 rounded-full animate-spin"
                style={{ animationDuration: "15s" }}
              ></div>
            </div>
          </div>
          {/* Add the float animation keyframes */}
          <style jsx>{`
            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-25px);
              }
              100% {
                transform: translateY(0px);
              }
            }
          `}</style>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-7xl font-bold mb-8">
                  About Us
                  <span className="block h-1 w-16 bg-yellow-400 mt-4"></span>
                </h2>
                <p className="text-2xl font-light mb-8">
                  Made by Many is an independent, award-winning, strategic
                  design & technology studio. We partner with Fortune 500
                  companies, global NGOs & leading start-ups to create
                  groundbreaking digital products & experiences.
                </p>
                <p className="text-lg text-white-700 mb-8">
                  Our multidisciplinary team combines strategic thinking, design
                  excellence, and technical innovation to solve complex
                  challenges and create meaningful digital solutions.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="px-4 py-2 border border-black text-sm">
                    Design Thinking
                  </span>
                  <span className="px-4 py-2 border border-black text-sm">
                    Product Strategy
                  </span>
                  <span className="px-4 py-2 border border-black text-sm">
                    Digital Innovation
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4">15+</span>
                    <span className="text-lg">Years of digital innovation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4">100+</span>
                    <span className="text-lg">Clients worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4">40+</span>
                    <span className="text-lg">Industry awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <h2 className="text-7xl font-bold mb-6 leading-tight">
                  Making new stuff <br />
                  out of the internet <br />
                  since 2007
                  <span className="block h-2 w-32 bg-green-400 mt-6"></span>
                </h2>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <p className="text-xl mb-8">
                  For over 15 years, we've been at the forefront of digital
                  innovation, helping organizations transform their businesses
                  through thoughtful design and technology.
                </p>
                <a
                  href="#case-studies"
                  className="inline-block border-2 border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
                >
                  View our work
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-10">
              Over the past 17 years we've helped more than 120 organisations
              create breakthrough innovation, digital products, services and
              tools.
              <span className="block h-2 w-48 bg-yellow-500 mt-4 mx-auto"></span>{" "}
            </h2>
            <a
              href="#case-studies"
              className="underline text-2xl hover:text-gray-300"
            >
              Have a look at some of our case studies
            </a>
          </div>
        </section>
        {/* Work Portfolio Section */}
        <section id="case-studies" className="py-24" ref={containerRef}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                data-index={index}
                className={`bg-gray-100 rounded-xl aspect-square overflow-hidden fade-item transition-opacity transform duration-1000 ease-out ${
                  visibleItems[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: visibleItems[index]
                    ? `${randomDelays.current[index]}s`
                    : "0s",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Featured Work Section */}
        {/* Featured Work Section */}
        <section id="services" className="py-24">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-6xl font-bold">Our work</h2>
            <a href="#" className="underline text-xl hover:text-gray-300">
              See all work
            </a>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {/* Work Item 1 - Multiverse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-100 rounded-xl p-10 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-indigo-900 text-5xl font-bold">
                    multiverse
                  </h3>
                  <div className="h-2 w-32 bg-yellow-500 mx-auto mt-3"></div>
                  <div className="h-2 w-20 bg-pink-500 mx-auto mt-3"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 text-lg mb-2">
                  Education Technology
                </p>
                <h3 className="text-3xl font-bold mb-4">
                  Reimagining apprenticeships for the digital age
                </h3>
                <p className="text-lg text-gray-300">
                  We partnered with Multiverse to create a platform that
                  connects ambitious non-graduates with outstanding
                  apprenticeship opportunities, revolutionizing the way
                  companies approach talent acquisition.
                </p>
              </div>
            </div>

            {/* Work Item 2 - CAVA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="/api/placeholder/700/500"
                  alt="CAVA food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 text-lg mb-2">CAVA</p>
                <h3 className="text-3xl font-bold mb-4">
                  Transforming the fast-casual dining experience through digital
                  innovation
                </h3>
                <p className="text-lg text-gray-300">
                  We helped CAVA create a seamless digital ordering experience
                  that reflects their commitment to fresh, authentic
                  Mediterranean cuisine while driving significant growth in
                  their customer base.
                </p>
              </div>
            </div>

            {/* Work Item 3 - Colgate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-red-500 rounded-xl overflow-hidden p-6">
                <img
                  src="/api/placeholder/700/500"
                  alt="Smart toothbrushes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 text-lg mb-2">Colgate</p>
                <h3 className="text-3xl font-bold mb-4">
                  Service experience vision for the world's smartest toothbrush
                </h3>
                <p className="text-lg text-gray-300">
                  We collaborated with Colgate to develop a revolutionary smart
                  toothbrush experience that combines cutting-edge technology
                  with intuitive design, helping users improve their oral health
                  habits.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us Section */}
        <section id="contact" className="py-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl font-bold mb-12 text-center">
              Let's create
              <br />
              something great
              <br />
              together
              <span className="block h-2 w-32 bg-yellow-400 mt-6 mx-auto"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              <div>
                <p className="text-2xl mb-8">
                  We're always looking for new challenges and exciting projects.
                  Drop us a line and let's start a conversation.
                </p>

                <div className="mt-12">
                  <p className="text-gray-400 text-xl mb-2">Email us at:</p>
                  <a
                    href="mailto:hello@madebymany.com"
                    className="text-2xl underline hover:text-gray-300 transition-colors"
                  >
                    hello@madebymany.com
                  </a>

                  <p className="text-gray-400 text-xl mt-8 mb-2">Call us:</p>
                  <a
                    href="tel:+44123456789"
                    className="text-2xl underline hover:text-gray-300 transition-colors"
                  >
                    +44 123 456 789
                  </a>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-400 text-lg mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-lg mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="block text-gray-400 text-lg mb-2"
                    >
                      Project details
                    </label>
                    <textarea
                      id="project"
                      rows="5"
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-24 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Made By Many</h3>
              <p className="text-gray-400 text-lg">
                An independent, award-winning, strategic design & technology
                studio.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <address className="not-italic text-gray-400 text-lg">
                <p>Made By Many</p>
                <p>123 Creative St.</p>
                <p>London, UK</p>
                <p className="mt-3">
                  <a
                    href="mailto:hello@madebymany.com"
                    className="hover:text-white"
                  >
                    hello@madebymany.com
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-16 text-gray-400 text-base">
            <p>&copy; 2025 Made By Many. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdCompanyWebsite;
