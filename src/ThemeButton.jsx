import React from 'react';
import { render } from 'react-dom';

export default class ThemeButton extends React.Component {
  handleChangeTheme() {
    console.log("handleChangeTheme")
  }
  render () {
    return (
      <div>
        <button onClick={this.handleChangeTheme}>{this.props.theme.name}</button>
      </div>
    )
  }
}
