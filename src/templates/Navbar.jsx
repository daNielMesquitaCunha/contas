import React from 'react'

export default props => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="localhost:3000">{props.title}</a>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nova conta
                    </button>
                    <div className="dropdown-menu">
                        <form className="px-4 py-3">
                            <div className="form-group">
                                <label>Conta</label>
                                <input type="text" className="form-control"placeholder="" value={props.valueName} onChange={props.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Valor</label>
                                <input type="number" className="form-control" placeholder="0.00" value={props.value} onChange={props.onChangeValue}/>
                            </div>
                            <button type="button" className="btn btn-primary"  onClick={props.adicionar}> Adicionar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}