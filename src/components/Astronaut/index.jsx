import React from "react";

const Astronaut = () => {
  return (
      <div className="astronaut" data-js="astro">
        <div className="head"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="body">
          <div className="panel"></div>
        </div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
        <div className="schoolbag"></div>
      </div>
  );
};

export default Astronaut;
