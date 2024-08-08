import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onLight = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isLightMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light-mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onLight} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
