// Filename: InputArea.js
import React from 'react';
import NumberInputField from './NumberInputField';
import TextInputField from './TextInputField';

/**
 * InputArea component renders input fields for distance, consumption, and price,
 * and a button to calculate total costs.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.distance - The driven distance.
 * @param {function} props.setDistance - Function to set the driven distance.
 * @param {string} props.distanceUnit - The unit of distance.
 * @param {function} props.setDistanceUnit - Function to set the distance unit.
 * @param {number} props.consumption - The fuel consumption per 100 km.
 * @param {function} props.setConsumption - Function to set the fuel consumption.
 * @param {number} props.price - The price per liter of fuel.
 * @param {function} props.setPrice - Function to set the price per liter of fuel.
 * @param {function} props.calculateCosts - Function to calculate the total costs.
 */
const InputArea = ({
    distance, setDistance, 
    distanceUnit, setDistanceUnit,
    consumption, setConsumption,
    price, setPrice,
    calculateCosts }) => (
    <div className="InputArea">

        { /*Input of driven distance */}
        <div>
            <label htmlFor="distance">Gefahrene Entfernung</label>
            <NumberInputField
                label=""
                id="distanceInput"
                value={distance}
                onChange={setDistance}
                style={{ width: '80px' }}
            />

            { /* Input of distance unit */}
            <TextInputField
                label=""
                id="distanceUnitSelector"
                value={distanceUnit}
                onChange={setDistanceUnit}
                style={{ width: '50px' }}
            />
        </div>

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