// components/Header.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for Header
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #f0a500;
  }
`;

const ContactButton = styled.button`
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

// HeaderComponent that renders the header with logo, nav links, and button
const HeaderComponent = () => {
  return (
    <Header>
      <Logo>Super10</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
      <ContactButton>Contact Us</ContactButton>
    </Header>
  );
};

export default HeaderComponent;
