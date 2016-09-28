import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  theme: state.theme
})

let Content = ({ theme, template }) => (
  <div>
    {template}
  </div>
)

Content = connect(
  mapStateToProps
)(Content)

export default Content
