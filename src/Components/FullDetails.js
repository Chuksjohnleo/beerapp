import React from "react";

const FullDetails = ({ beer, cancel }) => {
    return (
      <div className="full-details">
        <div>
            <button onClick={cancel}>Cancel</button>
        </div>
        <div className="beer">
        <h5>{beer.name}</h5>
        <img className="beer-image" src={beer.image_url} height="80" alt="m" />
        <div className="abv">ABV: {beer.abv}</div>
        <h3>{beer.tagline}</h3>
        <h6>Food pairing : {beer.food_pairing[0].toUpperCase()}</h6>
        <div className="description">{beer.description}</div>
        </div>
      </div>
    );
};
export default FullDetails;