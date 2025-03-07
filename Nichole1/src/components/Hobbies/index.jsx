import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Photography',
      description: 'It\'s my way of preserving memories, capturing moments that I can look back on and cherish. Each photo tells a story, allowing me to freeze time and relive those experiences.',
      icon: '📷'
    },
    {
      id: 2,
      title: 'Walking',
      description: 'I love exploring both nature and the city, as it gives me a sense of freedom and curiosity. It\'s a simple yet fulfilling way to clear my mind while discovering new places.',
      icon: '🥾'
    },
    {
      id: 3,
      title: 'Reading',
      description: 'I enjoy reading people\'s life stories and advice on social media because it gives me insight into different perspectives. It helps me learn, relate, and grow from the experiences of others.',
      icon: '📚'
    },
    {
      id: 4,
      title: 'Cooking',
      description: 'Trying out new recipes excites me because it allows me to be creative in the kitchen. It\'s a rewarding experience to make something delicious from scratch and share it with others.',
      icon: '🍳'
    },
    {
      id: 5,
      title: 'Yoga',
      description: 'Yoga helps me relax by calming my mind and body. It\'s my way of finding balance and peace amidst the busyness of life.',
      icon: '🧘‍♀️'
    },
    {
      id: 6,
      title: 'Listening to Music',
      description: 'Music keeps me calm and lifts my mood. It\'s a constant companion that energizes me or soothes me, depending on what I need in the moment.',
      icon: '🎧'
    }
  ];

  return (
    <div className="hobbies-container">
      <h2 className="section-title">Things I Love to Do</h2>
      <div className="hobbies-grid">
        {hobbies.map(hobby => (
          <div key={hobby.id} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies; 