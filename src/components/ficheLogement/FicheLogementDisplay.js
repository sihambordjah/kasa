//import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../../datas/logement.json";
import Tag from "./Tag";
import emptyStar from "../../assets/images/rate/startRempli.png";
import fullStar from "../../assets/images/rate/startVide.png";
import Collapse from "../collapse/Accordion";
import Carrousel from "./Carrousel";

const FicheLogementDisplay = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();
  console.log("-----id params");
  console.log(id);
  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Notes */
  let noteLogement = [];
  let etoileComplete = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement?.rating)) {
      etoileComplete = false;
    }
    if (etoileComplete === true) {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={emptyStar}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    } else {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={fullStar}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    }
  }

  /* Équipements */
  const equipementsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                <div className="description-info__proprietaire__nom-prop">
                  <span className="nom-proprietaire">
                    {ficheLogement?.host.name}
                  </span>
                  <img
                    className="photo-proprietaire"
                    src={ficheLogement?.host.picture}
                    alt="Propriétaire"
                  />
                </div>
                <div className="description-info__proprietaire__rate">
                  {noteLogement}
                </div>
              </div>
            </div>
          </section>

          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements" content={equipementsLogement} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default FicheLogementDisplay;
