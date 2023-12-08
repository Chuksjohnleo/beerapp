import "../App.css";
import React from "react";
import Beerlist from "./Beerlist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      checkbox: false,
    };
  }
  //api call from punkapi
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9")
      .then((response) => {
        return response.json();
      })
      .then((beer) => this.setState({ cards: beer }));
  }
  switches = (event) => {
    this.setState({ checkbox: event.target.checked });
  };
  render() {
    //switch to filter beers according to abv
    const requiredAbv = this.state.cards.filter((beer) => {
      if (beer.abv >= 5 && this.state.checkbox === true) {
        return false;
      } else if (beer.abv < 5.1 && this.state.checkbox === false) {
        return false;
      }
      return beer;
    });
    if (this.state.cards < 1) {
      return <h1>Loading your beers....</h1>;
    }

    return (
      <div>
        <div className="header">
          <h1>PunkAPI Beers</h1>
          <div className="abv-switch-contain">
            High Abv
            <div className="check">
              <label htmlFor="abv-switch" className="checkbox-label">
                <span className={`${this.state.checkbox?'end-roll':'start-roll'} switch-roller`}></span>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="switch"
                  value="off"
                  id="abv-switch"
                  onChange={this.switches}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="index">
          <Beerlist beers={requiredAbv} />
        </div>
      </div>
    );
  }
}

export default App;
