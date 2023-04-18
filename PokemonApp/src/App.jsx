import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import axios from "axios";
import Navbar from './components/Navbar'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
     axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => setPokemon([...pokemon,res.data.results]))
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <div className="App bg-gradient-to-r  from-orange-300 to-cyan-300 min-h-[100vh]  flex flex-wrap gap-2 justify-center items-center">
    <Navbar />
    {
      pokemon[0] && pokemon[0].map((item,index) => {
        return  <Card key={index} item={item}/>
      })
    }
    </div>
  )
}

export default App
