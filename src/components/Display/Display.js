import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import NavButtons from '../NavButtons/NavButtons';

class Display extends Component {

  state = {
    minutes: '10',
    seconds: '9'
  }

  handleStart = () => {
  const interval = setInterval(() => {
    let minutes = parseInt(this.state.minutes)
    let seconds = parseInt(this.state.seconds)
    this.setState({
      minutes: seconds === 0 ? minutes - 1 : minutes,
      seconds: seconds !== 0 ? seconds - 1 : 59
    })
  }, 1000)
}

  render() {
    return(
      <div>
        <Settings />
        <NavButtons 
          handleStart = {this.handleStart}
        />
        <TimeDisplay
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
      </div>
    )
  }
}

export default Display
