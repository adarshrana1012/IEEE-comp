import { motion } from "framer-motion";
import { Users, Award, Mail } from "lucide-react";
import "./Committee.css";

const patronCommittee = [
  { name: "Lt Gen A. K. Singh", position: "Chief Patron", affiliation: "Commandant, AIT" },
  { name: "Brig R. K. Sharma", position: "Patron", affiliation: "Deputy Commandant, AIT" },
];

const organizingCommittee = [
  { name: "Dr. Bhawesh joshi", position: "General Chair", affiliation: "AIT, Pune", email: "amit.verma@ait.ac.in" },
  { name: "Dr. Bhawesh joshi", position: "Program Chair", affiliation: "AIT, Pune", email: "neha.gupta@ait.ac.in" },
  { name: "Dr. Bhawesh joshi", position: "Publication Chair", affiliation: "AIT, Pune", email: "suresh.patel@ait.ac.in" },
  { name: "Dr. Bhawesh joshi", position: "Registration Chair", affiliation: "AIT, Pune", email: "priya.d@ait.ac.in" },
  { name: "Dr. Bhawesh joshi", position: "Finance Chair", affiliation: "AIT, Pune", email: "rahul.joshi@ait.ac.in" },
  { name: "Dr. Bhawesh joshi", position: "Publicity Chair", affiliation: "AIT, Pune", email: "anjali.k@ait.ac.in" },
];

const technicalCommittee = [
  { name: "Dr. Rajesh Kumar", affiliation: "IIT Bombay, India" },
  { name: "Prof. Sarah Thompson", affiliation: "MIT, USA" },
  { name: "Dr. Michael Chen", affiliation: "Stanford University, USA" },
  { name: "Prof. Priya Sharma", affiliation: "IIT Delhi, India" },
];

const advisoryBoard = [
  { name: "Dr. V. K. Saraswat", affiliation: "NITI Aayog, India" },
  { name: "Prof. Andrew Ng", affiliation: "Stanford University, USA" },
  { name: "Dr. Tessy Thomas", affiliation: "DRDO, India" },
  { name: "Prof. Fei-Fei Li", affiliation: "Stanford University, USA" },
];

export default function Committee() {
  return (
    <div className="committee-page">

      {/* HEADER */}
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Organizing Committee</h1>
          <div className="divider" />
          <p>Meet the distinguished team behind the conference</p>
        </motion.div>
      </section>

      {/* PATRON COMMITTEE */}
      <section className="section white">
        <SectionTitle icon={<Award />} title="Patron Committee" />
        <div className="grid two">
          {patronCommittee.map((m, i) => (
            <motion.div
              key={i}
              className="patron-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Award />
              <h3>{m.name}</h3>
              <p className="highlight">{m.position}</p>
              <p>{m.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ORGANIZING COMMITTEE */}
      <section className="section gray">
        <SectionTitle icon={<Users />} title="Organizing Committee" />
        <div className="grid three">
          {organizingCommittee.map((m, i) => (
            <motion.div
              key={i}
              className="member-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users />
              <h3>{m.name}</h3>
              <p className="highlight">{m.position}</p>
              <p>{m.affiliation}</p>
              <a href={`mailto:${m.email}`} className="email">
                <Mail size={16} /> {m.email}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADVISORY BOARD */}
      <section className="section white">
        <SectionTitle title="Advisory Board" />
        <div className="grid four">
          {advisoryBoard.map((m, i) => (
            <motion.div
              key={i}
              className="simple-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{m.name}</h3>
              <p>{m.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNICAL COMMITTEE */}
      <section className="section gray">
        <SectionTitle title="Technical Program Committee" />
        <div className="grid four">
          {technicalCommittee.map((m, i) => (
            <motion.div
              key={i}
              className="simple-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h4>{m.name}</h4>
              <p>{m.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

/* Reusable title */
function SectionTitle({ title, icon }) {
  return (
    <div className="section-title">
      {icon && <div className="icon-circle">{icon}</div>}
      <h2>{title}</h2>
      <div className="divider" />
    </div>
  );
}
