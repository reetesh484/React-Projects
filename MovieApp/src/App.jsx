import { useState} from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { createContext } from "react";
import Movie from "./components/Movie";
import bg from './assets/bg.jpg'

export const MovieContext = createContext([]);

function App() {
  const [result, setResult] = useState([]);


  const updateResult = (value) => {
    setResult(value)
  }

  return (
    <div className="App p-4 flex flex-col justify-center bg-cover bg-gradient-to-r from-transparent to-black items-center bg-blue-200 min-h-screen" style={{backgroundImage:`url(${bg})`}}>
      <h1 className="text-6xl font-bold">Find Your Movie</h1>
      <MovieContext.Provider value={{result,updateResult}}>
        <SearchInput />
        {
          result?.length > 0 && <Movie />
        }
      </MovieContext.Provider>
    </div>
  );
}

export default App;
