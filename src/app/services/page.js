import React from 'react'
import "./service.css"

export default function Services() {
  const services = [
    {
      id: "virtual-consultations",
      title: "Virtual Consultations",
      desc: "Connect with certified doctors through secure video calls from anywhere, anytime.",
      icon: "📹",
    },
    {
      id: "ai-symptom-checker",
      title: "AI Symptom Checker",
      desc: "Get instant preliminary diagnosis using our advanced AI-powered symptom analysis.",
      icon: "🧠",
    },
    {
      id: "specialist-care",
      title: "Specialist Care",
      desc: "Access specialized medical expertise across multiple healthcare disciplines.",
      icon: "🩺",
    },
    {
      id: "digital-prescriptions",
      title: "Digital Prescriptions",
      desc: "Receive electronic prescriptions and medication management directly to your phone.",
      icon: "💊",
    },
    {
      id: "health-monitoring",
      title: "Health Monitoring",
      desc: "Track vital signs and health metrics with continuous monitoring and alerts.",
      icon: "❤️",
    },
    {
      id: "secure-health-records",
      title: "Secure Health Records",
      desc: "HIPAA-compliant digital health records accessible to you and your care team.",
      icon: "🛡️",
    },
    {
      id: "emergency-support",
      title: "24/7 Emergency Support",
      desc: "Round-the-clock emergency medical consultation for urgent health concerns.",
      icon: "⏰",
    },
    {
      id: "family-health-plans",
      title: "Family Health Plans",
      desc: "Comprehensive healthcare solutions for your entire family under one platform.",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  return (
    <div className="services-container">
      {/* Top Section */}
      <div className="services-header">
        <h2>
          Comprehensive Healthcare <span>Services</span>
        </h2>
        <p>
          Experience healthcare reimagined with our complete suite of digital
          health services, designed to make quality medical care accessible,
          convenient, and effective.
        </p>
      </div>

      {/* Cards Section */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}











