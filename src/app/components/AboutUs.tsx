// components/AboutUs.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for About Us
const AboutUsContainer = styled.section`
  padding: 60px 40px;
  background-color: #ffffff;
  text-align: center;
`;

const AboutUsTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const AboutUsDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 20px auto 40px;
  max-width: 800px; /* Set a maximum width */
  line-height: 1.5; /* Improve readability */
`;

const TeamSection = styled.div`
  margin-top: 40px;
`;

const TeamTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 20px;
  color: #6a11cb;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Change to 4 columns */
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on mobile screens */
  }
`;

const TeamMemberCard = styled.div`
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center; /* Center the card content */
`;

const MemberPhoto = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const MemberName = styled.h4`
  margin: 0;
  font-size: 1.5em;
  color: #333;
  text-align: center; /* Center the member name */
`;

const MemberPosition = styled.p`
  font-size: 1em;
  color: #999;
  text-align: center; /* Center the member position */
`;

// Sample team members data
const teamMembers = [
  {
    name: "John Smith",
    position: "Co-founder & CEO",
    photo: "/team_1.jpg", // Updated path to your image
  },
  {
    name: "Jane Doe",
    position: "Creative Director",
    photo: "/team_2.jpg", // Updated path to your image
  },
  {
    name: "Alice Johnson",
    position: "Lead Developer",
    photo: "/team_3.jpg", // Updated path to your image
  },
  {
    name: "Michael Brown",
    position: "Project Manager",
    photo: "/team_4.jpg", // Updated path to your image
  }
];

// About Us Component
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>About Us</AboutUsTitle>
      <AboutUsDescription>
        We are a web agency dedicated to providing top-notch digital solutions
        for our clients. Our mission is to help businesses grow online by
        delivering high-quality websites and innovative marketing strategies.
      </AboutUsDescription>

      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index}>
              <MemberPhoto src={member.photo} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
