import logo from "./logo.svg";
import "./App.css";

// Naam -> string
// Email -> string
// Jaren ervaring -> number

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="App-header">
          <label htmlFor="name">Naam</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
          <label htmlFor="xp">Years of experience</label>
          <input id="xp" name="xp" type="number" />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
