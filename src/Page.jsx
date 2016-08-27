import React from 'react';
import { render } from 'react-dom';

const pageContent = {
  title: "Services",
  body: "content content content \n great content"
}

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <h1>{pageContent.title}</h1>
        <p>{pageContent.body}</p>
      </div>
    )
  }
}
