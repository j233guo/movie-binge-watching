import React from 'react'

const Header = (props) => {
    return (
        <header className ="grid grid-col-1-200px" onClick = {() => {props.onToggleAddForm()}}>
            <h1>Movie Binge Watching</h1>
            <button className ="btn btn-primary grid-x-right"  type="button"> Add movie</button>
        </header>
    )
}

export default Header
