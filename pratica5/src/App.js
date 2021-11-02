import React,{Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      email:'jeferson@teste.com',
      senha:'',
      sexo:'M'
    }
    this.trocaemail=this.trocaemail.bind(this)
    this.trocasexo=this.trocasexo.bind(this)
  }
  trocaemail(e){
    let valordigitado = e.target.value
    this.setState({email:valordigitado})

  }
  trocasexo(e){
    let valordigitado = e.target.value
    this.setState({sexo:valordigitado})
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type='email' name='email' value={this.state.email} onChange={this.trocaemail}/> <br/>
        Senha:
        <input type='password' name='senha' value={this.state.senha} 
        onChange={(e)=> this.setState({senha:e.target.value})} /> <br/>
        Sexo:
        <select name='sexo' value={this.state.sexo} onChange ={this.trocasexo}>
          <option value='M'>M</option>
          <option value = 'F'> F</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    )
  }
}

export default App