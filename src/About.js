import React from 'react';
import './about.css';
import pro1 from './img/prod3.png';
import pro2 from './img/prog5.jpg';
import pro3 from './img/progf1.jpg';
import pro4 from './img/proj2.png';
import pro5 from './img/pros4.jpg';

function About() {
  const teamMembers = [
    {
      img: pro1,
      name: 'Team 1',
      title: 'Developers',
      description: 'Former frontend, Backend & Designing dev for Linear, VScode.',
      linkedin: 'https://www.linkedin.com/in/oliviarhye/',
      twitter: 'https://twitter.com/oliviarhye'
    },
    {
      img: pro2,
      name: 'Team 2',
      title: 'Designer',
      description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      linkedin: 'https://www.linkedin.com/in/phoenixbaker/',
      twitter: 'https://twitter.com/phoenixbaker'
    },
    {
      img: pro3,
      name: 'Team 3',
      title: 'Product Manager',
      description: 'Former PM for Linear, Lambda School, and On Deck.',
      linkedin: 'https://www.linkedin.com/in/lanasteiner/',
      twitter: 'https://twitter.com/lanasteiner'
    },
    {
      img: pro4,
      name: 'Team 4',
      title: 'Frontend Developer',
      description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      linkedin: 'https://www.linkedin.com/in/demiwilkinson/',
      twitter: 'https://twitter.com/demiwilkinson'
    },
    {
      img: pro5,
      name: 'Team 5',
      title: 'Backend Developer',
      description: 'Lead backend dev at Clearbit.give src for all sorce Former Clearbit and Loom.',
      linkedin: 'https://www.linkedin.com/in/candicewu/',
      twitter: 'https://twitter.com/candicewu'
    }
  ];

  return (
    <div className="container">
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p>{member.description}</p>
            <div className="social-icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
