import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import aboutBanner from "../../assets/images/banner/aboutBanner.png";
import AboutBanner from "../../components/banner/AboutBanner";
import Collapse from "../../components/collapse/Collapse";

const About = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      
      <Collapse />

      <Footer />
    </div>
  );
};

export default About;
