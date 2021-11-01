import React, {Component} from 'react'

class Membro extends Component{

    constructor(props){
        super(props)
        this.state={
            nome:props.nome
        }
        this.entrar=this.entrar.bind(this)
    }

    entrar(nome){
        this.setState({nome:nome})
    }
    render(){
        return(
            <div>
                Olá {this.state.nome}  
                <button onClick={()=> this.entrar('Jeferson')}>
                    Entrar como Jeferson
                </button>
                <button onClick={()=>this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        )
    }
}

export default Membro