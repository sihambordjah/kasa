import React, { useState } from "react";
//import flechLeft from "../../assets/images/carrousel/flech-left.png";
//import flechRight from "../../assets/images/carrousel/flech-right.png";

function Carrousel({ slides }) {
  /* Crée un Hook d'état */
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  const length = slides.length; //longueur du tableau de slides

  /**Function pour l'image precedente */
  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  /**Function pour l'image suivante */
  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        // <img
        //   src={flechLeft}
        //   alt="left"
        //   onClick={prevImg}
        //   className="left-Arrow"
        // />
        <p className="left-Arrow" onClick={prevImg}>
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        // <img
        //   src={flechRight}
        //   alt="right"
        //   onClick={nextImg}
        //   className="right-Arrow"
        // />
        <p className="right-Arrow" onClick={nextImg}>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
