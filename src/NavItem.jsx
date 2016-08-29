import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

export default class NavItem extends React.Component {
  render () {
    // return <li><a href={this.props.data.slug}>{this.props.data.menu}</a></li>
    return <li><Link to={"/pages/" + this.props.data.id}>{this.props.data.menu}</Link></li>
  }
}
