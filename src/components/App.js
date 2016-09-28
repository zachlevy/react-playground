import React from 'react'

import OverBar from '../containers/OverBar'
import Website from '../containers/Website'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("app constructor")
  }
  render () {
    return (
      <div>
        <OverBar />
        <Website />
      </div>
    )
  }
}

export default App
