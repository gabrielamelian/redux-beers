const clone = require('clone')
const getStyles = require('./requests/getStyles')

const reducer = (state, action) => {
  const newState = clone(state)


  switch(action.type){
    case 'FETCH_BEERS':
      newState.showStyle = false
      newState.beers = action.payload
      newState.styles = getStyles(newState.beers)
      console.log(newState.styles);
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'SHOW_STYLE':
      newState.showStyle = true
      newState.sortedBeersByStyle = sortStyle(newState.beers, action.payload)
      return newState
    case 'SHOW_ALL':
      newState.showStyle = false
      return newState
    default:
      return newState
  }
}

function sortStyle(beers, style) {
  return beers.filter(function (beer) {
    return beer.style === style
  })
}



module.exports = reducer
