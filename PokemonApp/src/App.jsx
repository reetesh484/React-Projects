import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import Navbar from "./components/Navbar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { populate } from "./features/pokeSlice";
import Home from "./components/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [pokemon, setPokemon] = useState([]);
  const details = useSelector((state) => state.poke.details, shallowEqual);


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
      .then((res) => setPokemon([res.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App ">
      <Navbar />

      {(!details || details?.length < 1) && pokemon[0] ? (
        <Home details={pokemon[0]} />
      ) : (
        <Home details={details} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
