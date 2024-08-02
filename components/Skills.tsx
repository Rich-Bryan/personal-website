"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { skillsData } from "@/lib/data";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  

  return (
    <div>
      <Title title="Skills" />
      <ul className="relative flex flex-wrap justify-center gap-2 text-lg text-gray-800 pb-8">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

    </div>
  )
}

export default Skills