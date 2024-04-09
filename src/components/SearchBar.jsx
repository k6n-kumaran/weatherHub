import React from 'react'

const SearchBar = ({search, setSearch , handleClick}) => {

    
  return (
    <div className='relative px-1'>
        <input 
         type="text" 
         placeholder='Search the City'
         className='rounded-3xl px-2 py-2 md:py-1 w-full sm:w-[450px] md:w-[350px] lg:w-[400px] border-none outline-none text-sm md:text-lg text-[#5b6847]   '
         name='search'
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
         <button className='bg-[#76885B] absolute right-0  hover:bg-[#515e3d] duration-200 text-white text-sm md:text-lg font-semibold py-2 md:py-1  px-2 sm:px-4 rounded-3xl' onClick={handleClick}>Search Weather</button>
    </div>
  )
}

export default SearchBar