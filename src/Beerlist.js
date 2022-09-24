import React from 'react'

export const Beerlist = ({beers}) =>{
   return(
    beers.map (beer =>{
    return(<div className='App' key={beer.id} >
           <h5>{beer.name}</h5>
           <img className='beers' src={beer.image_url} height='50' alt='m'/>
           <div className='abv' >ABV: {beer.abv}</div>
           <div>{beer.tagline}</div>
           <div>{beer.description}</div>
        </div>)
    })
   )
}
 