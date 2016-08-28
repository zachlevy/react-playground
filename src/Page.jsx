import React from 'react';
import { render } from 'react-dom';



export default class Page extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.content.title}</h1>
        <p>{this.props.content.body}</p>
      </div>
    )
  }
}
