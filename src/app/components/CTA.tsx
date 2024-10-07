// components/CTA.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for CTA
const CTAContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; /* You can adjust the height */
  background-color: #6a11cb; /* Change to your preferred color */
  color: white;
  text-align: center;
  padding: 20px;
`;

const CTATitle = styled.h2`
  font-size: 2.5em;
  margin: 0;
`;

const CTADescription = styled.p`
  font-size: 1.2em;
  margin: 10px 0 20px;
`;

const CTAButton = styled.button`
  background-color: #f0a500; /* Button color */
  color: white;
  padding: 15px 30px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d18c00; /* Button hover color */
  }
`;

// CTA Component
const CTA = () => {
  return (
    <CTAContainer>
      <div>
        <CTATitle>Ready to Start Your Project?</CTATitle>
        <CTADescription>
          Get in touch with us today to discuss your ideas and see how we can help.
        </CTADescription>
        <CTAButton>Contact Us</CTAButton>
      </div>
    </CTAContainer>
  );
};

export default CTA;
