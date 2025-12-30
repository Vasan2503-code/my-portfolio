import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <motion.div
      className="contact" id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p>Looking for an  opportunity to improve my skills and gain knowledge from Real world projects</p>

      <div className="contact-icons">
        <a href="mailto:srinivasandhandapani4@gmail.com">
          <FaEnvelope />
        </a>

        <a href="https://github.com/Vasan2503-code" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/srinivasan2503" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
}

export default ContactMe;
