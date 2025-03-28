import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link, languages }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Project Image with Overlay */}
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary p-3 rounded-full hover:bg-secondary transition"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text">{title}</h3>
        <p className="mt-3 text-text text-sm text-justify flex-grow">
          {description}
        </p>

        {/* Programming Languages */}
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm"
            >
              <img
                src={lang.logo}
                alt={lang.name}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">
                {lang.name}
              </span>
            </div>
          ))}
        </div>

        {/* View Project Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-6 text-primary hover:text-secondary transition-colors"
        >
          <span className="text-lg font-medium">View Project</span>
          <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
