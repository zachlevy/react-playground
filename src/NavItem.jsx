import React from 'react';
import { render } from 'react-dom';

export default class NavItem extends React.Component {
  render () {
    return <li><a href={this.props.data.url}>{this.props.data.text}</a></li>
  }
}
