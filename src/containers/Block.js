import React from 'react'
import { connect } from 'react-redux'
import Content from '../containers/Content'

const mapStateToProps = (state) => ({
  theme: state.theme
})

const templates = [
  {
    name: "sidebar-right",
    contents: 2,
    template: (
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <h3>Left Content</h3>
        </div>
        <div className="col-xs-12 col-sm-4">
          <h3>Right Sidebar</h3>
        </div>
      </div>
    )
  }, {
    name: "sidebar-left",
    contents: 2,
    template: (
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h3>Left Sidebar</h3>
        </div>
        <div className="col-xs-12 col-sm-8">
          <h3>Right Content</h3>
        </div>
      </div>
    )
  }
]

let Block = ({ theme }) => (
  <div className={`block`}>
    <h2>Block</h2>
    <Content template={templates[0].template} />
  </div>
)

Block = connect(
  mapStateToProps
)(Block)

export default Block
