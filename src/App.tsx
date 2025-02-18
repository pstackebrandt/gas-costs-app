import { useState } from 'react';
import { DEFAULT_DISTANCE, DEFAULT_CONSUMPTION, DEFAULT_PRICE } from './constants';

import InputArea from './components/InputArea';
import SubTitle from './components/SubTitle';
import Footer from './components/Footer';
import OutputFieldWithNumber from './components/OutputFieldWithNumber';
import styles from './App.module.scss';

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
    <div className={styles.App}>
      { /*Title of the page */}
      <div>
        <h1>Fahrtkosten-Rechner</h1>
        <SubTitle text="Berechne die Kosten für eine Autofahrt." />
      </div>

      { /*Input area */}
      <InputArea
        distance={distance}
        setDistance={setDistance}
        distanceUnit='km'
        setDistanceUnit={() => { }} // TODO Not implemented
        consumption={consumption}
        setConsumption={setConsumption}
        price={price}
        setPrice={setPrice}
        calculateCosts={calculateCosts}
      />
      <br />

      { /*Output area */}
      <div className={styles.ResultArea}>
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
      <Footer />
    </div>
  );
}

export default App;