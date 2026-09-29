import React from 'react';
import './ITExperience.css';

const ITExperience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Personal Website',
      company: 'Asia Pacific College',
      period: 'August 2025',
      description: 'I developed a personal website using HTML, CSS, and JavaScript, showcasing my web development skills by designing a responsive interface and integrating interactive features.',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      role: 'Web Development',
      company: 'Asia Pacific College',
      period: 'Agust 2025-March 2026',
      description: 'I took on the role of a Team Lead to design and build a web application for our first client, focusing on UI/UX and front-end development to sharpen my project management and web coding skills.',      
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 3,
      role: 'Mobile Application Development',
      company: 'Asia Pacific College',
      period: 'August 2026-Present',
      description: 'I led the project team and built front-end features for a patient referral mobile application, focusing on offline functionality and smooth user navigation.',      
      skills: ['React Native', 'JavaScript', 'UI/UX Design']
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">IT Experience</h2>
      <div className="experience-timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p>{exp.description}</p>
              <div className="skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITExperience; 