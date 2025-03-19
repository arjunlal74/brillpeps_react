import React from "react";
import { useEffect, useState, useRef } from "react";

const BrillpepsWebsite = () => {
  const images = [
    {
      src: "/images/SAM_0143.JPG",
      alt: "Branding project for tech company",
    },
    { src: "/images/SAM_0351.JPG", alt: "Web design for e-commerce" },
    { src: "/images/Picture 002.jpg", alt: "Mobile app interface design" },
    { src: "/images/SAM_0351.JPG", alt: "Product packaging design" },
    { src: "/images/Picture 003.jpg", alt: "Brand identity project" },
    { src: "/images/100_1798.jpg", alt: "Digital marketing campaign" },
    { src: "/images/07012009773.jpg", alt: "Website redesign project" },
    { src: "/images/09042009058.jpg", alt: "Social media campaign" },
    { src: "/images/10122008702.jpg", alt: "UI/UX design for web app" },
    { src: "/images/200520131106.jpg", alt: "Print design campaign" },
  ];
  const [visibleItems, setVisibleItems] = useState({});
  const containerRef = useRef(null);
  const randomDelays = useRef(images.map(() => Math.random() * 0.8 + 0.2));

  // Add state for visible sections
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    // Observer for portfolio items (existing functionality)
    const itemObserver = new IntersectionObserver(
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
    elements.forEach((el) => itemObserver.observe(el));

    // New observer for sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all sections with animated class
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      elements.forEach((el) => itemObserver.unobserve(el));
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section with Integrated Navigation */}
        <section
          className="relative overflow-hidden min-h-screen flex flex-col animated-section"
          id="hero"
        >
          {/* Navigation integrated within hero */}
          <nav className="px-6 md:px-12 py-6 text-white relative z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  <a
                    href="#"
                    className="relative inline-block overflow-hidden group flex items-center"
                  >
                    <img
                      src="/images/logo-white.svg"
                      alt="Logo"
                      className="w-32 h-auto md:w-30"
                    />
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
                      <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
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

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left transition-all duration-1000 ${
                visibleSections["hero"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                Adding <br />
                Creativity<br /> Brilliantly
              </h1>
              <p className="text-xl md:text-3xl font-light max-w-2xl mx-auto md:mx-0 mb-12">
                Strategic design & technology for tomorrow's digital experiences
              </p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <a
                  href="#services"
                  className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 text-lg font-medium rounded-lg hover:bg-blue-500 hover:text-black transition-colors duration-300"
                >
                  Our work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-500 text-black text-lg font-medium rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500 hover:border-2 transition-colors duration-300"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced abstract background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large gradient circle */}
            <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-blue-700/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Decorative elements */}
            <div
              className="absolute right-1/4 top-1/4 w-64 h-64 border border-blue-500/30 rounded-full animate-pulse"
              style={{ animationDuration: "6s" }}
            ></div>
            <div
              className="absolute left-1/4 bottom-1/4 w-40 h-40 border border-blue-500/20 rounded-full animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>

            {/* Floating small circles */}
            <div
              className="absolute right-1/3 top-1/3 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute left-1/3 bottom-1/3 w-24 h-24 border border-blue-300/20 rounded-full animate-float"
              style={{ animationDuration: "10s", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute right-1/4 bottom-1/4 w-32 h-32 border-2 border-blue-500/10 rounded-full animate-float"
              style={{ animationDuration: "12s", animationDelay: "2s" }}
            ></div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 bg-black text-white animated-section"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 ${
                visibleSections["about"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                <h2 className="text-7xl font-bold mb-8">
                  About Us
                  <span className="block h-1 w-16 bg-blue-500 mt-4"></span>
                </h2>
                <p className="text-2xl font-light mb-8">
                  Brillpeps is an independent, award-winning, strategic design &
                  technology studio. We partner with Fortune 500 companies,
                  global NGOs & leading start-ups to create groundbreaking
                  digital products & experiences.
                </p>
                <p className="text-lg text-white-700 mb-8">
                  Our multidisciplinary team combines strategic thinking, design
                  excellence, and technical innovation to solve complex
                  challenges and create meaningful digital solutions.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="px-4 py-2 border border-blue-500 text-sm">
                    Design Thinking
                  </span>
                  <span className="px-4 py-2 border border-blue-500 text-sm">
                    Product Strategy
                  </span>
                  <span className="px-4 py-2 border border-blue-500 text-sm">
                    Digital Innovation
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4 text-blue-500">
                      15+
                    </span>
                    <span className="text-lg">Years of digital innovation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4 text-blue-500">
                      100+
                    </span>
                    <span className="text-lg">Clients worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4 text-blue-500">
                      40+
                    </span>
                    <span className="text-lg">Industry awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section
          className="py-24 bg-black text-white animated-section"
          id="slogan"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-5 gap-12 transition-all duration-1000 ${
                visibleSections["slogan"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:col-span-3">
                <h2 className="text-7xl font-bold mb-6 leading-tight">
                  Making new stuff <br />
                  out of the internet <br />
                  since 2007
                  <span className="block h-2 w-32 bg-blue-500 mt-6"></span>
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
                  className="inline-block border-2 border-blue-500 px-8 py-4 text-lg font-medium hover:bg-blue-500 hover:text-black transition-colors duration-300"
                >
                  View our work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 text-center animated-section" id="experience">
          <div className="max-w-5xl mx-auto">
            <div
              className={`transition-all duration-1000 ${
                visibleSections["experience"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-5xl font-bold mb-10">
                Over the past 17 years we've helped more than 120 organisations
                create breakthrough innovation, digital products, services and
                tools.
                <span className="block h-2 w-48 bg-blue-500 mt-4 mx-auto"></span>
              </h2>
              <a
                href="#case-studies"
                className="underline text-2xl hover:text-blue-500"
              >
                Have a look at some of our case studies
              </a>
            </div>
          </div>
        </section>

        {/* Work Portfolio Section - Keeping existing animation */}
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
        <section id="services" className="py-24 text-white animated-section">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`transition-all duration-1000 ${
                visibleSections["services"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-6xl font-bold">Our work</h2>
                <a
                  href="#"
                  className="underline text-xl hover:text-blue-500 transition-colors duration-300"
                >
                  See all work
                </a>
              </div>

              <div className="grid grid-cols-1 gap-24">
                {/* Work Item 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/SAM_0308.JPG"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">CAVA</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Transforming the fast-casual dining experience through
                      digital innovation
                    </h3>
                    <p className="text-lg text-gray-300">
                      We helped CAVA create a seamless digital ordering
                      experience that reflects their commitment to fresh,
                      authentic Mediterranean cuisine while driving significant
                      growth in their customer base.
                    </p>
                  </div>
                </div>

                {/* Work Item 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/SAM_0288.JPG"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">CAVA</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Transforming the fast-casual dining experience through
                      digital innovation
                    </h3>
                    <p className="text-lg text-gray-300">
                      We helped CAVA create a seamless digital ordering
                      experience that reflects their commitment to fresh,
                      authentic Mediterranean cuisine while driving significant
                      growth in their customer base.
                    </p>
                  </div>
                </div>

                {/* Work Item 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/IMG_6817.JPG"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">CAVA</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Transforming the fast-casual dining experience through
                      digital innovation
                    </h3>
                    <p className="text-lg text-gray-300">
                      We helped CAVA create a seamless digital ordering
                      experience that reflects their commitment to fresh,
                      authentic Mediterranean cuisine while driving significant
                      growth in their customer base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-24 bg-black animated-section">
          <div className="max-w-5xl mx-auto">
            <div
              className={`transition-all duration-1000 ${
                visibleSections["contact"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-7xl font-bold mb-12 text-center">
                Let's create
                <br />
                something great
                <br />
                together
                <span className="block h-2 w-32 bg-blue-500 mt-6 mx-auto"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                <div>
                  <p className="text-2xl mb-8">
                    We're always looking for new challenges and exciting
                    projects. Drop us a line and let's start a conversation.
                  </p>

                  <div className="mt-12">
                    <p className="text-gray-400 text-xl mb-2">Email us at:</p>
                    <a
                      href="mailto:hello@brillpeps.com"
                      className="text-2xl text-blue-500 hover:underline transition-colors"
                    >
                      hello@brillpeps.com
                    </a>

                    <p className="text-gray-400 text-xl mt-8 mb-2">Call us:</p>
                    <a
                      href="tel:+44123456789"
                      className="text-2xl text-blue-500 hover:underline transition-colors"
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
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 px-8 py-4 bg-blue-500 border-2 border-blue-500 text-black text-lg font-medium rounded-lg hover:bg-transparent hover:text-blue-500 transition-colors duration-300"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800 animated-section"
          id="footer"
        >
          <div className="container mx-auto px-6 lg:px-16">
            <div
              className={`transition-all duration-1000 ${
                visibleSections["footer"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <span className="text-blue-500 mr-2">
                      {/* Simplified Hex Logo */}
                      <svg viewBox="0 0 50 50" width="30" height="30">
                        <polygon
                          points="25,5 45,17.5 45,32.5 25,45 5,32.5 5,17.5"
                          fill="#0099dd"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    Brillpeps
                  </h3>
                  <p className="text-lg">
                    An independent, award-winning, strategic design & technology
                    studio creating meaningful digital experiences.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Quick Links
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact
                  </h3>
                  <address className="not-italic text-lg">
                    <p>123 Tech Plaza, London, UK</p>
                    <p className="mt-3">
                      <a
                        href="mailto:hello@brillpeps.com"
                        className="hover:text-blue-500 transition"
                      >
                        hello@brillpeps.com
                      </a>
                    </p>
                    <p>+44 123 456 789</p>
                  </address>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="mt-16 border-t border-gray-800 pt-10 flex flex-col md:flex-row md:justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white">
                    Stay Updated
                  </h3>
                  <p className="text-lg">
                    Subscribe to our newsletter for the latest updates.
                  </p>
                </div>
                <form className="flex w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-l-md text-gray-900 w-full md:w-64"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-r-md font-semibold"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Socials & Copyright */}
              <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-center text-lg">
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-blue-500 transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    Dribbble
                  </a>
                </div>
                <p className="mt-6 md:mt-0">
                  &copy; 2025 Brillpeps. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default BrillpepsWebsite;
