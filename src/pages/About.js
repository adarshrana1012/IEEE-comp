import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about" className="about-main">
      <h1 className="about-title">
        About The Conference, Institute & Department
      </h1>

      <div className="about-container">

        {/* CONFERENCE */}
        <div className="about-card">
          <h2>About The Conference</h2>
          <p>
            International Conference on Nexus of Digitalization,
            Intelligence, and Applications (ICNDIA-2026) serves as a
            premier platform for researchers and practitioners to present
            and discuss the transformative impact of digital technologies
            and artificial intelligence across various sectors. Focusing on
            the convergence of these fields, the conference aims to foster
            collaboration and knowledge sharing, addressing both the
            opportunities and challenges of the digital transformation.
            Attendees will engage in insightful discussions, attend
            workshops, and network with leading experts, driving forward
            thinking solutions that harness the power of technology for
            societal advancement.
          </p>
        </div>

        {/* AIT */}
        <div className="about-card">
          <h2>About AIT</h2>
          <p>
            AIT was founded in 1994, as a result of the vision, and
            untiring efforts of Late Gen. B.C. Joshi PVSM, AVSM, ADC for
            the children of all ranks of the Indian Army. The lush green
            campus, its resilience and architectural splendor, and state of
            the art infrastructure, all provide vital ingredients for a
            delectable academic environment for the development of total
            quality engineers. AIT is ranked 139 in NIRF across India.
            AIT runs Undergraduate courses in Comp. Engg., IT, Mech, E&TC
            and Post Graduate course in Machine Design. All courses are
            affiliated to SPPU.
          </p>
        </div>

        {/* DEPARTMENT */}
        <div className="about-card">
          <h2>About The Department</h2>
          <p>
            {/* Empty for now */}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
