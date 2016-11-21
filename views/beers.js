const html = require('yo-yo')
const beer = require('./beer')
const getBeers = require('../requests/getBeers')
const getStyles = require('../requests/getStyles')

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


module.exports = template
