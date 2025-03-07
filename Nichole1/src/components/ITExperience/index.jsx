import React from 'react';
import './ITExperience.css';

const ITExperience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Personal Website',
      company: 'Asia Pacific College',
      period: '2024-Present',
      description: 'I developed a personal website using HTML, CSS, and JavaScript, showcasing my web development skills by designing a responsive interface and integrating interactive features.',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      role: 'App Development',
      company: 'Asia Pacific College',
      period: '2024-Present',
      description: 'I tried creating a mobile application, focusing on user-friendly design and functionality, utilizing programming languages like Java/Kotlin to enhance my app development and problem-solving skills that did not solve my problems.',
      skills: ['Dart', 'Java']
    },
    {
      id: 3,
      role: 'Database in SQL',
      company: 'Asia Pacific College',
      period: '2024-Present',
      description: 'I designed and implemented an SQL database for our projects that helped me expand my knowledge.',
      skills: ['MySQLWorkbench']
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