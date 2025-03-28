import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";
import Resume from "../assets/Simbulan_MaikaYbiza.pdf";

const Home = () => {
  const textArray = [
    "Ciao, sono Maika!",
    "Bonjour, je suis Maika!",
    "Hola, soy Maika!",
    "Hello there, I'm Maika!",
    "Kumusta, ako si Maika!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 150;
  const deletingSpeed = 80;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < textArray[index].length) {
          setCurrentText((prev) => prev + textArray[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, textArray]);

  return (
    <section
      id="home"
      className="bg-background min-h-screen flex items-center py-12"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between space-y-12 md:space-y-0">
        {/* Left Section: Text Content */}
        <motion.div
          className="w-full md:w-6/12 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg md:text-2xl font-medium text-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {currentText}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-text mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Backend Developer & Business Analyst
          </motion.h1>
          <motion.h3
            className="text-lg md:text-xl font-semibold text-secondary mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Turning data into decisions and code into solutions
          </motion.h3>

          {/* Download Resume Button */}
          <motion.a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-6 py-3 text-lg text-white bg-primary hover:bg-secondary rounded-md transition duration-300 ease-in-out shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaFileDownload className="mr-2" />
            Download Resume
          </motion.a>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-8 space-x-6">
            {[
              {
                href: "https://github.com/mikeyswifedjk",
                icon: <FaGithub />,
              },
              {
                href: "https://www.facebook.com/maika.ordonez.3",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.instagram.com/mikeyswifedjk",
                icon: <FaInstagram />,
              },
              {
                href: "mailto:ybiza2018@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-3xl text-text hover:text-secondary transition duration-300 ease-in-out"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Profile Image with Glow Effect */}
        <motion.div
          className="w-full md:w-5/12 pb-6 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.img
              src={Profile}
              alt="Profile"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full shadow-xl border-4 border-accent object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary opacity-50 animate-pulse"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
