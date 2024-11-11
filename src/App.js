import './App.css';

function App() {
  return (
    <div className="App">
      <div className="PageTitle">
        <h1>Fahrtkosten-Rechner</h1>
        <p>Wer nicht fährt, hat keine Kosten. :-)</p>
      </div>
      <div className="InputArea">
        { /*Input of driven distance */}
        <label for="distance">Gefahrene Kilometer:</label>
        <input type="number" id="distance" name="distance" />
        <br />
        { /*Input of fuel consumption */}
        <label for="consumption">Verbrauch auf 100 km:</label>
        <input type="number" id="consumption" name="consumption" />
        <br />
        { /*Input of fuel price */}
        <label for="price">Preis pro Liter:</label>
        <input type="number" id="price" name="price" />
        <br />
        { /*Button to calculate total costs */}
        <button type="button" id="calculate">Berechnen</button>
      </div>
      <br />
      <div className="ResultArea">
        { /*Output of total costs */}
        <label for="total">Gesamtkosten:</label>
        <output id="total"></output>
        <br />
        { /*Output of costs per kilometer */}
        <label for="perKilometer">Kosten pro Kilometer:</label>
        <output id="perKilometer"></output>
      </div>
    </div>
  );
}

export default App;
