import React, { useState } from 'react';
import { DEFAULT_DISTANCE, DEFAULT_CONSUMPTION, DEFAULT_PRICE } from './constants';
import './App.css';

function App() {
  const [distance, setDistance] = useState(DEFAULT_DISTANCE);
  const [consumption, setConsumption] = useState(DEFAULT_CONSUMPTION);
  const [price, setPrice] = useState(DEFAULT_PRICE);
  const [totalCost, setTotalCost] = useState(0);
  const [costPerKilometer, setCostPerKilometer] = useState(0);

  const calculateCosts = () => {
    const total = (distance / 100) * consumption * price;
    const perKilometer = total / distance;
    setTotalCost(total);
    setCostPerKilometer(perKilometer);
  };

  return (
    <div className="App">
      { /*Title of the page */}
      <div className="PageTitle">
        <h1>Fahrtkosten-Rechner</h1>
        <p>Wer nicht fährt, hat keine Kosten. :-)</p>
      </div>

      { /*Input area */}
      <div className="InputArea">
        { /*Input of driven distance */}
        <label htmlFor="distance">Gefahrene Kilometer:</label>
        <input type="number"
          id="distance"
          name="distance"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
        <br />
        { /*Input of fuel consumption */}
        <label htmlFor="consumption">Verbrauch auf 100 km:</label>
        <input
          type="number"
          id="consumption"
          name="consumption"
          value={consumption}
          onChange={(e) => setConsumption(Number(e.target.value))}
        />
        <br />
        { /*Input of fuel price */}
        <label htmlFor="price">Preis pro Liter:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <br />
        { /*Button to calculate total costs */}
        <button type="button" id="calculate" onClick={calculateCosts}>Berechnen</button>
      </div>
      <br />

      { /*Output area */}
      <div className="ResultArea">
        { /*Output of total costs */}
        <label htmlFor="total">Gesamtkosten:</label>
        <output id="total">{totalCost.toFixed(2)}</output>
        <br />
        { /*Output of costs per kilometer */}
        <label htmlFor="perKilometer">Kosten pro Kilometer:</label>
        <output id="perKilometer">{costPerKilometer.toFixed(2)}</output>
      </div>
    </div>
  );
}

export default App;
