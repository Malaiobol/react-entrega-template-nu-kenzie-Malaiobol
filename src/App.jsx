import { useState } from "react";
import "./App.css";
import { DefaultHome } from "./components/DefaultHome";
import { StartedHome } from "./components/StartedHome";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <StartedHome setLogin={setLogin} />
      ) : (
        <DefaultHome setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
