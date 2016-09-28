import cerulean from './css/cerulean.css'
import cyborg from './css/cyborg.css'
import flatly from './css/flatly.css'
import paper from './css/paper.css'
import styles from './css/index.css'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

// const store = createStore(reducer) // without dev tools
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension()) // for dev tools


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
