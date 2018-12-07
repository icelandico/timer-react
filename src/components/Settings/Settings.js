import React, { Component } from 'react';
import './Settings.css'

class Settings extends Component {

  state = {
    timerMinutes: '',
    timerSeconds: '',
    breakMinutes: '',
    breakSeconds: ''
  }

  handleChange = inputType => event => {
    this.setState({[inputType] : this.validate(event.target.value)})
  }

  validate = (num) => {
    const value = num.length > 2 ? num.slice(0, 2) : num
    return value
  }

  render() {
    return(
      <div>
        <div>
          <h2>Set Pomodoro time</h2>
          <div className="timer-container">
          <p>Minutes</p>
          <input type="text"
                 className="input-time"
                 value={this.state.timerMinutes}
                 onChange={this.handleChange('timerMinutes')}
          />
          </div>
          <div className="timer-container">
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.timerSeconds}
                 onChange={this.handleChange('timerSeconds')}
          />
          </div>
        </div>
        <div>
          <h2>Set break time</h2>
          <div className="timer-container">
          <p>Minutes</p>
          <input type="text"
                 className="input-time"
                 value={this.state.breakMinutes}
                 onChange={this.handleChange('breakMinutes')}
          />
          </div>
          <div className="timer-container">
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.breakSeconds}
                 onChange={this.handleChange('breakSeconds')}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default Settings