import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme
})



let OverBar = ({ theme, dispatch }) => {

  let input

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(setTheme(input.value))
    console.log("switch theme with query")
    document.querySelector('body').className = `theme-${input.value}`
    document.querySelector('html').className = `theme-${input.value}`
    input.value = ''
  }

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
          <a className="navbar-brand" href="#">Dice</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <div className="form-group">
            <form className="navbar-form" onSubmit={handleOnSubmit}>
              <ul className="nav navbar-nav">
                <li>
                  <input className="form-control" ref={node => {
                    input = node
                  }} />
                </li>
                <li>
                  <button className="btn btn-primary" type="submit">
                    Set Theme
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}
OverBar = connect(
  mapStateToProps
)(OverBar)

export default OverBar
