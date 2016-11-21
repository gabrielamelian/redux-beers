const request = require('superagent')

function getBeers (state, dispatch){
  dispatch({type: 'TOGGLE_LOADING'})
  request
    .get('http://rogue-beers.herokuapp.com/api/v1/beers')
    .end((err, res) => {
      if (err) return
      dispatch({type: 'TOGGLE_LOADING'})
      dispatch({type: 'FETCH_BEERS', payload: res.body.beers})
    })
}

module.exports = getBeers
