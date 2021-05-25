import { useState } from "react";
import { useForm } from "react-hook-form";
import spinner from "./spinner.gif";
import "./App.css";

function App() {
  const [succes, setSucces] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function logOutput(data) {
    console.log("DATA UIT FORM:", data);
    setSucces(true);
  }

  console.log("WAT ZIJN ERRORS:", succes);

  return (
    <div className="App">
      <header className="App-header">
        {!succes ? (
          <form className="App-header" onSubmit={handleSubmit(logOutput)}>
            <label htmlFor="name">Naam</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="your name here ..."
              {...register("name", {
                required: { value: true, message: "Dit veld is verplicht" },
                pattern: {
                  value: /^[1-9][0-9]{3}?(?!sa|sd|ss)[a-z]{2}$/im,
                  message: "niet geldige postcode",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@you.com"
              {...register("email", {
                validate: (value) => {
                  if (value.includes("@")) {
                    return true;
                  } else {
                    return "Vul aub een email in";
                  }
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="xp">Years of experience</label>
            <input
              id="xp"
              name="xp"
              type="number"
              placeholder="0"
              {...register("xp")}
            />

            <input
              type="submit"
              disabled={errors.name || errors.email || errors.xp}
            />
          </form>
        ) : (
          // <h1>alles is gelukt!</h1>
          <img src={spinner} />
        )}
      </header>
    </div>
  );
}

export default App;
