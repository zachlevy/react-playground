import React from 'react';
import { render } from 'react-dom';
import ThemeButton from './ThemeButton';

export default class ThemeSelector extends React.Component {
  handleChangeTheme(theme) {
    this.props.handleChangeTheme(theme)
  }
  handleChangeSidebar(side) {
    this.props.handleChangeSidebar(side)
  }
  render () {
    return (
      <div>
        {
          this.props.themes.map(function (theme) {
            return <ThemeButton key={theme.name} theme={theme} handleChangeTheme={this.handleChangeTheme.bind(this)}/>
          }.bind(this))
        }
        <button onClick={this.handleChangeSidebar.bind(this, "left")} value="left">Left</button>
        <button onClick={this.handleChangeSidebar.bind(this, "right")} value="right">Right</button>
      </div>
    )
  }
}
