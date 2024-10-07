// components/ContactUs.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for Contact Us Section
const ContactContainer = styled.section`
  padding: 60px 40px;
  background-color: #f9f9f9; 
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const ContactDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; 
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  width: 100%; 
  display: flex; 
  justify-content: space-between; 
  
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const FormLabel = styled.label`
  font-size: 1em;
  margin-bottom: 5px;
  color: #333;
  display: block;
  text-align: left;
`;

const FormInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; 
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; 
  resize: vertical;
  /* Placeholder text styles */
  ::placeholder {
    color: #aaa; /* Lighter color for placeholder */
    font-style: italic; /* Italic style for better visibility */
  }
`;

const SubmitButton = styled.button`
  background-color: #6a11cb;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Full width for the button */

  &:hover {
    background-color: #4a09a8; 
  }
`;

// Contact Us Component
const ContactUs = () => {
    return (
        <ContactContainer>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactDescription>
                We'd love to hear from you! Please fill out the form below and we will get back to you shortly.
            </ContactDescription>

            <ContactForm>
                <FormField>
                    <div style={{ width: "48%" }}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <FormInput type="text" id="firstName" placeholder="Your First Name" required />
                    </div>
                    <div style={{ width: "48%" }}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <FormInput type="text" id="lastName" placeholder="Your Last Name" required />
                    </div>
                </FormField>
                <FormField>
                    <div style={{ width: "48%" }}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div style={{ width: "48%" }}>
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <FormInput type="tel" id="phone" placeholder="Your Phone Number" required />
                    </div>
                </FormField>
                <FormField>
                    <div style={{ width: "100%" }}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FormTextarea id="message" rows="5" placeholder="Your Message" required />
                    </div>
                </FormField>
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </ContactContainer>
    );
};

export default ContactUs;
