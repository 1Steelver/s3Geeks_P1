import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPlanets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("ACTIONS");

  useEffect(() => {
    actions.planetInfo(params.uid);
  }, []);
  const index = params.uid - 1;
  return (
    <div>
      <div className="d-flex">
      <img height={300} width={450} src={store. imgPlanets[index].url} />
      <div>
      <h1 className="container text-center">{store.planetaActual.name}</h1>
      <p className="container text-center py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo
          augue, tristique id nisl ut, consequat luctus felis. Nunc egestas,
          lacus eu pharetra eleifend, ante felis tempus mi, vel tempus felis
          nulla facilisis lorem. In hac habitasse platea dictumst. Aenean ornare
          semper magna sit amet volutpat. Vivamus odio enim, faucibus a turpis
          venenatis, vestibulum dictum ex. Nulla sed porttitor ipsum, quis
          lobortis libero. Suspendisse iaculis eleifend ante, in scelerisque
          nibh ornare a. Vestibulum id erat augue. Aliquam vel fringilla lorem,
          sed rutrum ex. Donec in tortor venenatis lacus cursus faucibus. Aenean
          ut consectetur diam. Etiam rhoncus tincidunt sagittis. Duis dapibus
          rhoncus imperdiet. Nulla quis tincidunt ipsum. Ut at leo sollicitudin,
          mattis elit id, lobortis ex.
        </p>
      </div>
       
        </div>
        
      <div className="d-flex">
        <p className="m-3">Diameter: {store.planetaActual.diameter}</p>
        <p className="m-3">
          Rotation Period: {store.planetaActual.rotation_period}
        </p>
        <p className="m-3">
          Orbital Period: {store.planetaActual.orbital_period}
        </p>
        <p className="m-3">Gravity: {store.planetaActual.gravity}</p>
        <p className="m-3">Population: {store.planetaActual.population}</p>
      </div>

      <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFav(props.properties.name)}}>
              {props.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              )}
            </button>
    </div>
  );
};

export default DPlanets;
