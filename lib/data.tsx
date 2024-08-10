import { FaLocationArrow } from "react-icons/fa";
import React from "react";

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <FaLocationArrow />,
    date: "2021 - present",
  },

  {
    title: "Teaching Assistant",
    location: "Philadelphia, PA",
    description:
      "Enhancing quiz and exam performance of 20+ students by 15% through coding review sessions and provide support to students with office hours.",
    icon: <FaLocationArrow />,
    date: "May 2022 - August 2022",
  },

  {
    title: "Software Engineer at CVS",
    location: "New York, NY",
    description:
      "Worked in the data engineering team, Migrate Data from Hadoop to GCP.",
    icon: <FaLocationArrow />,
    date: "May 2024 - August 2024",
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
  "C/C++",
] as const;

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
