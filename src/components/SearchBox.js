import React from 'react'
import {useState, useContext} from 'react'
import MovieContext from '../contexts/MovieContext'

const SearchBox = () => {

    const {filterMovies} = useContext(MovieContext);

    const [searchBox, setSearchBox] = useState("");

    return (
        <section className="search-box-container">
            
            <form action="" className="grid grid-col-1">
                <input placeholder="Enter Movie Title" className="form-control" type="text" id="filter"
                value = {searchBox} onChange = {(event) => {
                    setSearchBox(event.target.value);
                    filterMovies(event.target.value);
                }}/>
            </form>
    
        </section>
    )
}

export default SearchBox
