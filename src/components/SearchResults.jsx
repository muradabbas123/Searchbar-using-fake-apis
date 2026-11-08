import React from 'react'
import "./SearchResult.css"
import SearchResultIndividual from './SearchResultIndividual'
function SearchResults({ results }) {
  return (
<div className="class-list">
 {
    results.map((result, id) => {
    return <SearchResultIndividual result={result} key={id}/>
    }
    )
}
</div>
  )
}

export default SearchResults