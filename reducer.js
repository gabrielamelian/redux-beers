const clone = require('clone')

const reducer = (state, action) => {
  const newState = clone(state)


  switch(action.type){
    case 'FETCH_BEERS':
      newState.beers = action.payload
      newState.styles = getStyles(newState.beers)
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'TOGGLE_STYLE':
      newState.showStyle = !newState.showStyle
      newState.sortedBeersByStyle = sortStyle(newState.beers, action.payload)
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

function getStyles(beers) {
  const styles = []
  beers.forEach(function(beer) {
    if (!styles.includes(beer.style)) styles.push(beer.style)
  })
  return styles
}

module.exports = reducer
