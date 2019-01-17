import React, { Component } from 'react';

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
        <button type="button"
                id="start"
                onClick={this.handleStart}
        >
          Start!
        </button>
        <button type="button"
                id="pause"
                onClick={this.handlePause}
        >
          Pause
        </button>
        <button type="button"
                id="default"
                onClick={this.handleSetDefault}
        >
          Default Pomodoro
        </button>
      </div>
    )
  }
}

export default NavButtons