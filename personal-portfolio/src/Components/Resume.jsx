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

      <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: "12px 24px",
      background: "#fb2576",
      color: "#fff",
      borderRadius: "30px",
      textDecoration: "none",
      display: "inline-block"
    }}
  >
  </a>
        <FaDownload /> Download Resume
    </motion.div>
  );
}

export default Resume;
