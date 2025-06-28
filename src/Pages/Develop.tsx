import React from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import logo from "../assets/Bigscreen-preview.png";

const Develop: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title group-hover-wrapper">
            Hello, I'm <br />
            <span className="name-hover-group">
            Debesh Jha <span className="wave-on-hover">👋</span>
            </span>
          </h1>
          <h2 className="hero-subtitle">AI Researcher & Medical Imaging Scientist</h2>
          <p className="hero-description">
            I'm an Assistant Professor and AI Scientist developing human-centered, trustworthy clinical AI for medical imaging-advancing diagnosis through multimodal learning,
             dataset creation, real-world deployment, and clinician-aligned innovation.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              About Me
            </button>
            <button className='btn btn-secondary'>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={logo} alt="Harshith Reddy" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Develop;
