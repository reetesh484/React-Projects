import { createContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";

export const NavContext = createContext(true);

function App() {
  const [open, setOpen] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <NavContext.Provider value={{ open, toggleNav }}>
        <Navbar />
        <Home meals={meals}/>
      </NavContext.Provider>
    </div>
  );
}

export default App;
