const html = require('yo-yo')
const request = require('superagent')
const beer = require('./beer')

const template = (state, dispatch) => {
  return html`
  <div>
    <h1>BEERS</h1>
    <ul>
      ${state.loading ? html`<div>LOADING...</div>` : ''}
      ${beer(state, dispatch)}
    </ul>
    <button onclick=${() => getBeers(state, dispatch)}>Refresh</button>
  </div>
  `
}

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
module.exports = template
