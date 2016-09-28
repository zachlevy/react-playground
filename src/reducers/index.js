import { combineReducers } from 'redux'
import layout from './layout'
import theme from './theme'

const designApp = combineReducers({
  layout,
  theme
})

export default designApp
