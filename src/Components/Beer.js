import '../App.css';
import React from 'react';
import Beerlist from './Beerlist'

class TheBeers extends React.Component{n
  constructor(){
    super()
    this.state={
      cards : [],
      checkbox: false
    }
  }
  //api call from punkapi
  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9')
    .then(response=>{return response.json()})
    .then(beers => this.setState({cards: beers}))
  }
    switches = (event)=>{
            this.setState({ checkbox : event.target.checked }) }
  render(){
    //switch to filter beers according to abv
    const requiredAbv =  this.state.cards.filter(beer=>{
      if(beer.abv >= 5 && this.state.checkbox === true){
        return false
      }else if(beer.abv < 5.1 && this.state.checkbox === false){
        return false
      }
      return beer
    })
    if(this.state.cards < 1){
      return(
        <h1>Loading your beers....</h1>
      )
    }
     return(
    <div>
        <div className='header' >
          <h1>PunkAPI Beers</h1>
           <div className='input' >Switch Abv?<div className='check' ><input className='checkbox' type='checkbox' name='switch' value='off' onChange={this.switches}/></div></div>
        </div>
        <div className='index' >
              <Beerlist  beers={requiredAbv}/>
        </div>
    </div>
         ) 
  }
}


export default TheBeers;
//   function App(){
//   return(
//   <div className='App' >
//     <h1>Name</h1>
//     <img src={wine} height='50' alt='m'/>
//     <div>tagline</div>
//     <div>description</div>
//     <div>first food pairing</div>
//   </div>
//   )
// }
