import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


import { motion } from "framer-motion"

function Hero() {
  return (
    <div className="MainHero" id = "hero">

      <motion.div
        className="hero"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once: true}}
      >
        <h3>Hi I am Srinivasan</h3>

        <h1>I am a Java</h1>
        <h1 style={{ color: '#FB2576' }}>Full Stack Developer</h1>

        <div className="Icons">
                    <a href="mailto:srinivasandhandapani4@gmail.com"><FaEnvelope color='#BB001B' size={35} style={{ margin: '0 10px' }}/></a>
                    <a href="https://leetcode.com/u/Vasan_D/"><SiLeetcode size={35} color="#FFA116" /></a>
                    <a href="https://www.linkedin.com/in/srinivasan2503"><FaLinkedin color='#007bb6' size={35} style={{ margin: '0 10px' }}/></a>
                    <a href="https://github.com/Vasan2503-code"><FaGithub color='grey' size={35} style={{ margin: '0 10px' }}/></a>
                </div>
      </motion.div>
      <motion.div
        className="profilePic"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img src="src/assets/pic-remove.png" alt="profile" />
      </motion.div>

    </div>
  )
}

export default Hero
