import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="about" id = "about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate = {{x : 0 ,opacity :1}}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <p>
        I’m a passionate <span><b>Full Stack Developer</b></span> who enjoys building
        responsive and user-friendly web applications. I mainly work with<span><b>
        React, Java, and MySQL with SpringBoot,</b></span> and I love turning ideas into real-world
        projects.
      </p>

      <p>
        Currently, I’m improving my development skills and learning DevOps to
        understand deployment and automation. My goal is to become a skilled
        backend developer and work on impactful software products.
      </p>
    </motion.div>
  );
}


export default AboutMe;