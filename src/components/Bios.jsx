import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Bios = ({ isOpen, onClose }) => {
  // Close when clicking outside

  if (!isOpen) return null; // Don't render if closed

  
  
  return (

    <div className="backdrop fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20" onClick={onClose}>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: "-100" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bios-container bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-3xl"
       
      >
        <h2>Melissa Bosworth</h2>
        <div className = 'biopic melissapic'>
            <div className="socmed"  ></div>
        </div>
        <p>A self-described thought disrupter and warrior for nonprofits, Melissa is the Principal of Vertical Strategies, Executive Director of the Eastern Plains Healthcare Consortium, and Assistant Professor at Regis University. She is committed to creating nonprofit sustainability through navigating uncertainty, and inspiring students who have a similar passion. She has spent the last 20 years working in human service and healthcare related nonprofits, and is most currently passionate about working with organizations across the United States.</p>
        <p>As a previous pianist and music therapist turned administrator and teacher, Melissa brings a unique perspective when it comes to creating solutions for social justice. Influenced by her son, students, and nonprofit professionals, she aspires to never stop working for a more just world.</p>
        <p>For more information, visit her CV <a href  ='https://www.slideshare.net/slideshow/2018-cv-106659124/106659124'>here</a>.</p>


        <h2>Megan Galaviz</h2>
        <div className = 'biopic meganpic'>
            <div className="socmed"  ></div>
        </div>
        <p>A masterful problem solver with over ten years of experience working in Healthcare Operations/Administration and Finance. Megan brings experience in full scope practice administration at both clinic and hospital levels, expertise in EHR and practice management systems, policy development and implementation strategy, and has a proven history of effective implementation of procedural and systematic change at both local and national levels. Her diverse background has created a unique understanding of global systems and the ability to recognize areas of opportunity within new or existing systems and effectively implementing opportunistic change with positive outcomes. </p>

        <p>Megan is committed to strengthening systems and empowering non-profits to break barriers and execute high level services through sustainable means and is grateful for the opportunity to work with such diverse entities striving toward the development of just and equitable programs.</p>

      </motion.div>
    </div>
    

  );
};

export default Bios;
