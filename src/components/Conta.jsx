import React from 'react'

export default props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.valor}</h2>
            <button>Remover</button>
        </div>
    )
}