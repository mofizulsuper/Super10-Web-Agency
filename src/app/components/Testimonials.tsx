// components/Testimonials.tsx
import React from "react";
import styled from "styled-components";

// Styled-components for Testimonials
const TestimonialsContainer = styled.section`
  padding: 60px 40px;
  background-color: #f9f9f9;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.2em;
  color: #666;
  font-style: italic;
  margin: 20px 0;
`;

const ClientName = styled.h3`
  font-size: 1.5em;
  margin: 0;
  color: #6a11cb;
`;

const ClientPosition = styled.p`
  font-size: 1em;
  color: #999;
`;

// Sample testimonials data
const testimonials = [
    {
      quote: "The team was incredibly professional and exceeded our expectations! Their attention to detail and commitment to quality made a significant difference in our project.",
      name: "John Doe",
      position: "CEO, Company A"
    },
    {
      quote: "Fantastic service! They delivered on time and on budget. Our website has seen increased traffic and engagement since the launch, and we couldn't be happier!",
      name: "Jane Smith",
      position: "Marketing Director, Company B"
    },
    {
      quote: "I highly recommend them! The quality of work is top-notch. They understood our vision and brought it to life beautifully.",
      name: "Alice Johnson",
      position: "Founder, Company C"
    },
    {
      quote: "Working with this agency was a game-changer for our business. Their innovative approach helped us stand out in a crowded market.",
      name: "Michael Brown",
      position: "CTO, Company D"
    },
    {
      quote: "Their team went above and beyond to ensure we were satisfied. The communication was excellent, and they were always available to address our concerns.",
      name: "Sarah Williams",
      position: "Project Manager, Company E"
    },
    {
      quote: "We were impressed by their creativity and technical expertise. They delivered a product that not only looks great but also functions flawlessly.",
      name: "David Wilson",
      position: "Co-founder, Company F"
    },
  ];
  

// Testimonials Component
const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
            <ClientName>{testimonial.name}</ClientName>
            <ClientPosition>{testimonial.position}</ClientPosition>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
