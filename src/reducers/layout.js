const layout = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      return {
        layout: action.layout
      }
    default:
      return state
  }
}

export default layout
