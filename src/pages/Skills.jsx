import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Javascript from "../assets/js.png";
import Html from "../assets/html.webp";
import Css from "../assets/css.webp";
import ReactJS from "../assets/reactjs.webp";
import MySql from "../assets/mysql.png";
import Php from "../assets/php.png";
import Firebase from "../assets/firebase.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import Python from "../assets/python.png";
import Figma from "../assets/figma.webp";
import Postman from "../assets/postman.svg";
import Cplus from "../assets/cplus.png";
import Java from "../assets/java.png";
import Intelij from "../assets/IntelliJ.png";
import Powerbi from "../assets/powerbi.png";
import Jquery from "../assets/jquery.png";
import Rl from "../assets/r.png";
import Notion from "../assets/notion.png";
import Ibm from "../assets/ibm.webp";
import Vscode from "../assets/vscode.png";
import Android from "../assets/android.png";

const skillsData = [
  { src: Html, label: "HTML" },
  { src: Css, label: "CSS" },
  { src: Tailwind, label: "Tailwind CSS" },
  { src: Javascript, label: "JavaScript" },
  { src: ReactJS, label: "React" },
  { src: MySql, label: "MySQL" },
  { src: Php, label: "PHP" },
  { src: Firebase, label: "Firebase" },
  { src: Java, label: "Java" },
  { src: Python, label: "Python" },
  { src: Git, label: "Git" },
  { src: Cplus, label: "C++" },
  { src: Postman, label: "Postman" },
  { src: Figma, label: "Figma" },
  { src: Intelij, label: "IntelliJ" },
  { src: Powerbi, label: "Power BI" },
  { src: Jquery, label: "jQuery" },
  { src: Rl, label: "R" },
  { src: Notion, label: "Notion" },
  { src: Ibm, label: "IBM SPSS" },
  { src: Vscode, label: "VS Code" },
  { src: Android, label: "Android Studio" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="bg-background py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-text text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              {/* Icon */}
              <motion.img
                src={skill.src}
                alt={skill.label}
                className="w-20 h-20 object-contain transition-transform hover:scale-110"
              />

              {/* Label */}
              <motion.p className="text-lg font-semibold text-text mt-4 transition-opacity duration-300">
                {skill.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
