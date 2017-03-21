import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <InputBody />
      </div>
    )
  }
}

class InputBody extends App {
  render () {
    return (
      <div className='input'>
        <p className='instructions'>This is where the instructions will go</p>
        <form>
          <input placeholder='Type your answer here' />
          <button type='submit'>Check Answer</button>
        </form>
      </div>
    )
  }
}

export default App
