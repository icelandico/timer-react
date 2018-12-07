import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import NavButtons from '../NavButtons/NavButtons';

class Display extends Component {

  state = {
    minutes: '25',
    seconds: '0',
    interval: false
  }

  handleStart = () => {
  this.interval = setInterval(() => {
    let minutes = parseInt(this.state.minutes)
    let seconds = parseInt(this.state.seconds)
    this.setState({
      minutes: seconds === 0 ? minutes - 1 : minutes,
      seconds: seconds !== 0 ? seconds - 1 : 59,
    })
  }, 1000)
}

handleReset = () => {
  this.setState({
    minutes: '25',
    seconds: '0',
    interval: false
  })
  clearInterval(this.interval)
}

handlePause = () => {
  clearInterval(this.interval)
}

  render() {
    return(
      <div>
        <Settings />
        <NavButtons 
          handleStart = {this.handleStart}
          handleReset = {this.handleReset}
          handlePause = {this.handlePause}
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
