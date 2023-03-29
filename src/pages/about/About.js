import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AboutBanner from "../../components/banner/AboutBanner";
import Collapse from "../../components/collapse/Collapse";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <AboutBanner />
        <Collapse />
      </main>

      <Footer />
    </div>
  );
};

export default About;
