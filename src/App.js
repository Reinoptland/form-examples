import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// Naam -> string
// Email -> string
// Jaren ervaring -> number

// controlled components
// - [x] state aanmaken voor elk input veld
// - [x] value doorgeven aan het input veld (getter)
// - [x] onChange handler voor elk input veld (setter)

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [xp, setXp] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // we krijgen geen pagina terug!

    if (!email.includes("@")) {
      setEmailError("Vul aub een email in");
      return; // stop!
    }

    if (!name) {
      setNameError("Dit veld is verplicht");
      return;
    }
    // Standaard refreshed een form submission je pagina
    console.log("DIT IS INGEVULD:", name, email, xp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App-header" onSubmit={handleSubmit}>
          <label htmlFor="name">Naam</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name here ..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          {<p>{nameError}</p>}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@you.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {<p>{emailError}</p>}

          <label htmlFor="xp">Years of experience</label>
          <input
            id="xp"
            name="xp"
            type="number"
            placeholder="0"
            value={xp}
            onChange={(event) => setXp(event.target.value)}
          />

          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
