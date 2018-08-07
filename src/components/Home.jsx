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
            contas: [],
            name: '',
            value: "",
        }
    }

    handleChangeName(e){
      this.setState({ ...this.state, name: e.target.value })
      console.log(this.state.name)
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
            <div className="container">
                <Header valueName ={this.state.name} onChangeName={this.handleChangeName} value={this.state.value} onChangeValue={this.handleChangeValue} adicionar={this.handleAdd}/>
                <List list={this.state.contas} handleRemove={this.handleRemove}/> 
            </div>
        )
    }
}

export default Home