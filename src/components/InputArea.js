// Filename: InputArea.js
import React from 'react';
import NumberInputField from './NumberInputField';

const InputArea = ({
    distance, setDistance,
    consumption, setConsumption,
    price, setPrice,
    calculateCosts }) => (
    <div className="InputArea">
        { /*Input of driven distance */}
        <NumberInputField
            label="Gefahrene Kilometer:"
            id="distance"
            value={distance}
            onChange={setDistance}
        />

        <br />
        { /*Input of fuel consumption*/}
        <NumberInputField
            label="Verbrauch auf 100 km:"
            id="consumption"
            value={consumption}
            onChange={setConsumption}
        />

        {/*Input of fuel price*/}
        <br />
        <NumberInputField
            label="Preis pro Liter:"
            id="price"
            value={price}
            onChange={setPrice}
        />

        { /*Button to calculate total costs */}
        <br />
        <button type="button" id="calculate" onClick={calculateCosts}>Berechnen</button>
    </div>
);

export default InputArea;