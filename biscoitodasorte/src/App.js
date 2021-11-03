import React, {Component} from 'react'
import  './style.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      textoFrase:''

    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = ['A vida trará coisas boas se tiveres paciência.','Não compense na ira o que lhe falta na razão.','Defeitos e virtudes são apenas dois lados da mesma moeda.'
    ,'Não há que ser forte. Há que ser flexível.','Siga os bons e aprenda com eles.']
  }

  quebraBiscoito(){
    let state = this.state
    let numRandom = Math.floor(Math.random() * this.frases.length)
    state.textoFrase =  '" ' + this.frases[numRandom] + ' "'
    this.setState(state)

  }

  render(){
    return(
      <div className='container'>
        <img className='image' alt='Biscoito' src={require('./assets/biscoito.png').default}/>
        <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className='frase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App