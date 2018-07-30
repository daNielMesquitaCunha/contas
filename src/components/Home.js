import React, { Component } from 'react'

//import List from './List'
import Conta from './Conta'

class Home extends Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeValue = this.handleChangeValue.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.state = {
            contas: [{}],
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

    render(){
        let contas = this.state.contas.map(conta => {
            return <Conta name={conta.name} valor={conta.value} />
        })
        return (
            <div>
                <h1> Home </h1>
                    <input id="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleChangeName}/>
                    <input id="value "type="number" placeholder="00.0" value={this.state.value} onChange={this.handleChangeValue}/>
                    <button type="button" onClick={this.handleAdd}>+</button>
                {contas}
            </div>
        )
    }
}

export default Home