// components/Footer.tsx
import React from "react";
import styled from "styled-components";
import { FaPhone, FaHome, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa"; // Icons for phone, address, and social media

// Styled-components for Footer
const FooterContainer = styled.footer`
  background-color: #333; /* Dark background */
  color: white;
  padding: 40px 20px; /* Top and bottom padding */
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between; /* Space between sections */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections on smaller screens */
  }
`;

const FooterSection = styled.div`
  flex: 1; /* Flex-grow to fill space */
  margin: 0 10px; /* Margin between sections */

  @media (max-width: 768px) {
    margin: 10px 0; /* Vertical margin on small screens */
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.5em;
  color: #f0a500; /* Highlight color for titles */
`;

const FooterLink = styled.a`
  display: block;
  color: #fff; /* White links */
  margin: 5px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column; /* Stack icon and text vertically */
`;

const IconText = styled.div`
  display: flex;
  align-items: center; /* Center align the icon and text */
  margin: 5px 0; /* Margin between items */
`;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscribeInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const SubscribeButton = styled.button`
  padding: 10px;
  background-color: #f0a500;
  border: none;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d18c00; /* Darker on hover */
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444; /* Top border */
  display: flex; /* Flex for side-by-side arrangement */
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const BottomLinks = styled.div`
  margin-top: 10px;

  a {
    color: white; /* White links */
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center; /* Align icons */
  margin-top: 15px; /* Margin for social section */
`;

const SocialLink = styled.a`
  color: white; /* White links */
  margin-right: 10px; /* Space between social icons */
  font-size: 1.5em; /* Icon size */

  &:hover {
    color: #f0a500; /* Change color on hover */
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <p>We are a web agency committed to delivering exceptional digital solutions.</p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <SocialLinks>
            <SocialLink href="#"><FaFacebook /></SocialLink>
            <SocialLink href="#"><FaTwitter /></SocialLink>
            <SocialLink href="#"><FaLinkedin /></SocialLink>
            <SocialLink href="#"><FaYoutube /></SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <IconText>
              <FaPhone style={{ marginRight: "5px" }} />
              <span>+1 234 567 890</span>
            </IconText>
            <IconText>
              <FaHome style={{ marginRight: "5px" }} />
              <span>123 Main St, City, Country</span>
            </IconText>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Subscribe to Newsletter</FooterTitle>
          <SubscribeContainer>
            <p>Get the latest updates and offers!</p>
            <SubscribeInput type="email" placeholder="Your Email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeContainer>
        </FooterSection>

        
      </FooterTop>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        <BottomLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
        </BottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
