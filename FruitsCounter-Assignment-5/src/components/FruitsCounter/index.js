import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  incrementmango = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  incrementbanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="main">
        <div className="mainContainer">
          <h1>
            Bob ate {mangoesCount} Mangoes and {bananaCount} Bananas
          </h1>
          <div className="subContainer">
            <div className="fruitsContainer1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="fruit"
              />
              <button
                type="button"
                className="btn"
                onClick={this.incrementmango}
              >
                Ate Mango
              </button>
            </div>
            <div className="fruitsContainer2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="fruit"
              />
              <button
                type="button"
                className="btn"
                onClick={this.incrementbanana}
              >
                Ate Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
