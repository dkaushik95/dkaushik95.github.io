import React, {Component} from 'react'
import './App.css'
import Box from './box/Box';

export default class App extends Component{
  

  onClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    return (
      <div className='container'>
        <Box heading='Dishant Kaushik'/>
        <Box heading='Dishant Kaushik'/>
      </div>
    )
  }
}