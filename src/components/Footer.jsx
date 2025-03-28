import React from "react";
import { FaGithub, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-background to-primary text-text py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Me Section */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold text-text mb-4">About Me</h4>
            <p className="text-lg leading-relaxed text-gray-700">
              I’m Maika Ybiza Simbulan, a **4th-year IT student** specializing
              in **Business Analytics**. Passionate about **full-stack
              development**, problem-solving, and contributing to meaningful
              projects while continuously improving my skills.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold text-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Me", "Skills", "Projects"].map(
                (section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.toLowerCase().replace(" ", "")}`}
                      className="text-lg text-gray-700 hover:text-secondary transition duration-300"
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold text-text mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-6">
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
                { href: "mailto:ybiza2018@gmail.com", icon: <FaEnvelope /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-4xl text-secondary hover:text-text transition-transform duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center border-t border-gray-300 pt-6 text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} **Maika Ybiza**. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
