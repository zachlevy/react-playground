import React from 'react';
import { render } from 'react-dom';
import ThemeButton from './ThemeButton';

export default class ThemeSelector extends React.Component {
  handleChangeTheme(theme) {
    this.props.handleChangeTheme(theme)
  }
  render () {
    return (
      <div>
        {
          this.props.themes.map(function (theme) {
            return <ThemeButton key={theme.name} theme={theme} handleChangeTheme={this.handleChangeTheme.bind(this)}/>
          }.bind(this))
        }
      </div>
    )
  }
}
