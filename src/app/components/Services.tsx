// components/Services.tsx
import React from "react";
import styled from "styled-components";
import { FaCode, FaPaintBrush, FaSearch, FaBullhorn, FaPenNib, FaUserFriends } from "react-icons/fa"; // Importing icons

// Styled-components for Services
const ServicesContainer = styled.section`
  padding: 60px 40px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One column on mobile */
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 70px 50px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;
const ServiceIcon = styled.span`
margin-bottom: 15px;
display: inline-block;
  font-size: 2em; 
`;
const ServiceTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #6a11cb;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

// Sample service data
const services = [
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Building responsive and engaging websites tailored to your needs."
    },
    {
        icon: <FaPaintBrush />,
        title: "Graphic Design",
        description: "Creating visually stunning graphics that elevate your brand."
    },
    {
        icon: <FaSearch />,
        title: "SEO Optimization",
        description: "Improving your website's visibility on search engines for better traffic."
    },
    {
        icon: <FaBullhorn />,
        title: "Digital Marketing",
        description: "Strategies to enhance your online presence and drive sales."
    },
    {
        icon: <FaPenNib />,
        title: "Content Creation",
        description: "Producing high-quality content to engage your audience."
    },
    {
        icon: <FaUserFriends />,
        title: "Consulting Services",
        description: "Expert advice to help you make informed business decisions."
    },
];

// Services Component
const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle>Our Services</ServicesTitle>
            <ServicesGrid>
                {services.map((service, index) => (
                    <ServiceCard key={index}>
                        <ServiceIcon>{service.icon}</ServiceIcon>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </ServicesContainer>
    );
};

export default Services;
