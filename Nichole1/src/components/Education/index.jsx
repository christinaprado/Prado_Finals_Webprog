import React from 'react';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      degree: 'College',
      institution: 'Asia Pacific College',
      year: '2023 - Present',
      description: 'Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technologies.'
    },
    {
      id: 2,
      degree: 'Senior Highschool',
      institution: 'Integrated Montessori Center',
      year: '2021 - 2023',
      description: ''
    },
    {
      id: 3,
      degree: 'Junior Highschool',
      institution: 'Integrated Montessori Center',
      year: '2017 - 2020',
      description: ''
    }
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">My Educational Journey</h2>
      <div className="education-timeline">
        {educationHistory.map(item => (
          <div key={item.id} className="education-item">
            <div className="education-content">
              <h3>{item.degree}</h3>
              <div className="institution">
                <span className="institution-name">{item.institution}</span>
                <span className="year">{item.year}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 