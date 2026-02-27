import React from "react";
import { motion } from "framer-motion";
import "./papers.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function CallForPapers() {
  const tracks = [
    {
      title: "Track 1",
      items: [
        "Quantum Computing Theory & Algorithms",
    "Quantum Communication & Cryptography",
    "Quantum Networks and Internet"

      ],
    },
    {
      title: "Track 2",
      items: [
     "Quantum Error Correction & Fault Tolerance",
    "Quantum Hardware, Devices, and Architectures",
    "Quantum Machine Learning & AI"

      ],
    },
    {
      title: "Track 3",
      items: [
      "Quantum Simulation and Modeling",
      "Quantum Information Theory",
      "Quantum Entanglement & Teleportation"

      ],
    },
    {
      title: "Track 4",
      items: [
         "Applications of Quantum Technologies in Industry"
      ],
    },
  ];

  const dates = [
    { label: "Abstract Submission Date: ", date: "10 Feb 2027" },
    { label: "Full Paper Submission Date:", date: "20 Feb 2027" },
    { label: "Notification of Acceptance Date", date: "10 May 2027" },
    { label: "Final Paper Submission Date", date: "30 June 2027" },
    // { label: "Conference Dates", date: "18th-19th Sept, 2026" },
  ];

  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Call for Papers</h1>
          <div className="divider" />
          <p>Meet the distinguished team behind the conference</p>
        </motion.div>
      </section>
      <section className="Paper-section">
        <div className="container">
          {/* Tracks section */}
          <div className="cards">
            {tracks.map((track, index) => (
              <div className="box" key={index}>
                <div className="track-box">
                  <h3 className="track-title">{track.title}</h3>
                  <ul className="track-list">
                    {track.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-container">
          <h2 className="timeline-title">Important Dates</h2>
          <ul className="timeline-list">
            {dates.map((d, index) => (
              <li className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <FaRegCalendarAlt />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-date">{d.date}</h3>
                  <p className="timeline-label">{d.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="st">Paper Topic</h1>
        <div className="paper-topics mb">
          {tracks
            .flatMap((track) => track.items)
            .map((topic, idx) => (
              <div className="pap-card" key={idx}>
                <FaRegCalendarAlt className="card-icon" />{" "}
                {/* or FaBook if you want book icon */}
                <p className="card-text">{topic}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default CallForPapers;
