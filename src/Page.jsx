import React from 'react';
import { render } from 'react-dom';
import Subpage from "./Subpage"



export default class Page extends React.Component {
  render () {
    // if subpages
    if (Array.isArray(this.props.content.body)) {
      // set up main and sidebar
      let main = (
        <div className="col-xs-12 col-sm-8">
          {this.props.content.body.map(function(subpage, index) {
             return <Subpage key={subpage.slug} content={subpage} />
          })}
        </div>
      )
      let sidebar = (
        <div className="col-xs-12 col-sm-4">
          <ul>
            {this.props.content.body.map(function(subpage, index) {
               return <li key={subpage.slug}>{subpage.title}</li>
            })}
          </ul>
        </div>
      )
      // put columns into an array
      let columns;
      if (this.props.sidebar == "left") {
        columns = [sidebar, main]
      } else {
        columns = [main, sidebar]
      }

      return (
        <div className="row">
          {columns.map(function(column, index) {
             return <div key={index}>{column}</div>
          })}
        </div>
      )
    } else {
      return (
        <div>
          <h1>{this.props.content.title}</h1>
          <p>{this.props.content.body}</p>
        </div>
      )
    }

  }
}
