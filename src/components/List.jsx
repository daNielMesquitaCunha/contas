import React, { Component } from 'react'
import Conta from './Conta'

export default class List extends Component {

    render(){

        const contas = this.props.list.map((conta, key) => {
            return (
                <div key={key}>
                    <h2>{conta.name}</h2>
                    <h2>{conta.value}</h2>
                    <button onClick={() => this.props.handleRemove(conta)}>Remover</button>
                 </div>
            )
        })

        return (
            <div>
                { contas }
            </div>
        )
    }
    
}