import React from 'react';
import { render } from 'react-dom';

export default class ThemeButton extends React.Component {
  handleChangeThemeButton() {
    this.props.handleChangeThemeSelector(this.props.theme)
  }
  render () {
    return (
      <div>
        <button onClick={this.handleChangeThemeButton.bind(this)}>{this.props.theme.name}</button>
      </div>
    )
  }
}
