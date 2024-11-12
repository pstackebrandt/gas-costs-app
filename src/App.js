import React, { useState } from 'react';
import { DEFAULT_DISTANCE, DEFAULT_CONSUMPTION, DEFAULT_PRICE } from './constants';
import './App.css';
import NumberInputField from './NumberInputField';

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
        <NumberInputField
          label="Gefahrene Kilometer:"
          id="distance"
          value={distance}
          onChange={setDistance}
        />

        <br />
        { /*Input of fuel consumption */}
        <NumberInputField
          label="Verbrauch auf 100 km:"
          id="consumption"
          value={consumption}
          onChange={setConsumption}
        />

        <br />
        { /*Input of fuel price */}
        <NumberInputField 
          label="Preis pro Liter:"
          id="price"
          value={price}
          onChange={setPrice}
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
