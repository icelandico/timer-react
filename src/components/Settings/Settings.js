import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { SettingsStyles } from './Settings-styles';
import ActionButton from '../StyleComponents/Button'

class SettingsComponent extends Component {

  state = {
    timerMinutes: '25',
    timerSeconds: '0',
    breakMinutes: '5',
    breakSeconds: '0',
  }

  get classes() {
    return this.props.classes
  }

  handleChange = inputType => event => {
    this.setState({[inputType] : event.target.value})
  }

  handleSetSettings = (timerMinutes, timerSeconds, breakMinutes, breakSeconds) => {
    this.props.handleSetSettings(timerMinutes, timerSeconds, breakMinutes, breakSeconds)
  }

  render() {
    return(
      <div className={this.classes.settings}>
        <h2>Set Pomodoro time</h2>
        <div className={this.classes.settingsContainer}>
          <div>
          <p>Minutes</p>
          <TextField
            className={this.classes.input}
            id="filled-uncontrolled"
            margin="normal"
            variant="filled"
            defaultValue={this.state.timerMinutes}
            onChange={this.handleChange('timerMinutes')}
            type="text"
            inputProps={{
              maxLength: 2,
              style: { textAlign: 'center' }
            }}
          />
          </div>
          <div>
          <p>Seconds</p>
          <TextField
            className={this.classes.input}
            id="filled-uncontrolled"
            margin="normal"
            variant="filled"
            defaultValue={this.state.timerSeconds}
            onChange={this.handleChange('timerSeconds')}
            type="text"
            inputProps={{
              maxLength: 2,
              style: { textAlign: 'center' }
            }}
          />
          </div>
        </div>
        <h2>Set break time</h2>
        <div className={this.classes.settingsContainer}>
          <div>
            <p>Minutes</p>
            <TextField
              className={this.classes.input}
              id="filled-uncontrolled"
              margin="normal"
              variant="filled"
              defaultValue={this.state.breakMinutes}
              onChange={this.handleChange('breakMinutes')}
              type="text"
              inputProps={{
                maxLength: 2,
                style: { textAlign: 'center' }
              }}
            />
          </div>
          <div>
            <p>Seconds</p>
            <TextField
              className={this.classes.input}
              id="filled-uncontrolled"
              margin="normal"
              variant="filled"
              defaultValue={this.state.breakSeconds}
              onChange={this.handleChange('breakSeconds')}
              type="text"
              inputProps={{
                maxLength: 2,
                style: { textAlign: 'center' }
              }}
            />
          </div>
        </div>
        <div>
          <ActionButton
            className={this.classes.setButton}
            onClick={() => this.handleSetSettings(this.state.timerMinutes, this.state.timerSeconds, this.state.breakMinutes, this.state.breakSeconds)}
          >
            Set
            </ActionButton>
        </div>
      </div>
    )
  }
}

export const Settings = withStyles(SettingsStyles)(SettingsComponent)
export default Settings