import React from 'react';
import { render } from 'react-dom';
import Subpage from "./Subpage"



export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {
        body: null,
        title: null
      }
    }
  }
  componentWillReceiveProps(newProps) {
    const id = newProps.params.id
    fetch("http://localhost:3000/pages/" + id)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        content: data
      })
    })
  }
  render () {
    // if subpages
    if (Array.isArray(this.state.content.body)) {
      // set up main and sidebar
      let main = (
        <div className="col-xs-12 col-sm-8">
          {this.state.content.body.map(function(subpage, index) {
             return <Subpage key={subpage.slug} content={subpage} />
          })}
        </div>
      )
      let sidebar = (
        <div className="col-xs-12 col-sm-4">
          <ul>
            {this.state.content.body.map(function(subpage, index) {
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
          <h1>{this.state.content.title}</h1>
          <p>{this.state.content.body}</p>
        </div>
      )
    }

  }
}

// Page.defaultProps = {
//   sidebar: "left"
// }
