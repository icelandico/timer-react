import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import NavButtons from '../NavButtons/NavButtons';
import { DisplayStyles } from './Display-styles';
import withStyles from "@material-ui/core/styles/withStyles";

class Display extends Component {

  state = {
    minutes: '25',
    seconds: '0',
    breakMinutes: '5',
    breakSeconds: '0',
    initialTime: {
      minutes: '25',
      seconds: '0',
      breakMinutes: '5',
      breakSeconds: '0'
    },
    interval: false,
    isBreak: false
  }

  handleStart = () => {
    this.switchInterval()
    this.handleInterval()
  }

  handleInterval = () => {
    this.interval = setInterval(() => {
      if (!this.state.isBreak) {
        let minutes = parseInt(this.state.minutes)
        let seconds = parseInt(this.state.seconds)
        this.setState({
          minutes: seconds === 0 ? minutes - 1 : minutes,
          seconds: seconds !== 0 ? seconds - 1 : 59,
        })
      } else {
        let minutes = parseInt(this.state.breakMinutes)
        let seconds = parseInt(this.state.breakSeconds)
        this.setState({
          breakMinutes: seconds === 0 ? minutes - 1 : minutes,
          breakSeconds: seconds !== 0 ? seconds - 1 : 59,
        })
      }
      this.handleFinish()
    }, 1000)
  }

  handleFinish = () => {
    if (!this.state.isBreak) { 
      if (!this.state.seconds && !this.state.minutes) {
        clearInterval(this.interval)
        this.handleSwitchBreak();
        this.switchInterval()
        setTimeout(() => alert('Finished!'), 0)
      }
    } else {
      if (!this.state.breakSeconds && !this.state.breakMinutes) {
        clearInterval(this.interval)
        this.handleSwitchBreak();
        this.switchInterval()
        this.handleResetTime()
        setTimeout(() => alert('Finished!'), 0)
      }
    }
  }

  handleResetTime = () => {
    this.setState({
      minutes: this.state.initialTime.minutes,
      seconds: this.state.initialTime.seconds,
      breakMinutes: this.state.initialTime.breakMinutes,
      breakSeconds: this.state.initialTime.breakSeconds,
    })
  }

  handleSwitchBreak = () => {
    this.setState({
      isBreak: !this.state.isBreak
    })
  }

  switchInterval = () => {
    this.setState({
      interval: !this.state.interval
    })
  }

  handlePause = () => {
    this.switchInterval()
    clearInterval(this.interval)
  }

  handleSetSettings = (minutes, seconds, breakMinutes, breakSeconds) => {
    this.setState({
      minutes,
      seconds,
      breakMinutes,
      breakSeconds,
      interval: false,
      initialTime: {
        minutes,
        seconds,
        breakMinutes,
        breakSeconds
      }
    })
    clearInterval(this.interval)
  }

  handleSetDefault = () => {
    this.setState({
      minutes: '25',
      seconds: '0',
      breakMinutes: '5',
      breakSeconds: '0'
    })
  }

  get classes() {
    return this.props.classes
  }

  render() {
    const timeRunning = this.state.interval
    return(
      <div className={this.classes.main}>
        <Settings 
          handleSetSettings={this.handleSetSettings}
          handleSetDefault={this.handleSetDefault}
        />
        <NavButtons 
          handleStart = {this.handleStart}
          handlePause = {this.handlePause}
          handleSetDefault = {this.handleSetDefault}
          timeRunning={timeRunning}
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

export default withStyles(DisplayStyles)(Display)
