import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import Profile from "../assets/profile2.jpg";

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-accent"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image with Layered Effect */}
          <motion.div
            className="w-full md:w-5/12 relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border-2 border-primary">
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-[60vh] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              {/* Layered Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 rounded-2xl">
                <h3 className="text-white text-2xl font-bold">
                  Maika Ybiza Simbulan
                </h3>
              </div>
            </div>
          </motion.div>

          {/* About Me Text Section */}
          <motion.div
            className="w-full md:w-6/12 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-5xl font-extrabold text-text">About Me</h2>
            <motion.p
              className="text-lg text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hi! I'm{" "}
              <span className="font-bold text-text">Maika Ybiza Simbulan</span>,
              a **4th-year IT student** specializing in **Business Analytics**
              at **Bulacan State University**. Passionate about **data-driven
              solutions, problem-solving, and innovative web development**, I
              thrive on creating digital experiences that matter.
            </motion.p>

            {/* Professional Skills Section */}
            <motion.div
              className="p-6 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg border-l-4 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-text mb-3 flex items-center">
                <FaBriefcase className="mr-2 text-secondary" />
                Professional Skills
              </h3>
              <motion.ul
                className="list-none pl-4 space-y-2 text-secondary text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <li>✨ Full-Stack Development</li>
                <li>📊 Business Analytics & Data Interpretation</li>
                <li>🎨 UI/UX Design & Prototyping</li>
                <li>📅 Strategic Planning & Leadership</li>
                <li>🧠 Problem Solving & Critical Thinking</li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
