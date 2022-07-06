import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container testimonial-group">
      <div className="jumbotron jumbotron-fluid">
      <img
            src="data:image/png;base64,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"
            alt="img"
          ></img>
        <div className="container">
        
          <h1 className="display-4">Super3Geeks</h1>
         
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <h1 className="text-danger">Productos</h1>
      <div className="row text-center">
        {store.people.map((item, index) => (
          <div className="col-sm-6 card-container" key={index}>
            <Cards
              url={item.url}
              indice={index}
              properties={item.properties}
              title={item.name}
              uid={item.uid}
              charaInfo={true}
              isFavorite={false}
            ></Cards>
          </div>
        ))}
      </div>
      <h1 className="text-danger">Planets</h1>
      <div className="row text-center mt-5">
        {store.planets.map((item, index) => (
          <div className="col-sm-6 card-container" key={index}>
            <Cards
              url={item.url}
              indice={index}
              properties={item.properties}
              title={item.name}
              uid={item.uid}
              planetInfo={true}
              isFavorite={false}
            ></Cards>
          </div>
        ))}
      </div>
    </div>
  );
};
