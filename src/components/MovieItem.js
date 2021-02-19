import React from 'react'
import { FaWindowClose } from "react-icons/fa"
import {useContext} from 'react'
import MovieContext from '../contexts/MovieContext'

const MovieItem = (props) => {
    
    const {deleteMovie} = useContext(MovieContext);

    const clickHandler = () => {
        deleteMovie(props.id, props.title);
    }

    return (
        <div className = "movie-container">
        
            <div className = "grid grid-col-2 movie-top-area">
                <p className = "">{props.title}</p>
                <FaWindowClose onClick={clickHandler} className = "icon-cursor icon-size-dbl-xlg grid-x-right"/>
            </div>

            <p className="movie-description">
                {props.description}
            </p>

        </div>
    )
}

MovieItem.defaultProps = {
    title: "No Title",
    description: "No description"
}

export default MovieItem
