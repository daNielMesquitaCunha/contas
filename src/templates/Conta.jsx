import React from 'react'

export default props => {
    return(
        <li className="list-group-item container item">
            <div className="row li-item">
                <h2 className="name-text col-4">{props.name}</h2>
                <h3 className="name-value col-4">{props.value}</h3>
                <div className="col-4 tam">
                    <button className="btn btn-danger" onClick={() => props.handleRemove(props)}>Remover</button>
                </div>
            </div>
        </li>
    )   
}