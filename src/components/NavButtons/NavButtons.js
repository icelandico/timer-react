import React, { Component } from 'react';

class NavButtons extends Component {

handleStart = () => {
  this.props.handleStart();
}

handleReset = () => {
  this.props.handleReset();
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
                onClick={this.handleReset}
        >
          Reset
        </button>
        <button type="button"
                id="default"
                onClick={this.handleSetDefault}
        >
          Default Pomodoro
        </button>
        <button type="button"
                id="reset"
                onClick={this.handlePause}
        >
          Pause
        </button>
      </div>
    )
  }
}

export default NavButtons