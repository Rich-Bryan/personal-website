import { FaLocationArrow } from "react-icons/fa";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Start Temple University",
    location: "Philadelphia, PA",
    description:
      "Started Academic Career in Fall 2021",
    icon: <LuGraduationCap />,
    date: "Fall 2021",
  },
  {
    title: "Software Enginner Intern at Temple University",
    location: "Philadelphia, PA",
    description:
      "Designed a Web application for a Research Study for Lottery.",
    icon: <CgWorkAlt />,
    date: "May 2022 - August 2022",
  },

  {
    title: "Teaching Assistant at Temple University",
    location: "Philadelphia, PA",
    description:
      "Enhanced quiz and exam performance of 20+ students by 15% through coding review sessions and provide support to students with office hours.",
    icon: <CgWorkAlt />,
    date: "May 2022 - Present",
  },

  {
    title: "Software Engineer at CVS",
    location: "New York, NY",
    description:
      `Worked in the data engineering team.
      Helped Migrate data from Hadoop to GCP.
      Created a data validation system to check data from on-prem with cloud`,
    icon: <CgWorkAlt />,
    date: "May 2024 - August 2024",
  },
  {
    title: "Software Engineer at xSoTech",
    location: "Philadelphia, PA",
    description:
      "Worked closely with the CEO to create solutions with Google Apps Scripts for 50+ school district around the world.",
    icon: <CgWorkAlt />,
    date: "October 2024 - Present",
  },
  {
    title: "Graduation Temple University",
    location: "Philadelphia, PA",
    description:
      "Anticipated Graduation from Temple University",
    icon: <LuGraduationCap />,
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

export const ProjectsData = [
  {title:"Temple Trading Hub",
    description:"a place for temple students to trade stuff safely", 
    image:"/project_one.png", 
    githubLink:'https://github.com/cis3296s24/tth'},
  {title:"XFire",
    description:"Hackathon winner", 
    image:"/xfire.png", 
    githubLink:'https://github.com/timo1k/renren"'},

  {title:"memer.ai",
    description:"Hackathon winner", 
    image:"/memerai.png", 
    githubLink:'https://devpost.com/software/memer-ai?ref_content=my-projects-tab&ref_feature=my_projects'}
  



]