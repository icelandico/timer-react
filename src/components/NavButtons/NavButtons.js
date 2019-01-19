import React, { Component } from 'react';
import ActionButton from '../StyleComponents/Button'

class NavButtons extends Component {

  get classes() {
    return this.props.classes
  }

  handleStart = () => {
    return this.props.timeRunning ? null : this.props.handleStart();
  }

  handlePause = () => {
    this.props.handlePause();
  }

  handleSetDefault = () => {
    this.props.handleSetDefault();
  }

    render() {
      return(
        <div>
          <ActionButton
            onClick={this.handleStart}
          >
            Start!
          </ActionButton>
          <ActionButton
            onClick={this.handlePause}
          >
            Pause
          </ActionButton>
          <ActionButton
            onClick={this.handleSetDefault}
          >
            Default Pomodoro
          </ActionButton>
        </div>
      )
    }
  }

export default NavButtons
