import React from 'react'

 const Beerlist = ({beers}) =>{
   return(
    beers.map (beer =>{
    return(<div className='App' key={beer.id} >
           <h5>{beer.name}</h5>
           <img className='beers' src={beer.image_url} height='50' alt='m'/>
           <div className='abv' >ABV: {beer.abv}</div>
           <h3>{beer.tagline}</h3>
           <h2>Food pairing : {beer.food_pairing[0].toUpperCase()}</h2>
           <div className='des' >{beer.description}</div>
        </div>)
    })
   )
}
export default Beerlist;