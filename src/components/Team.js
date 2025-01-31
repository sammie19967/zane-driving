import React from 'react';
import './styles/Team.css';

const TeamMemberCard = ({ name, position, experience, roles, image }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={image} alt={name} className="team-image" />
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className="flip-card-back">
        <h3>{name}</h3>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Experience:</strong> {experience} years</p>
        <p><strong>Roles:</strong> {roles}</p>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Senior Driving Instructor",
      experience: 10,
      roles: "Teaching, Student Assessment",
      image: "/images/image2.jpg",  // Update with actual image path
    },
    {
      name: "Jane Smith",
      position: "Head of Operations",
      experience: 8,
      roles: "Overseeing daily operations, Scheduling",
      image: "/images/image3.jpg",  // Update with actual image path
    },
    {
      name: "Mark Johnson",
      position: "Customer Support Manager",
      experience: 5,
      roles: "Handling inquiries, Managing feedback",
      image: "/images/image1.jpg",  // Update with actual image path
    }
  ];

  return (
    <div className="our-team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            experience={member.experience}
            roles={member.roles}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
