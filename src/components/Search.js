import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';

// class Search extends Component {
//     state = {
//         text: '',    
//     }

//     handleChange = (e) => {
//         this.setState({ text: e.target.value })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.onSearch(this.state.text)
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input className="searchField" type="text" placeholder="Type in a city" onChange={this.handleChange}/>
//                 <input className="searchButton" type="submit" value="Search"/>
//             </form>
//         )
//     }
// }


const Search = (props) => {
    const [query, setQuery] = useState('');
     const handleChange = (e) => {
         setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSearch(query)
    } 
    
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}`)
    //         .then(res => res.json())
    //         .then(data => setResults(data.city.name))

    // }

    // )
    
    return (
        <form onSubmit={handleSubmit}>
            <input className="searchField" type="text" placeholder="Type in a city" value={query} onChange={handleChange}/>
            <input className="searchButton" type="submit" value="Search"/>
        </form>
    );
 };
 

export default Search;

{/* <div>
            <input
 type="text"
 value={query}
 onChange={(e) =>
 setQuery(e.target.value)}
 />
        </div> */}