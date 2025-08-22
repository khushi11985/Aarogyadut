"use client"

import "./landing.css";
import Link from "next/link";

export default function landingPage() {
  return (
    <>
      <navbar />
      <section className="landing-page">
        <div className="landing-text">
          <h1>Your Digital Health <span>Companion</span></h1>
          <p>
            Experience the future of healthcare with Aarogyadoot's AI-powered telehealth platform. 
            Get instant medical consultations, symptom analysis, and personalized care from the comfort of your home.
          </p>
          <div className="landing-buttons">
            <button className="start-btn">Get Started Today <i className="fa-solid fa-arrow-right"></i></button>
             <button className="demo-btn">
            <i className="fa-solid fa-play"></i> Watch Demo
          </button>

          </div>
          <div className="status">
            <div><strong>10K+</strong> Happy Patients</div>
            <div><strong>500+</strong> Expert Doctors</div>
            <div><strong>24/7</strong> Support</div>
          </div>
        </div>
        <div className="landing-image">
          <img src="/image.png" alt="aarogyadut" />
          <div className="ai-badge">AI Powered<br />Smart Diagnosis</div>
          <div className="secure-badge">Secure<br />HIPAA Compliant</div>
        </div>
      </section>
    </>
  );
}

