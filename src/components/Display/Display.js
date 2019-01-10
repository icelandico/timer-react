import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import NavButtons from '../NavButtons/NavButtons';

class Display extends Component {

  state = {
    minutes: '25',
    seconds: '0',
    breakMinutes: '5',
    breakSeconds: '0',
    interval: false,
    isBreak: false
  }

  handleStart = () => {
    this.interval = setInterval(() => {
      let minutes = parseInt(this.state.minutes)
      let seconds = parseInt(this.state.seconds)
      this.setState({
        minutes: seconds === 0 ? minutes - 1 : minutes,
        seconds: seconds !== 0 ? seconds - 1 : 59,
      })
      this.handleFinish()
    }, 1000)
  }

  handleFinish = () => {
    if (!this.state.seconds && !this.state.minutes) {
      this.handleReset();
      this.handleSwitchBreak();
      setTimeout(() => alert('Finished!'), 0)
    }
  }

  handleSwitchBreak = () => {
    this.setState({
      isBreak: !this.state.isBreak
    })
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

  handleSetSettings = (minutes, seconds, breakMinutes, breakSeconds) => {
    this.handleReset()
    this.setState({
      minutes,
      seconds,
      breakMinutes,
      breakSeconds
    })
  }

  handleSetDefault = () => {
    this.setState({
      minutes: '25',
      seconds: '0',
      breakMinutes: '5',
      breakSeconds: '0'
    })
  }

  render() {
    return(
      <div>
        <Settings 
          handleSetSettings={this.handleSetSettings}
          handleSetDefault={this.handleSetDefault}
        />
        <NavButtons 
          handleStart = {this.handleStart}
          handleReset = {this.handleReset}
          handlePause = {this.handlePause}
          handleSetDefault = {this.handleSetDefault}
        />
        <TimeDisplay
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          breakMinutes={this.state.breakMinutes}
          breakSeconds={this.state.breakSeconds}
          isBreak={this.state.isBreak}
        />
      </div>
    )
  }
}

export default Display
