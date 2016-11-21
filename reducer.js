const clone = require('clone')

const reducer = (state, action) => {
  const newState = clone(state)


  switch(action.type){
    case 'FETCH_BEERS':
      newState.beers = action.payload
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'TOGGLE_STYLE':
      newState.showStyle = !newState.showStyle
      return newState
    default:
      return newState
  }
}

module.exports = reducer
