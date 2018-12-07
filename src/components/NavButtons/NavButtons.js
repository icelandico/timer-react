import React, { Component } from 'react';

class NavButtons extends Component {

handleStart = () => {
  this.props.handleStart()
}

  render() {
    return(
      <div>
        <button type="button"
                id="start"
                onClick={() => this.handleStart()}
        >
          Start!
        </button>
        <button type="button"
                id="pause"
                onClick={() => this.handlePause()}
        >
          Reset
        </button>
        <button type="button"
                id="default"
                onClick={() => this.handleSetDefault()}
        >
          Default Pomodoro
        </button>
        <button type="button"
                id="reset"
                onClick={() => this.handleReset()}
        >
          Reset
        </button>
      </div>
    )
  }
}

export default NavButtons