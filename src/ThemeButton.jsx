import React from 'react';
import { render } from 'react-dom';

export default class ThemeButton extends React.Component {
  handleChangeTheme() {
    this.props.handleChangeTheme(this.props.theme)
  }
  render () {
    return (
      <div>
        <button onClick={this.handleChangeTheme.bind(this)}>{this.props.theme.name}</button>
      </div>
    )
  }
}
