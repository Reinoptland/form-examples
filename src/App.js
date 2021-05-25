import logo from "./logo.svg";
import "./App.css";

// Naam -> string
// Email -> string
// Jaren ervaring -> number

// controlled components
// - state aanmaken voor elk input veld
// - value doorgeven aan het input veld (getter)
// - onChange handler voor elk input veld (setter)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="App-header">
          <label htmlFor="name">Naam</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name here ..."
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@you.com"
          />
          <label htmlFor="xp">Years of experience</label>
          <input id="xp" name="xp" type="number" placeholder="0" />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
