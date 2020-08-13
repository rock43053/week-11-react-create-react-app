import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {

constructor (props) {
  super(props)
  //this.state.displayTime = ''
  this.state = {
    displayTime: ''
  }
}


  componentDidMount () {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);

  }

  tick () {
    this.setState({
      displayTime: new Date().toString()
    })
  }
  //render is standard
  render () {
    const displayTime = this.state.displayTime
    const visitorName = this.state.visitorName

    return (
      <div className="clock">
        <h2>Time is {displayTime}</h2>
        <div>Thanks for visiting "Great Visitor" {visitorName}</div>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="" alt="logo" />

      </header>
      <Clock />
    </div>
  )
}

export default App;
