import { FaLocationArrow } from "react-icons/fa";
import React from "react";

export const experiencesData = [
    {
      title: "Software Engineer at CVS",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: <FaLocationArrow />,
      date: "May - August 2024",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: <FaLocationArrow />,
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: <FaLocationArrow />,
      date: "2021 - present",
    },
  ] as const;



export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Python",
    "AWS",
    "GCP",
    "AirFlow",
    "Java",
    "C/C++"
  ] as const;


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];