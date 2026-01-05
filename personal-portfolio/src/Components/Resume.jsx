import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <motion.div
      className="resume"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Resume</h2>
      <p>Download my resume to know more about my skills and experience.</p>

      <a href="/resume.pdf"  target="_blank" rel="noopener noreferrer" className="resume-btn">
        <FaDownload /> Download Resume
      </a>
    </motion.div>
  );
}

export default Resume;
