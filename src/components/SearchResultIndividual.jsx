import React from 'react'
import "./SearchResultIndividual.css"

function SearchResultIndividual({result}) {
  return (
    <div className='search-result-individual' onClick={(e)=> alert(`You Clicked on ${result.name}`)} >{result.name}</div>
  )
}

export default SearchResultIndividual