import React from "react";
import FicheLogementDisplay from "../../components/ficheLogement/FicheLogementDisplay";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FichLogment = () => {
  return (
    <main>
      <div className="logement">
        <Header />
        <FicheLogementDisplay />
        <Footer />
      </div>
    </main>
  );
};

export default FichLogment;
