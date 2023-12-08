import React, { useState } from "react";
import FullDetails from "./FullDetails";

const Beer = ({ beer }) => {
    const [fullDetails, setFullDetails] = useState(false);

    return (
      <div>
        {fullDetails && <FullDetails cancel={()=>setFullDetails(false)} beer={beer} />}
        <h5>{beer.name}</h5>
        <img className="beer-image" src={beer.image_url} height="80" alt="m" />
        <div className="abv">ABV: {beer.abv}</div>
        <h3>{beer.tagline}</h3>
        <h6>Food pairing : {beer.food_pairing[0].toUpperCase()}</h6>
        <div className="des">
            {beer.description}
            <button onClick={()=>setFullDetails(true)}>More..</button>
        </div>
      </div>
    );
};
export default Beer;