import React from 'react'
import { connect } from 'react-redux'
import Block from '../containers/Block'
import { setLayout } from '../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    theme: state.theme
  }
}

let Website = ({ theme }) => {
  console.log("Website")
  return (
    <div className={`container theme-${theme}`}>
      <div className="row">
        <div className="col-xs-12">
          <h1>Hello</h1>
          <p>theme: <code>{theme}</code></p>
          <p>Input a theme name, and watch the theme change of the website</p>
          <p>current themes to put into input field are: cerulean, cyborg, flatly, paper</p>
          <a href="#" className="btn btn-primary">Button</a>
          <Block />
        </div>
      </div>
    </div>
  )
}

Website = connect(
  mapStateToProps
)(Website)

export default Website
