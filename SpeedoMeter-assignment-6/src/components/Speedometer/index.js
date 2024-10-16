import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcceleration = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {
          speed: prevState.speed + 10,
        }
      }
      return null
    })
  }

  onBreakApply = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {
          speed: prevState.speed - 10,
        }
      }
      return null
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>Speedometer</h1>
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            width="850"
            height="300"
          />
        </div>
        <h1 className="speed">Speed is {speed} mph</h1>
        <p>Min Limit is 0 mph,Max Limit is 200 mph</p>
        <div className="buttonsContainer">
          <button
            type="button"
            className="acceleration"
            onClick={this.onAcceleration}
          >
            Acceleration
          </button>
          <button type="button" className="break" onClick={this.onBreakApply}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
