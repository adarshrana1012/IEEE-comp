import { motion } from "framer-motion";
import { Check, Users, Building, Globe, CreditCard } from "lucide-react";
import "./Registration.css";

const registrationCategories = [
  {
    icon: Users,
    title: "IEEE Member",
    price: "₹8,000",
    usdPrice: "$150",
    features: [
      "Conference access",
      "IEEE proceedings",
      "Conference kit",
      "Lunch & refreshments",
      "Certificate of participation",
    ],
    highlight: false,
  },
  {
    icon: Building,
    title: "Non-IEEE Member",
    price: "₹10,000",
    usdPrice: "$180",
    features: [
      "Conference access",
      "IEEE proceedings",
      "Conference kit",
      "Lunch & refreshments",
      "Certificate of participation",
    ],
    highlight: true,
  },
  {
    icon: Users,
    title: "Student (IEEE)",
    price: "₹5,000",
    usdPrice: "$90",
    features: [
      "Conference access",
      "IEEE proceedings",
      "Conference kit",
      "Lunch & refreshments",
      "Certificate of participation",
    ],
    highlight: false,
  },
  {
    icon: Globe,
    title: "Foreign Delegate",
    price: "$250",
    usdPrice: "",
    features: [
      "Conference access",
      "IEEE proceedings",
      "Conference kit",
      "Lunch & refreshments",
      "Certificate of participation",
      "City tour (optional)",
    ],
    highlight: false,
  },
];

const paymentMethods = [
  {
    title: "Online Payment",
    description: "Pay securely using credit/debit card or UPI",
    icon: CreditCard,
  },
  {
    title: "Bank Transfer",
    description: "Direct bank transfer to conference account",
    icon: Building,
  },
  {
    title: "Demand Draft",
    description: "DD in favor of 'AIT IEEE Conference'",
    icon: Users,
  },
];

export default function Registration() {
  return (
    <div className="registration-page">
      {/* Header */}
      <section className="registration-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Registration</h1>
          <div className="divider" />
          <p>Secure your spot at the premier international conference</p>
        </motion.div>
      </section>

      {/* Notice */}
      <section className="registration-notice">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🎉 Early Bird Registration: Save 20% if you register before June 30, 2026
        </motion.p>
      </section>

      {/* Fees */}
      <section className="registration-fees">
        <div className="section-header">
          <h2>Registration Fees</h2>
          <div className="divider" />
          <p>Choose the category that applies to you</p>
        </div>

        <div className="fee-grid">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`fee-card ${category.highlight ? "highlight" : ""}`}
            >
              {category.highlight && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="fee-icon">
                <category.icon />
              </div>

              <h3>{category.title}</h3>

              <div className="price">
                <span>{category.price}</span>
                {category.usdPrice && <small>{category.usdPrice}</small>}
              </div>

              <ul>
                {category.features.map((f, i) => (
                  <li key={i}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="primary-btn">Register Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      {/* <section className="payment-methods">
        <div className="section-header">
          <h2>Payment Methods</h2>
          <div className="divider" />
        </div>

        <div className="payment-grid">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="payment-card"
            >
              <div className="payment-icon">
                <method.icon />
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="registration-cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-box"
        >
          <h2>Ready to Register?</h2>
          <p>Complete your registration in just a few simple steps</p>
          <div className="cta-actions">
            <button className="primary-btn">Register Online</button>
            <button className="secondary-btn">Download Form</button>
          </div>
          <small>Questions? Contact us at registration@aitpuneieee2027.in</small>
        </motion.div>
      </section>
    </div>
  );
}
