import React, { Component } from 'react'

class Settings extends Component {

  state = {
    timerMinutes: '25',
    timerSeconds: '00',
    breakMinutes: '05',
    breakSeconds: '00'
  }

  render() {
    return(
      <div>
        <div>
          <h2>Set Pomodoro time</h2>
          <p>
            {this.state.timerMinutes} : {this.state.timerSeconds}
          </p>
        </div>
        <div>
          <h2>Set break time</h2>
          <p>
            {this.state.breakMinutes} : {this.state.breakSeconds}
          </p>
        </div>
      </div>
    )
  }
}

export default Settings