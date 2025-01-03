import React, { useState } from 'react';
import { DEFAULT_DISTANCE, DEFAULT_CONSUMPTION, DEFAULT_PRICE } from './constants';
import './App.css';
import InputArea from './components/InputArea';
import SubTitle from './components/SubTitle';

import OutputFieldWithNumber from './OutputFieldWithNumber';

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
        <SubTitle text="Berechne die Kosten für eine Autofahrt." />
      </div>

      { /*Input area */}
      <InputArea
        distance={distance}
        setDistance={setDistance}
        consumption={consumption}
        setConsumption={setConsumption}
        price={price}
        setPrice={setPrice}
        calculateCosts={calculateCosts}
      />
      <br />

      { /*Output area */}
      <div className="ResultArea">
        { /*Output of total costs */}
        <OutputFieldWithNumber
          label="Gesamtkosten:"
          id="total"
          value={totalCost} />

        { /*Output of costs per kilometer */}
        <br />
        <OutputFieldWithNumber
          label="Kosten pro Kilometer:"
          id="perKilometer"
          value={costPerKilometer} />
      </div>
    </div>
  );
}

export default App;
