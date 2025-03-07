import React from 'react';
import './Goals.css';

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: 'Enhance Financial Knowledge',
      description: 'Continuously expand my understanding of loan products, interest rates, and banking regulations to better assist clients and provide accurate financial advice.',
      progress: 60,
      timeframe: 'Ongoing'
    },
    {
      id: 2,
      title: 'Improve Client Relationships',
      description: 'Build strong, long-term relationships with clients by offering personalized loan solutions and ensuring smooth communication throughout the application process.',
      progress: 70,
      timeframe: 'Ongoing'
    },
    {
      id: 3,
      title: 'Boost Loan Approvals and Referrals',
      description: 'Set a target to increase loan approvals by effectively guiding clients through their applications and encouraging satisfied customers to refer friends and family.',
      progress: 55,
      timeframe: 'Ongoing'
    },
    {
      id: 4,
      title: 'Master Sales and Negotiation Skills',
      description: 'Develop my sales techniques and negotiation skills to confidently present loan options, address client concerns, and close deals efficiently.',
      progress: 50,
      timeframe: 'Ongoing'
    },
    {
      id: 5,
      title: 'Balance Work and Studies',
      description: 'Effectively manage my time to excel both as a Loans Specialist and a student by setting clear priorities, staying organized, and maintaining a healthy work-study balance.',
      progress: 65,
      timeframe: 'Ongoing'
    }
  ];

  return (
    <div className="goals-container">
      <h2 className="section-title">My Professional Goals</h2>
      <p className="section-description">
        I believe in setting ambitious goals and tracking progress. Here are some of the professional milestones I'm currently working toward.
      </p>
      
      <div className="goals-list">
        {goals.map(goal => (
          <div key={goal.id} className="goal-item">
            <div className="goal-header">
              <h3>{goal.title}</h3>
              <span className="timeframe">{goal.timeframe}</span>
            </div>
            <p>{goal.description}</p>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{goal.progress}% Complete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals; 