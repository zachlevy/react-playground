import React from 'react';
import { render } from 'react-dom';
import NavItem from "./NavItem"

const navs = [
  {
    text: "Home",
    url: "/#/"
  },{
    text: "Services",
    url: "/#/services"
  },{
    text: "About",
    url: "/#/about"
  },{
    text: "Home",
    url: "/#/contact"
  }
]

export default class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/#/">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {navs.map(function(nav, index) {
                 return <NavItem key={index} data={nav}/>;
              })}
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
