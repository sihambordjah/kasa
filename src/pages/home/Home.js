import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";


const Home = () => {
  return (
    <div className="home">
      <main>
        <Header />
        <Banner />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
