// components/Portfolio.tsx
import React from "react";
import styled from "styled-components";
import Image from 'next/image'; // Import Image from next/image

const PortfolioContainer = styled.section`
  padding: 60px 40px;
  background-color: #ffffff;
  text-align: center;
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;  
`;

const PortfolioTitleStyled = styled.h3`
  margin-top: 20px; 
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled.div`
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const PortfolioDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

// Sample portfolio data
const portfolioItems = [
  {
    title: "Project One",
    image: "/our_work_1.jpg", // Path relative to the /public folder
    description: "A brief description of Project One.",
  },
  {
    title: "Project Two",
    image: "/our_work_2.jpg", // Path relative to the /public folder
    description: "A brief description of Project Two.",
  },
  {
    title: "Project Three",
    image: "/our_work_3.jpg", // Path relative to the /public folder
    description: "A brief description of Project Three.",
  },
];

// Portfolio Component
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Our Work</PortfolioTitle>
      <PortfolioGrid>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index}>
            <Image src={item.image} alt={item.title} width={500} height={300} /> {/* Set width and height */}
            <PortfolioTitleStyled>{item.title}</PortfolioTitleStyled>
            <PortfolioDescription>{item.description}</PortfolioDescription>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
