import React from 'react'
import Conta from './Conta'

export default props => {

    const render = () => {
        return props.list.map((conta) => {
            <Conta name={conta.name} valor={conta.value} />
        })
        console.log(props.list)
    }

    return (
        <div>
            { render() }
        </div>
    )
}