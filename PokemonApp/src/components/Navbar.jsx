import React, { useState } from 'react'

const Navbar = () => {
    const [query, setQuery] = useState("")
  return (
    <div className='min-h-10 min-w-full bg-slate-500 flex justify-around items-center p-4  '>
        <div className="logo text-white font-extrabold">
            POKEAPI
        </div>
        <div className="search">
            <input type="text" className='text-slate-900 p-2 outline-0' name="query" value={query} onChange={(e) => setQuery(e.target.value)} />
            <span className='bg-teal-300 px-4 py-3 cursor-pointer'>Search</span>
        </div>
    </div>
  )
}

export default Navbar