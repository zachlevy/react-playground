export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: action.theme
      }
    default:
      return state
  }
}
