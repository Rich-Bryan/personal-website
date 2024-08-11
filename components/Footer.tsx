import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contact" className="mb-10 px-4 text-center text-gray-500 pt-10 flex flex-col justify-center items-center">
      <small className="block text-xs mb-2">
        &copy; 2025 Bryan. All rights reserved.
      </small>
      <div className="flex gap-4">
        <a className="bg-white text-black dark:bg-white/10 dark:text-white/80 gap-2 rounded-full focus:scale-100 hover:scale-105 active:scale-100 transition flex justify-center items-center p-2"
           href="mailto:bryanli082002@gmail.com" target="_blank">
          <MdEmail size="20px" />
        </a>
        <a className="bg-white text-black dark:bg-white/10 dark:text-white/80 gap-2 rounded-full focus:scale-100 hover:scale-105 active:scale-100 transition flex justify-center items-center p-2"
           href="tel:+12676325492" target="_blank">
          <FaPhone  size="20px" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
