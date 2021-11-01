import { render } from '@testing-library/react'
import React, {Component} from 'react'
import Feed from './components/Feed'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {

    feed:[
      {id:1,username:'Jeferson',curtidas:4,comentarios:2},
      {id:2,username:'Vinicius',curtidas:24,comentarios:13},
      {id:3,username:'Raquel',curtidas:5,comentarios:15},
      {id:4,username:'Joel',curtidas:1,comentarios:0}

    ]
  }
}
  render(){

    return(
      <div>
        {this.state.feed.map((lista)=>{
          return(
            <Feed id={lista.id} username={lista.username}
              curtidas={lista.curtidas} comentarios={lista.comentarios}/>
          )
        })}
      </div>
    )
  }
}

export default App