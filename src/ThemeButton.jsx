import React from 'react';
import { render } from 'react-dom';

export default class ThemeButton extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleChangeTheme.bind(this)}>{this.props.theme.name}</button>
      </div>
    )
  }
}
