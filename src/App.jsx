import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BrillpepsWebsite from "./BrillpepsWebsite";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrillpepsWebsite />
    </>
  );
}

export default App;
