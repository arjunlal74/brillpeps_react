import React from "react";
import { useEffect, useState, useRef } from "react";
import WeSpecializeIn from "./WeSpecializeIn";

const BrillpepsWebsite = () => {
  //Forms submission start
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Replace with your actual Web3Forms Access Key
    const accessKey = "68576572-c263-491a-aaa5-df217df3cf24";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.project,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Message sent successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          project: "",
        });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };
  //Forms submission end
  const images = [
    {
      src: "/images/SAM_0143.JPG",
      alt: "Branding project for tech company",
    },
    { src: "/images/SAM_0351.JPG", alt: "Web design for e-commerce" },
    { src: "/images/Picture 002.jpg", alt: "Mobile app interface design" },
    { src: "/images/SAM_0287.JPG", alt: "Product packaging design" },
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

  // Create refs for sections we want to scroll to
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  // Add menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
      // Close mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

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

    // New observer for sections with lower threshold for earlier trigger
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
      { threshold: 0.1 } // Lower threshold to trigger animations earlier
    );

    // Observe all sections with animated class
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      elements.forEach((el) => itemObserver.unobserve(el));
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    // Path to the PDF in the public folder
    const pdfPath = "/brochure.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Brochure.pdf"; // Specify the filename for download

    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-8xl mx-auto">
        {/* Hero Section with Integrated Navigation */}
        <section
          className="relative overflow-hidden min-h-screen flex flex-col animated-section"
          id="hero"
          ref={heroRef}
        >
          {/* Navigation integrated within hero */}
          <nav className="px-6 md:px-12 py-6 text-white relative z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  <button
                    onClick={() => scrollToSection(heroRef)}
                    className="relative inline-block overflow-hidden group flex items-center"
                  >
                    <img
                      src="/images/logo-white.png"
                      alt="Logo"
                      className="w-32 h-auto md:w-30"
                    />
                  </button>
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
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-lg relative overflow-hidden group py-2"
                >
                  <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    About
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection(worksRef)}
                  className="text-lg relative overflow-hidden group py-2"
                >
                  <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Our works
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-lg relative overflow-hidden group py-2"
                >
                  <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    Contact
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-4 pt-2">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200 rounded text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(worksRef)}
                  className="text-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200 rounded text-left"
                >
                  Our works
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-200 rounded text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left transition-all duration-1500 ${
                visibleSections["hero"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                Adding <br />
                Creativity
                <br /> Brilliantly
              </h1>
              <p className="text-xl md:text-3xl font-light max-w-2xl mx-auto md:mx-0 mb-12">
                Transforming brand visions into impactful visual experiences
                that resonate and deliver results
              </p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button
                  onClick={handleDownload}
                  className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 text-lg font-medium rounded-lg hover:bg-blue-500 hover:text-black transition-colors duration-300"
                >
                  Brochure
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="px-8 py-4 bg-blue-500 text-black text-lg font-medium rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500 hover:border-2 transition-colors duration-300"
                >
                  Get in touch
                </button>
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
          ref={aboutRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1500 ${
                visibleSections["about"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                <h2 className="md:text-5xl font-bold mb-8">
                  About Us
                  <span className="block h-1 w-16 bg-blue-500 mt-4"></span>
                </h2>
                <p className="text-lg font-light mb-8">
                  BRILLPEPS LLP is a full-service digital solutions company
                  combining technical expertise with creative excellence. From
                  traditional media campaigns including TV and radio commercials
                  to comprehensive digital marketing solutions, we deliver
                  integrated advertising strategies that connect with customers
                  across all touchpoints. Our expertise extends to in-store and
                  outdoor communication, as well as point-of-purchase and
                  point-of-sale solutions that drive conversion.
                </p>
                <p className="text-lg text-white-700 mb-8">
                  At BRILLPEPS, customer satisfaction is our ultimate goal. We
                  approach every project with professionalism and dedication,
                  ensuring that our solutions not only meet but exceed your
                  expectations.
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
                      100%
                    </span>
                    <span className="text-lg">Client satisfaction</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4 text-blue-500">
                      Growing
                    </span>
                    <span className="text-lg"> portfolio of success</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-4 text-blue-500">
                      Diverse
                    </span>
                    <span className="text-lg">client partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Specialize In Section */}
        <WeSpecializeIn />

        {/* Slogan Section */}
        <section
          className="py-24 bg-black text-white animated-section"
          id="slogan"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-5 gap-12 transition-all duration-1500 ${
                visibleSections["slogan"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:col-span-3 text-left sm:text-center">
                <h2 className="text-center text-5xl font-bold mb-6 leading-tight">
                  Creating Memorable Brand Experiences Since Our Inception
                  <span className="block h-2 w-32 bg-blue-500 mt-6 mx-auto ml-0 ml-auto"></span>
                </h2>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <p className="text-xl mb-8">
                  We transform brand visions into impactful realities through
                  innovative design and strategic implementation across digital
                  and physical spaces.
                </p>
                <button
                  onClick={() => scrollToSection(worksRef)}
                  className="inline-block border-2 border-blue-500 px-8 py-4 text-lg font-medium hover:bg-blue-500 hover:text-black transition-colors duration-300"
                >
                  View our work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 text-center animated-section" id="experience">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`transition-all duration-1500 ${
                visibleSections["experience"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-center text-5xl font-bold mb-10">
                Crafting Breakthrough Brand Solutions For Diverse Clients
                <span className="block h-2 w-48 bg-blue-500 mt-4 mx-auto"></span>
              </h2>
              <button
                onClick={() => scrollToSection(worksRef)}
                className="underline text-2xl hover:text-blue-500"
              >
                Have a look at some of our case studies
              </button>
            </div>
          </div>
        </section>

        {/* Work Portfolio Section - Keeping existing animation */}
        <section
          id="case-studies"
          className="py-24 px-6 mx-auto"
          ref={containerRef}
        >
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
        <section
          id="services"
          className="py-24 text-white animated-section"
          ref={worksRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`transition-all duration-1500 ${
                visibleSections["services"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-5xl font-bold">Our works</h2>
              </div>

              <div className="grid grid-cols-1 gap-24">
                {/* Work Item 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/abudhabi-film.jpg"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">Events</p>
                    <h3 className="text-3xl font-bold mb-4">
                      From concept to execution, we bring your event brand to
                      life through custom signage, display panels, and branded
                      environments.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We handle everything from design concept to on-site
                      installation, ensuring your event branding creates a
                      strong visual presence that leaves a lasting impression on
                      attendees.
                    </p>
                  </div>
                </div>

                {/* Work Item 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/instore-branding.JPG"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">
                      In Store Branding
                    </p>
                    <h3 className="text-3xl font-bold mb-4">
                      Eye-catching promotional displays and signage that command
                      attention in retail environments.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We design and produce impactful branded materials that
                      effectively communicate your message to customers at the
                      point of purchase.
                    </p>
                  </div>
                </div>

                {/* Work Item 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/pops.jpg"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">Pop & Posm</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Strategic point-of-purchase displays and point-of-sale
                      materials that drive consumer action.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We create attention-grabbing retail solutions that enhance
                      brand visibility and influence purchasing decisions right
                      where it matters most.
                    </p>
                  </div>
                </div>

                {/* Work Item 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/exhibitions.jpg"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">Exhibitions</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Custom exhibition stands and displays that make your brand
                      stand out at trade shows and industry events.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We design and deliver immersive exhibition experiences
                      that attract visitors and effectively communicate your
                      brand message in competitive environments.
                    </p>
                  </div>
                </div>

                {/* Work Item 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/red.jpg"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">Red Carpet</p>
                    <h3 className="text-3xl font-bold mb-4">
                      Elegant and sophisticated red carpet event branding that
                      creates memorable celebrity and VIP experiences.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We design and produce premium event backdrops,
                      step-and-repeat banners, and entrance displays that
                      provide the perfect setting for high-profile appearances
                      and photo opportunities.
                    </p>
                  </div>
                </div>

                {/* Work Item 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-80 relative">
                    <img
                      src="/images/work/brand-activations.jpg"
                      alt="CAVA food"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blue-500 text-lg mb-2">
                      Brand Activations
                    </p>
                    <h3 className="text-3xl font-bold mb-4">
                      Immersive brand experiences that create meaningful
                      connections between consumers and your brand.
                    </h3>
                    <p className="text-lg text-gray-300">
                      We conceptualize and execute engaging activation campaigns
                      that bring your brand to life through interactive
                      installations, sampling events, and memorable consumer
                      touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact"
          className="py-24 bg-black animated-section"
          ref={contactRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`transition-all duration-1500 ${
                visibleSections["contact"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-6xl font-bold mb-12 text-center">
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
                      href="mailto:sales@brillpeps.com"
                      className="text-2xl text-blue-500 hover:underline transition-colors"
                    >
                      sales@brillpeps.com
                    </a>

                    <p className="text-gray-400 text-xl mt-8 mb-2">Call us:</p>

                    {/* UAE Number */}
                    <a
                      href="tel:+971501234567"
                      className="text-2xl text-blue-500 hover:underline transition-colors block mb-4"
                    >
                      +971 56 142 9353 (UAE)
                    </a>

                    {/* India Numbers */}
                    <a
                      href="tel:+919188015979"
                      className="text-2xl text-blue-500 hover:underline transition-colors block mb-4"
                    >
                      +91 91 888 48033 (India)
                    </a>

                    <a
                      href="tel:+918765432109"
                      className="text-2xl text-blue-500 hover:underline transition-colors block"
                    >
                      +91 87 654 32109 (India)
                    </a>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>

                    {submitMessage && (
                      <div
                        className={`text-lg ${
                          submitMessage.includes("successfully")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 px-8 py-4 bg-blue-500 border-2 border-blue-500 text-black text-lg font-medium rounded-lg hover:bg-transparent hover:text-blue-500 transition-colors duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-gray-900 text-gray-400 py-12 md:px-44 border-t border-gray-800 animated-section"
          id="footer"
        >
          <div className="container mx-auto px-6 lg:px-10">
            <div
              className={`transition-all duration-1000 ${
                visibleSections["footer"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Brand Section */}
                <div>
                  <a
                    href="#"
                    className="relative inline-block overflow-hidden group flex items-center"
                  >
                    <img
                      src="/images/logo-white.png"
                      alt="Logo"
                      className="w-24 h-auto"
                    />
                  </a>
                  <p className="text-base mt-2">
                    Adding Creativity Brilliantly
                  </p>
                </div>

                {/* Quick Links */}
                <div className="flex justify-end">
                  <ul className="flex flex-wrap gap-6 text-base">
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500 transition">
                        Our Works
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Socials & Copyright */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row md:justify-between items-center text-sm">
                {/* <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-500 transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    Instagram
                  </a>
                </div> */}
                <p className="mt-4 md:mt-0">
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
