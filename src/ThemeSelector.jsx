import React from 'react';
import { render } from 'react-dom';
import ThemeButton from './ThemeButton';

export default class ThemeSelector extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.themes.map(function (theme) {
            // return <ThemeButton key={theme.name} theme={theme} onClick={this.handleButtonClick} />
            return <ThemeButton key={theme.name} theme={theme} />
          }.bind(this))
        }
      </div>
    )
  }
}
