import React from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import logo from "../assets/SmallPicture.png";

const Develop: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm  <br /><span className='text-black hover:text-blue-500'>Debash Jha <span className='wave-on-hover'>👋</span></span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I'm a Full Stack Developer skilled in Java and React, specializing in responsive,
            user-friendly interfaces using HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              About Me
            </button>
            <button>
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
