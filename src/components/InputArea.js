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
    <div className="InputArea" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        { /*Input of driven distance */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
            minWidth: '200px'
         }}>
            <label htmlFor="distance">Gefahrene Entfernung</label>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <NumberInputField
                    id="distanceInput"
                    value={distance}
                    onChange={setDistance}
                    style={{ width: '80px' }}
                />

                { /* Input of distance unit */}
                <TextInputField
                    id="distanceUnitSelector"
                    value={distanceUnit}
                    onChange={setDistanceUnit}
                    style={{ width: '50px', marginLeft: '10px' }}
                />
            </div>
        </div>

        <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', marginTop: '20px',
            minWidth: '200px'
        }}>
            <label htmlFor="consumption">Verbrauch auf 100 km</label>

            { /*Input of fuel consumption*/}
            <NumberInputField
                id="consumption"
                value={consumption}
                onChange={setConsumption}
                style={{ width: '80px' }}
            />
        </div>

        <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', marginTop: '20px',
            minWidth: '200px'
        }}>
            {/*Input of fuel price*/}
            <label htmlFor="price">Preis pro Liter</label>
            <NumberInputField
                id="price"
                value={price}
                onChange={setPrice}
                style={{ width: '80px' }}
            />
        </div>
        
        { /*Button to calculate total costs */}
        <br />
        <button type="button" id="calculate" onClick={calculateCosts}>Berechnen</button>
    </div>
);

export default InputArea;