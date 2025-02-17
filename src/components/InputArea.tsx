// Filename: InputArea.tsx
import React from "react";
import NumberInputField from "./NumberInputField";
import TextInputField from "./TextInputField";

interface InputAreaProps {
  distance: number;
  setDistance: (distance: number) => void;
  distanceUnit: string;
  setDistanceUnit: (distanceUnit: string) => void;
  consumption: number;
  setConsumption: (consumption: number) => void;
  price: number;
  setPrice: (price: number) => void;
  calculateCosts: () => void;
}

/**
 * InputArea component renders input fields for distance, consumption, and price,
 * and a button to calculate total costs.
 *
 * @param distance - The driven distance.
 * @param setDistance - Function to set the driven distance.
 * @param distanceUnit - The unit of distance.
 * @param setDistanceUnit - Function to set the distance unit.
 * @param consumption - The fuel consumption per 100 km.
 * @param setConsumption - Function to set the fuel consumption.
 * @param price - The price per liter of fuel.
 * @param setPrice - Function to set the price per liter of fuel.
 * @param calculateCosts - Function to calculate the total costs.
 */
const InputArea: React.FC<InputAreaProps> = ({
  distance,
  setDistance,
  distanceUnit,
  setDistanceUnit,
  consumption,
  setConsumption,
  price,
  setPrice,
  calculateCosts,
}) => (
  <div
    className="InputArea"
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {/*Input of driven distance */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "200px",
      }}
    >
      <label htmlFor="distance">Gefahrene Entfernung</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <NumberInputField
          id="distanceInput"
          value={distance}
          onChange={setDistance}
          style={{ width: "80px" }}
        />

        {/* Input of distance unit */}
        <TextInputField
          id="distanceUnitSelector"
          value={distanceUnit}
          onChange={setDistanceUnit}
          style={{ width: "50px", marginLeft: "10px" }}
        />
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "20px",
        minWidth: "200px",
      }}
    >
      <label htmlFor="consumption">Verbrauch auf 100 km</label>

      {/*Input of fuel consumption*/}
      <NumberInputField
        id="consumption"
        value={consumption}
        onChange={setConsumption}
        style={{ width: "80px" }}
      />
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "20px",
        minWidth: "200px",
      }}
    >
      {/*Input of fuel price*/}
      <label htmlFor="price">Preis pro Liter</label>
      <NumberInputField
        id="price"
        value={price}
        onChange={setPrice}
        style={{ width: "80px" }}
      />
    </div>

    {/*Button to calculate total costs */}
    <br />
    <button type="button" id="calculate" onClick={calculateCosts}>
      Berechnen
    </button>
  </div>
);

export default InputArea;
