import React from 'react'
import {useContext} from 'react'
import ModalContext from '../contexts/ModalContext'

const Header = () => {

    const {toggleAddForm} = useContext(ModalContext);

    return (
        <header className ="grid grid-col-3" onClick = {() => {toggleAddForm()}}>
            <h1><a href="/">Movie Binge Watching</a></h1>
            <a href="/about-us">About Us</a>
            <button className ="btn btn-primary grid-x-right"  type="button"> Add movie</button>
        </header>
    )
}

export default Header
