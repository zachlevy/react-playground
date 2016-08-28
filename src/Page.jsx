import React from 'react';
import { render } from 'react-dom';
import Subpage from "./Subpage"



export default class Page extends React.Component {
  render () {
    if (Array.isArray(this.props.content.body)) {
      return (
        <div>
          <div>
            {this.props.content.body.map(function(subpage, index) {
               return <Subpage key={subpage.slug} content={subpage} />
            })}
          </div>
          <div>
            <ul>
              {this.props.content.body.map(function(subpage, index) {
                 return <li key={subpage.slug}>{subpage.title}</li>
              })}
            </ul>
          </div>
        </div>
      )
    } else {
      let content = this.props.content.body
      return (
        <div>
          <h1>{content.title}</h1>
          <p>{content.body}</p>
        </div>
      )
    }

  }
}
