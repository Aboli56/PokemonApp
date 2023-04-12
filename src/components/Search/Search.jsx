import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
        <h2 className='search-icon'> <i className="fa-solid fa-magnifying-glass"></i></h2>
        <input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Type to Search...."/>
    </div>
  )
}

export default Search;