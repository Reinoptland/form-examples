import { useForm } from "react-hook-form";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();

  function logOutput(data) {
    console.log("DATA UIT FORM:", data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App-header" onSubmit={handleSubmit(logOutput)}>
          <label htmlFor="name">Naam</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name here ..."
            {...register("name")}
          />
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@you.com"
            {...register("email")}
          />

          <label htmlFor="xp">Years of experience</label>
          <input
            id="xp"
            name="xp"
            type="number"
            placeholder="0"
            {...register("xp")}
          />

          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
