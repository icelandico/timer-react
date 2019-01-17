import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class NavButtons extends Component {

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
        <Button
          type="button"
          id="start"
          onClick={this.handleStart}
        >
          Start!
        </Button>
        <Button
          type="button"
          id="pause"
          onClick={this.handlePause}
        >
          Pause
        </Button>
        <Button
          type="button"
          id="default"
          onClick={this.handleSetDefault}
        >
          Default Pomodoro
        </Button>
      </div>
    )
  }
}

export default NavButtons