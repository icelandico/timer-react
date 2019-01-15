import React, { Component } from 'react';
import './Settings.css'

class Settings extends Component {

  state = {
    timerMinutes: this.props.time.minutes,
    timerSeconds: this.props.time.seconds,
    breakMinutes: this.props.time.breakMinutes,
    breakSeconds: this.props.time.breakSeconds
  }

  handleChange = inputType => event => {
    this.setState({[inputType] : event.target.value})
  }

  handleSetSettings = (timerMinutes, timerSeconds, breakMinutes, breakSeconds) => {
    this.props.handleSetSettings(timerMinutes, timerSeconds, breakMinutes, breakSeconds)
  }

  componentDidUpdate(prevProps) {
    if (this.props.time !== prevProps.time)
      this.setState({
        timerMinutes: '',
        timerSeconds: '',
        breakMinutes: '',
        breakSeconds: ''
      })
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
                 maxLength="2"
          />
          </div>
          <div className="timer-container">
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.timerSeconds}
                 onChange={this.handleChange('timerSeconds')}
                 maxLength="2"
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
                 maxLength="2"
          />
          </div>
          <div className="timer-container">
          <p>Seconds</p>
          <input type="text"
                 className="input-time"
                 value={this.state.breakSeconds}
                 onChange={this.handleChange('breakSeconds')}
                 maxLength="2"
          />
          <button type="button"
                  onClick={() => this.handleSetSettings(this.state.timerMinutes, this.state.timerSeconds, this.state.breakMinutes, this.state.breakSeconds)}
          >
          Set
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings