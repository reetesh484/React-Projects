import { createContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { getMealByCategory,getMealByName, getMealByArea } from "./utils/mealMethods";

export const NavContext = createContext(true);
// export const category = createContext("Vegetarian");
// export const search = createContext("")

function App() {
  const [open, setOpen] = useState(true);
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState("Vegetarian");
  const [area,setArea] = useState("")
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(search){
      getMealByName(search).then(res => setMeals(res)).then(err => console.log(err));
    }else if(area){
      console.log(area)
      getMealByArea(area).then(res => setMeals(res)).then(err => console.log(err))
    }
    else{
      getMealByCategory(category)
      .then((res) => setMeals(res))
      .catch((err) => console.log(err));
    }
  }, [category,search,area]);


  const toggleNav = () => {
    setOpen(!open);
  };

  const changeCategory = (value) => {
    setCategory(value);
  };

  const updateSearch = (value) => {
    setSearch(value);
  }

  const changeArea = (value) => {
    console.log("area changed")
    setArea(value);
  }

  return (
    <div className="App">
      <NavContext.Provider
        value={{ open, toggleNav, category, changeCategory, updateSearch, area,changeArea }}
      >
        <Navbar />
        <Home meals={meals} />
      </NavContext.Provider>
    </div>
  );
}

export default App;
