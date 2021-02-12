import React from 'react'
import "../css/App.css"
import Modal from "./Modal"
import Header from "./Header"
import SearchBox from "./SearchBox"
import AddMovieForm from "./AddMovieForm"
import MovieList from "./MovieList"
import Footer from "./Footer"
import {useState, useEffect} from 'react'

const App = () => {
    const [movies, setMovies] = useState([]);
    // const [state, setState] = useState(initialState);
    
    const [modal,setModal] = useState({
        msg: '',
        visible: false
    });

    const [addFormState,setAddFormState] = useState(false);

    const filterMovies = (input) => {
        let newMovies = movies.filter((movie) => {
            return movie.title.includes(input)
        })

        if (input === "") {
            newMovies = JSON.parse(localStorage.getItem("movies"));
        }

        setMovies(newMovies);
    }

    const toggleAddForm = () => {
        setAddFormState(!addFormState);
    }
    
    const deleteMovie = (id, title) => {
        const newMovieList = movies.filter((movie) => {
            return movie.id !== id
        });
        localStorage.setItem("movies", JSON.stringify(newMovieList));
        setMovies(newMovieList);

        setModal({
            msg: `${title} has been deleted!`,
            visible: true
        })
        //alert(`${title} has been deleted!`);
    }

    const addMovie = (newMovie) => {
        localStorage.setItem("movies", JSON.stringify([...movies, newMovie]) );
        setMovies([...movies, newMovie]);
        
        setModal({
            msg: `${newMovie.title} has been added successfully`,
            visible: true
        })
    }

    const hideModal = () => {
        setModal({
            msg: '',
            visible: false
        });
    }

    // use effect will fire off when the components finish loading
    useEffect(() => {

            if(localStorage.getItem("movies")) {
                const newMovies = JSON.parse(localStorage.getItem("movies"));
                setMovies(newMovies);
            }

        }, [] // This function will only be called once
    )

    return (
        <div className = "container">
            <Modal modalState = {modal} onHide = {hideModal}/>
            <Header onToggleAddForm = {toggleAddForm}/>
            <SearchBox onFilter = {filterMovies}/>
            <main>
                <AddMovieForm addFormState = {addFormState} onAddMovie = {addMovie} />
                <MovieList onDeleteMovie = {deleteMovie} movies = {movies}/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;