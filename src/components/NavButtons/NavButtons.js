import React, { Component } from 'react';

class NavButtons extends Component {
  render() {
    return(
      <div>
        <button type="button">
          Start!
        </button>
        <button type="button">
          Default Pomodoro
        </button>
        <button type="button">
          Reset
        </button>
      </div>
    )
  }
}

export default NavButtons