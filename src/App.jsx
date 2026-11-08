import { useState } from 'react';
import heroImg from './assets/hero.png';
import viteLogo from './assets/vite.svg';
import './App.css';
import { SearchBar } from './components/searchbar';
import SearchResults from './components/SearchResults';


function App() {
const [results,setResults] = useState([])
  return (
   <div className='App'>
    <div className='search-bar-container'>
  <SearchBar setResults={setResults} > </SearchBar>
   <SearchResults results={results} ></SearchResults>
    </div>
  
   </div>
  )
}

export default App
