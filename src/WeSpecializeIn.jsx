import React, { useState, useEffect } from "react";

const WeSpecializeIn = () => {
  const specializations = [
    {
      title: "Branding & Identity",
      image:
        "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg",
      description:
        "Creating distinctive visual identities that communicate your brand's unique story and values.",
    },
    {
      title: "Websites & Digital Platforms",
      image:
        "https://www.techquintal.com/wp-content/uploads/2021/05/Information-Technology.jpg",
      description:
        "Building responsive, user-focused websites and platforms that drive engagement and conversions.",
    },
    {
      title: "Digital Product Design",
      image:
        "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=170667a&w=is&k=20&c=y3DUF8i9zdLZ26-zqWDI8DeTgA0ge2bvizvPzfg1tbY=",
      description:
        "Crafting intuitive digital products that solve real problems and delight users.",
    },
    {
      title: "eCommerce Experiences",
      image:
        "https://www.techquintal.com/wp-content/uploads/2021/05/Information-Technology.jpg",
      description:
        "Designing seamless shopping experiences that boost sales and customer satisfaction.",
    },
    // {
    //   title: "VR & AR Environments",
    //   image:
    //     "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg",
    //   description:
    //     "Creating immersive virtual and augmented reality experiences that push technological boundaries.",
    // },
    // {
    //   title: "Performance Marketing",
    //   image:
    //     "https://www.techquintal.com/wp-content/uploads/2021/05/Information-Technology.jpg",
    //   description:
    //     "Developing data-driven marketing strategies that deliver measurable results and ROI.",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="specializations"
      className="py-16 bg-black text-white animated-section overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Specialize In
            <span className="block h-1 w-16 bg-blue-500 mt-4 mx-auto md:mx-0"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
            Our expertise spans across multiple disciplines, allowing us to
            deliver comprehensive solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - Specializations list */}
          <div className="flex flex-col space-y-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isDesktop && activeIndex === index
                    ? "pl-4 border-l-4 border-blue-500"
                    : "pl-0"
                }`}
                onMouseEnter={() => isDesktop && setActiveIndex(index)}
              >
                <h3 className="text-2xl md:text-3xl font-light mb-2 flex items-center">
                  {spec.title}
                  {isDesktop && (
                    <span
                      className={`ml-2 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ${
                        activeIndex === index ? "opacity-100 translate-x-2" : ""
                      }`}
                    >
                      →
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 max-w-md">{spec.description}</p>
              </div>
            ))}
          </div>

          {/* Right column - Images (Hidden on mobile) */}
          {isDesktop && (
            <div className="relative h-96 overflow-hidden rounded-lg">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-700 transform scale-100 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeSpecializeIn;
