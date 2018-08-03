import React, { Component } from 'react'
import Conta from '../templates/Conta'

export default class List extends Component {

    render(){
        
        let soma = 0;

        const contas = this.props.list.map((conta, key) => {
            soma = soma + Number(conta.value)
            return (
                <Conta name={conta.name}
                       value={conta.value}
                       handleRemove={this.props.handleRemove} 
                       key = {key}/>
            )
        })

        return (
            <div className="list">
                <ul className="list-group list-group-flush group">
                    { contas }              
                </ul>
                <div className="total">
                    <h1 className="name-text">Total {soma}</h1>        
                </div>
            </div>
        )
    }
    
}