import React from 'react'
import Navbar from '../templates/Navbar'

export default props => (
    <Navbar title="Suas Contas" 
    valueName={props.valueName} 
    onChangeName={props.onChangeName} 
    value={props.value} 
    onChangeValue={props.onChangeValue} 
    adicionar={props.adicionar}/>
)