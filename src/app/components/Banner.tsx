// components/Banner.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for Banner
const BannerContainer = styled.section`
  position: relative; /* Set relative positioning for overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px; /* You can adjust the height */
  background-image: url('https://www.shutterstock.com/image-vector/programming-web-banner-best-languages-260nw-1676060566.jpg'); /* Add your background image URL */
  background-size: cover; 
  background-position: center;
  color: white;
  text-align: center;
  padding: 20px;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
`;

const BannerTitle = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const BannerDescription = styled.p`
  font-size: 1.2em;
  margin: 10px 0 20px;
`;

const BannerButton = styled.button`
  background-color: #f0a500;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d18c00;
  }
`;

// Banner Component
const Banner = () => {
  return (
    <BannerContainer>
      <Overlay /> {/* Add the overlay */}
      <BannerContent>
        <BannerTitle>Welcome to Our Super10!</BannerTitle>
        <BannerDescription>Your business journey starts here. Explore our services now!</BannerDescription>
        <BannerButton>Get Started</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
