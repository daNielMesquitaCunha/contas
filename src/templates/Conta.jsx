import React from 'react'

export default props => {
    return(
        <li className="list-group-item item">
            <h2 className="name-text">{props.name}</h2>
            <h3 className="name-value">{props.value}</h3>
            <button className="btn btn-danger" onClick={() => props.handleRemove(props)}>Remover</button>
        </li>
    )   
}