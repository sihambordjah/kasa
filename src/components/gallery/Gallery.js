import React from "react";
import { NavLink } from "react-router-dom";
import logements from "../../datas/logement.json";
import Card from "../cards/Card";

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <NavLink to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </NavLink>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
