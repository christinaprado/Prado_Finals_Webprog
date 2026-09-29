import React from 'react';
import './AboutMe.css';
import profileImage from '../../assets/images/profile.jpg';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>Hello! I'm Christina Prado</h1>
          <p>
            Welcome to my personal website! I'm a fourth-year student at Asia Pacific College, 
            pursuing a Bachelor of Science in Information Technology with a specialization in 
            Mobile and Internet Technologies.
          </p>
          <p>
            Aside from my studies, I work part-time as a Loans Specialist, offering Salary 
            Stretch Loans also known as Personal Loanswhere clients can borrow up to ₱1M to ₱2M 
            with an interest rate as low as 1.49%. I assist clients with their loan applications 
            for CTBC Bank, providing support throughout the process and keeping them informed 
            about their application status. These loans can be used for home renovations, tuition 
            fees, travel expenses, business, and many more.
          </p>
          <p>
            Big special thanks to Michael Christian Cecilio! For helping me with the design and 
            development of this website!
          </p>
        </div>
        <div className="about-image">
          <div className="profile-image">
            <img src={profileImage} alt="Christina Prado" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 