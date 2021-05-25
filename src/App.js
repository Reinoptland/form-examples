import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// Naam -> string
// Email -> string
// Jaren ervaring -> number

// controlled components
// - [x] state aanmaken voor elk input veld
// - [x] value doorgeven aan het input veld (getter)
// - onChange handler voor elk input veld (setter)

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [xp, setXp] = useState();

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
            value={name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@you.com"
            value={email}
          />
          <label htmlFor="xp">Years of experience</label>
          <input id="xp" name="xp" type="number" placeholder="0" value={xp} />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
