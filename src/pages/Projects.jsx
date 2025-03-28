import React from "react";
import ProjectCard from "../components/ProjectCard";
import ReactPic from "../assets/reactjs.webp";
import Fertilisense from "../assets/fertilisense.png";
import Shopbee from "../assets/shopbee.png";
import Shopsavvy from "../assets/shopsavvy.png";
import Solaire from "../assets/solaire.png";
import Jjtm from "../assets/jjtm.png";
import Journal from "../assets/journal.png";

import Android from "../assets/android.png";
import Firebase from "../assets/firebase.png";
import Java from "../assets/java.png";
import Php from "../assets/php.png";
import Jquery from "../assets/jquery.png";
import Mysql from "../assets/mysql.png";
import Python from "../assets/python.png";

const projects = [
  {
    id: 1,
    title: "FertiliSense",
    description:
      "An AI-powered fertility tracking app that predicts fertility windows using data analytics and user logs for enhanced accuracy.",
    image: Fertilisense,
    link: "https://github.com/mikeyswifedjk/FertiliSense",
    languages: [
      { name: "Android Studio", logo: Android },
      { name: "Firebase", logo: Firebase },
      { name: "Java", logo: Java },
      { name: "Python", logo: Python },
    ],
  },
  {
    id: 2,
    title: "ShopBee",
    description:
      "A complete e-commerce platform inspired by Shopee, Amazon, and Lazada, featuring secure checkout, admin control, and real-time tracking.",
    image: Shopbee,
    link: "https://github.com/mikeyswifedjk/ShopBee",
    languages: [
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Mysql },
      { name: "jQuery", logo: Jquery },
    ],
  },
  {
    id: 3,
    title: "Solaire Hotel",
    description:
      "A hotel booking platform inspired by Agoda and Booking.com, offering secure bookings, real-time availability, and an admin portal.",
    image: Solaire,
    link: "https://github.com/mikeyswifedjk/Solaire",
    languages: [
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Mysql },
      { name: "jQuery", logo: Jquery },
    ],
  },
  {
    id: 4,
    title: "ShopSavvy",
    description:
      "An AJAX-powered e-commerce system with dynamic UI elements, real-time updates, and separate seller & admin functionalities.",
    image: Shopsavvy,
    link: "https://github.com/mikeyswifedjk/ShopSavvy",
    languages: [
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Mysql },
      { name: "jQuery", logo: Jquery },
    ],
  },
  {
    id: 5,
    title: "JJTM Machine",
    description:
      "A secure ATM machine system with real-time transaction updates, an admin panel, and advanced security measures.",
    image: Jjtm,
    link: "https://github.com/mikeyswifedjk/ATM-Machine",
    languages: [
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Mysql },
      { name: "jQuery", logo: Jquery },
    ],
  },
  {
    id: 6,
    title: "Journal Archive",
    description:
      "A journal management system with five user roles, allowing for article submission, reviewing, and publishing.",
    image: Journal,
    link: "https://github.com/mikeyswifedjk/AndromedaArchive",
    languages: [
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Mysql },
      { name: "jQuery", logo: Jquery },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-accent"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-text">Projects</h2>
          <p className="text-lg text-gray-700 mt-3">
            A showcase of my best works, covering **e-commerce, AI, finance, and
            data systems.**
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              languages={project.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
