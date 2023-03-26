import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [text, setText] = useState(false);
  const display = () => {
    setText(!text);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {text ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className="collapse__dropdown__content">
        {text && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;
