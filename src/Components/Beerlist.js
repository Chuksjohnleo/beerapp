import React from "react";
import Beer from "./Beer";

const Beerlist = ({ beers }) => {
  return beers.map((beer) => {
    return (
      <div className="beer" key={beer.id}>
       <Beer beer={beer} />
      </div>
    );
  });
};
export default Beerlist;