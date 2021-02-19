import React from 'react'
import Modal from '../components/Modal'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import AddMovieForm from '../components/AddMovieForm'
import MovieList from '../components/MovieList'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Modal/>
            <Header/>
            <SearchBox/>
            <main>
                <AddMovieForm/>
                <MovieList/>
            </main>
            <Footer/>
        </>
    )
}

export default Home
