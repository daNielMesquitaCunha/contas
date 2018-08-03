import React from 'react'

export default props => {
    return(
        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="localhost:3000">{props.title}</a>
            </nav>
        </div>
    )
}