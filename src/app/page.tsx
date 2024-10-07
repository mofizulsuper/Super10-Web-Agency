"use client";

import HeaderComponent from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
    <HeaderComponent />
    <Banner />
    <Services />
    <Portfolio />
    <Testimonials />
    <AboutUs />
    <CTA />
    <Blog />
    <ContactUs />
    <Footer />
    </>
  );
}
