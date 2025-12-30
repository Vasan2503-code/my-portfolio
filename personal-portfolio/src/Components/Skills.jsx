import { motion } from 'framer-motion';
import {FaJava, FaLeaf , FaHtml5, FaCss3,FaJs,FaDatabase,FaReact} from 'react-icons/fa';
import { FaFileWord } from "react-icons/fa";


function Skills(){
  return (
    <>
        <div className="line" id = "skills"></div>
        <h1 id= "heading" ><span>Skills </span>I am Proficient</h1>
      <div className="SkillsMain">
        <motion.div
            className = "Skills-Ryt"
            initial = {{opacity : 0 , x : -100}}
            whileInView = {{opacity:1 , x : 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{once : true}}
            >
            <FaJava color='orange' size={95} style={{ margin: '0 10px' }} className='icon'/>
            <FaLeaf size={95} color="green" className='icon'/>
            <FaJs color='#fbd722' size={95} style={{ margin: '0 10px' }} className='icon'/>
            <FaReact color='#08d6f7' size={95} style={{ margin: '0 10px' }} className='icon'/>

        </motion.div>

        <motion.div 
            className = "Skills-Lft"
            initial = {{opacity : 0, x :100}}
            whileInView = {{opacity:1 , x : 0}}
            animate = {{x : 0,opacity : 1}}
            transition= {{duration : 1, delay : 0.3}}
            viewport={{once : true}}
            >
            <FaHtml5 color='#007bb6' size={95} style={{ margin: '0 10px' }} className='icon'/>
            <FaCss3 color='#066bf0' size={95} style={{ margin: '0 10px' }} className='icon'/>
            <FaFileWord size={92} color="#2B579A" className='icon'/>
            <FaDatabase color='grey' size={95} style={{ margin: '0 10px' }} className='icon'/>
        </motion.div>
    </div>
    </>
  )
}

export default Skills

{/* <motion.div
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate = {{x : 0 ,opacity :1}}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    > */}