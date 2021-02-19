import React from 'react'
import MovieItem from "./MovieItem"
import {useContext} from 'react'
import MovieContext from '../contexts/MovieContext'

const MovieList = () => {

    const {movies} = useContext(MovieContext);

    return (
        <section className="movie-list-continer">
            {movies.map((movie) => (
                <MovieItem key={movie.id}
                    id = {movie.id}
                    title = {movie.title} 
                    description = {movie.description}/>
            ))}
        </section>
    )
}

export default MovieList
