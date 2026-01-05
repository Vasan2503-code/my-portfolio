import React from 'react'
import { motion } from 'framer-motion'

function Projects(){
  return (
    <>
    <div className="Projects-head" id = "projects">
        <h1>Hands on <span>Projects</span></h1>

        <div className="Project-cards">
             <a
          href="https://github.com/Vasan2503-code/Smart-Connect---A-volunteer-matching-site-for-NGO-s-and-Community-project"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <h2>Volunteer Matching Site</h2>
                <p>Volunteer Matching System is a web-based application designed to connect volunteers with organizations based on skills,
                     availability, and interests. The system allows users to register, apply for opportunities, and track their participation, 
                     while admins can manage events and volunteer requests efficiently.</p>
            </motion.div>
            </a>

             <a
          href="https://github.com/Vasan2503-code/CABITAL---A-Vehicle-Rental-System"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <h2>Vehicle Rental System</h2>
                <p>Vehicle Rental System is a full-stack web application 
                    developed to manage vehicle bookings, availability, 
                    and rental transactions efficiently. Users can browse vehicles, 
                    select rental duration, calculate price, and complete bookings, 
                    while admins manage vehicles and availability.</p>
            </motion.div>

        </a>

         <a
          href="https://github.com/Vasan2503-code/Hotel-Room-Booking-System---Console-Based.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <h2>Console Project - Hotel Room Booking System</h2>
                <p>A console-based application developed using Java to manage hotel room 
                    bookings efficiently. It supports core CRUD operations such as adding
                     rooms, booking, updating customer details, and cancellation. The system
                      ensures proper room availability tracking and follows a
                     menu-driven approach to simulate real-time hotel operations..</p>
            </motion.div>
        </a>    
        </div>
    </div>
    </>
  )
}

export default Projects
