import React, { Component } from 'react'

import List from './List'
import Header from './Header'
import '../styles/Home.css'

class Home extends Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeValue = this.handleChangeValue.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.state = {
            contas: [{name: 'Comida', value: '45.50'}],
            name: '',
            value: "",
        }
    }

    handleChangeName(e){
      this.setState({ ...this.state, name: e.target.value })
    }

    handleChangeValue(e){
        this.setState({...this.state, value: e.target.value})
    }

    handleAdd(){
        const conta = {
            name: this.state.name,
            value: this.state.value,
        }
        this.setState({ ...this.state, name: '', value: '', contas: this.state.contas.concat(conta)})
    }

    handleRemove(cont){

        let novasContas= [];

        const newCounts = this.state.contas.forEach((conta)=>{
            if(conta.name !== cont.name){
                novasContas = novasContas.concat(conta)
            }
        })

        this.setState({ ...this.state, contas: novasContas})
    }

    render(){
        return (
            <div className="container-fluid master">
                <Header/>
                <input id="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleChangeName}/>
            <input id="value "type="number" placeholder="00.0" value={this.state.value} onChange={this.handleChangeValue}/>
            <button type="button" onClick={this.handleAdd}>+</button>
               <List list={this.state.contas} handleRemove={this.handleRemove}/> 
            </div>
        )
    }
}

export default Home