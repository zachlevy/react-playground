import React from 'react';
import { render } from 'react-dom';
import { NavItem } from "./NavItem"

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

export class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          {navs.map(function(nav, index) {
             return <NavItem key={index} data={nav}/>;
          })}
        </ul>
      </nav>
    )
  }
}
