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
          <p>Minutes</p>
          <input type="text"
                 className="input-time"
                 value={this.state.timerMinutes}
          />
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.timerSeconds}
          />
        </div>
        <div>
          <h2>Set break time</h2>
          <p>Minutes</p>
          <input type="text"
                 className="input-time"
                 value={this.state.breakMinutes}
          />
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.breakSeconds}
          />
        </div>
      </div>
    )
  }
}

export default Settings