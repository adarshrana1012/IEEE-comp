import React from 'react';
import './papers.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

function CallForPapers() {
  const tracks = [
    {
      title: "Track 1: Digitalization",
      items: [
        "Digital Transformation and Innovation",
        "Human-Computer Interaction and Digital User Experience",
        "Digital Ethics, Security, and Governance"
      ]
    },
    {
      title: "Track 2: Intelligence",
      items: [
        "Artificial Intelligence and Machine Learning",
        "Data Science, Analytics, and Big Data",
        "Deep Learning in Computer Vision and Natural Language Processing"
      ]
    },
    {
      title: "Track 3: Applications",
      items: [
        "Internet of Things (IoT) and Smart Technologies",
        "Applications of Digitalization and Intelligence in Key Sectors",
        "Future Trends and Innovations in Defense Sector"
      ]
    },
    {
      title: "Track 4: Consumer Tech",
      items: [
        "AI & Machine Learning in Consumer Applications",
        "AR, VR, and XR in Consumer Technologies"
      ]
    }
  ];

  const dates = [
    { label: "Last Date for Receiving Full Paper", date: "15th April, 2026" },
    { label: "Intimation of Acceptance", date: "30th June, 2026" },
    { label: "Last Date for Camera Ready Copy", date: "15th July, 2026" },
    { label: "Last Date of Registration", date: "18th-19th Sept, 2026" },
    { label: "Conference Dates", date: "18th-19th Sept, 2026" },
  ];

  return (
    <>
    <div className='container'>
      {/* Tracks section */}
      <div className='cards'>
        {tracks.map((track, index) => (
          <div className='box' key={index}>
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
    <h1 className='st'>Paper Topic</h1>
    <div className='paper-topics'>
     
  {tracks.flatMap(track => track.items).map((topic, idx) => (
    <div className='pap-card' key={idx}>
      <FaRegCalendarAlt className="card-icon" /> {/* or FaBook if you want book icon */}
      <p className="card-text">{topic}</p>
    </div>
  ))}
</div>
    </> 
  );
}

export default CallForPapers;
