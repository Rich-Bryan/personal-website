import { FaLocationArrow } from "react-icons/fa";
import React from "react";

export const experiencesData = [
  {
    title: "Start Temple University",
    location: "Philadelphia, PA",
    description:
      "Started Academic Career in Fall 2021",
    icon: <FaLocationArrow />,
    date: "Fall 2021",
  },
  {
    title: "Software Enginner Intern at Temple University",
    location: "Philadelphia, PA",
    description:
      "Designed a Web application for a Research Study for Lottery.",
    icon: <FaLocationArrow />,
    date: "May 2022 - August 2022",
  },

  {
    title: "Teaching Assistant at Temple University",
    location: "Philadelphia, PA",
    description:
      "Enhanced quiz and exam performance of 20+ students by 15% through coding review sessions and provide support to students with office hours.",
    icon: <FaLocationArrow />,
    date: "May 2022 - Present",
  },

  {
    title: "Software Engineer at CVS",
    location: "New York, NY",
    description:
      "Worked in the data engineering team, Migrate Data from Hadoop to GCP.",
    icon: <FaLocationArrow />,
    date: "May 2024 - August 2024",
  },
  {
    title: "Graduation Temple University",
    location: "Philadelphia, PA",
    description:
      "Anticipated Graduation from Temple University",
    icon: <FaLocationArrow />,
    date: "Spring 2025",
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
