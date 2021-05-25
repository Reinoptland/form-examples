import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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
