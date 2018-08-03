import React from 'react'

export default props => {
    return(
        <div> 
            <input id="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleChangeName}/>
            <input id="value "type="number" placeholder="00.0" value={this.state.value} onChange={this.handleChangeValue}/>
            <button type="button" onClick={this.handleAdd}>+</button>
        </div>
    )
}