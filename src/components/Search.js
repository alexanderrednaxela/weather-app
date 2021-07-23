import React, { useState } from 'react';


const Search = (props) => {
    const [query, setQuery] = useState('');
     const handleChange = (e) => {
         setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSearch(query)
    } 
    
    return (
        <form onSubmit={handleSubmit}>
            <input className="searchField" type="text" placeholder="Type in a city" value={query} onChange={handleChange}/>
            <input className="searchButton" type="submit" value="Search"/>
        </form>
    );
 };
 

export default Search;

