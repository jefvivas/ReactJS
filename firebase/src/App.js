import React, { Component} from 'react'
import {initializeApp} from "firebase/app"
import { getDatabase, ref, set,onValue, push,remove,child } from "firebase/database";


export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      emailInput: '',
      nomeInput: '',
      token: 'carregando...',
      nome: '',
      email: ''
    }
    this.cadastrar = this.cadastrar.bind(this)

    const firebaseConfig = {
      apiKey: "AIzaSyAPwPFM-Qji2qMuYuMhAZESdi_FCTHUi2c",
      authDomain: "reactapp-536b1.firebaseapp.com",
      projectId: "reactapp-536b1",
      storageBucket: "reactapp-536b1.appspot.com",
      messagingSenderId: "577373390689",
      appId: "1:577373390689:web:7a27e423f60abfe73aa720",
      measurementId: "G-SJGR052PCM"
    };

    const app = initializeApp(firebaseConfig);

    var database = getDatabase(app)
    
    const valores3 = ref(database,'token/token');
    onValue(valores3, (snapshot) => {
    let state = this.state
    state.token = snapshot.val()
    this.setState(state)});
    
    const valores = ref(database,'/usuarios/1');
    onValue(valores, (snapshot) => {
    let state = this.state
    state.email = snapshot.val().email
    state.nome = snapshot.val().nome
    this.setState(state)});

  }

  cadastrar(e){

    const db = getDatabase();

    // add token no caminho/token um objeto token:valor
    /*set(ref(db, '/token'), {
      token :this.state.tokenInput
    });*/

    // add nome no caminho /usuario/1 mantendo msm email
   /* set(ref(db,'/usuarios/1'),{
      nome: this.state.tokenInput,
      email: this.state.email
    })*/

    // retira cargo do caminho usuarios/1
   // remove(ref(db,'/usuarios/1/cargo'))

   //add nova chave aleatoria ao /usuarios no banco db
   const newPostKey = push(child(ref(db), 'usuarios')).key;

   set(ref(db,`/usuarios/${newPostKey}`),{
    nome: this.state.nomeInput,
    email: this.state.emailInput
   })
    e.preventDefault()
  }

  render(){
    const { token,nome,email } = this.state
    return(
      <div>
        <form onSubmit={this.cadastrar}>
        <input type='text' value = { this.state.nomeInput} onChange ={(e)=> this.setState({nomeInput :e.target.value})}/><br/>

        <input type='text' value = { this.state.emailInput} onChange ={(e)=> this.setState({emailInput :e.target.value})}/><br/>

        <button type='submit' >Cadastrar </button>
        </form>
        <h1>Token: {token} </h1>
        <h1>Nome: {nome} </h1>
        <h1>Email: {email} </h1>
      </div>
    )
  }
}

