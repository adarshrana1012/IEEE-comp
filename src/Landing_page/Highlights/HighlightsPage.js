import React from "react";
import "./Highlights.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Highlights() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Key HighLights</h1>
          <div className="divider" />
        </motion.div>
      </section>
      <section className="highlights-section" id="highlights">
        <div className="highlights-grid">
          <div className="highlight-card">
            <FaStar className="star" />
            <p>
              Technical sessions on various topics related to computer science
              and informatics
            </p>
          </div>

          <div className="highlight-card">
            <FaStar className="star" />
            <p>Keynote addresses by experts</p>
          </div>

          <div className="highlight-card">
            <FaStar className="star" />
            <p>All accepted and presented papers will be submitted to IEEE for possible inclusion in the IEEE Xplore Digital Library</p>
          </div>

          <div className="highlight-card">
            <FaStar className="star" />
            <p>Publishing partner assists IEEE publication standards</p>
          </div>

          <div className="highlight-card full">
            <FaStar className="star" />
            <p>Pre-conference tutorials</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Highlights;
