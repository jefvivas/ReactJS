import React, {Component} from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      status:false

    }
    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
  }

  sair(){
    this.setState({status:false})
  }
  entrar(){
    this.setState({status:true})
  }

  render(){

    return(
      <div>
        {this.state.status ?
        <div>
          <h1>Estou funcionando pq sou true</h1>
          <button onClick={this.sair}>Sair no sistema</button>
        </div>:
        <div>
          <h1>Apareci pq sou false</h1>
          <button onClick={this.entrar}>Entrar no sistema</button>

        </div>

        }
        
      </div>
    )
  }
}

export default App